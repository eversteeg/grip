/* eslint-disable @typescript-eslint/no-use-before-define */
import {
    basicErrorHandler,
    setError,
    setHasError,
    setHasInactivityTimeout,
    setHasUnauthorizedCall,
} from '../error/actions';
import {
    constructEntityUrl,
    encodeQueryParameters,
    getBasicAuthenticationHeader,
    getBearerAuthenticationHeader,
    getHeaders,
} from '../helpers';
import { EntityActionTypes, EntityRequest, Method, SET_IS_TOKEN_BEING_REFRESHED } from './types';
import { getTokenInformation, setLocalTokenStorage } from '../../utils/token';
import { Error } from '../../../@types/error/Error';
import moment from 'moment';
import { ThunkResult } from '../store';
import { TokenInformation } from '../../../@types/user/TokenInformation';

let refreshTokenPromise: Promise<void>;

export const entityRequest =
    ({
        body,
        callbackError,
        callbackSuccess,
        entity,
        isPublic = true, // this should be false, but couldn't get it to work properly right now
        method = 'GET',
        parameters,
    }: EntityRequest): ThunkResult =>
    (dispatch, getState): Promise<void> => {
        const { isTokenBeingRefreshed } = getState().entity;

        const dispatchEntityRequest = (resolve: () => void): void => {
            void dispatch(
                handleEntityRequest({
                    body,
                    callbackError,
                    callbackSuccess,
                    entity,
                    isPublic,
                    method,
                    parameters,
                })
            ).then(() => {
                resolve();
            });
        };

        return new Promise((resolve) => {
            if (isTokenBeingRefreshed) {
                void refreshTokenPromise.then(() => {
                    dispatchEntityRequest(resolve);
                });
            } else if (isPublic) {
                void dispatchEntityRequest(resolve);
            } else {
                void dispatch(refreshToken()).then(() => {
                    const { hasInactivityTimeout } = getState().error;

                    if (!hasInactivityTimeout) {
                        dispatchEntityRequest(resolve);
                    }
                });
            }
        });
    };

export const handleEntityRequest =
    ({
        body,
        callbackError,
        callbackSuccess,
        entity,
        isPublic,
        method,
        parameters,
    }: EntityRequest & {
        method: Method;
    }): ThunkResult<Promise<void>> =>
    (dispatch, getState): Promise<void> => {
        const {
            config: { baseEntity, baseUrl, gripPassword, gripUsername },
            language: { locale },
        } = getState();

        const { accessToken } = getTokenInformation();

        const fetchOptions: RequestInit = {
            headers: {
                ...getHeaders(locale),
                Authorization:
                    accessToken && !isPublic
                        ? getBearerAuthenticationHeader(accessToken)
                        : getBasicAuthenticationHeader(gripPassword, gripUsername),
            },
            method,
        };

        if (method === 'DELETE') {
            fetchOptions.headers = {
                ...fetchOptions.headers,
                Authorization: isPublic ? '' : getBearerAuthenticationHeader(getTokenInformation().accessToken),
            };
        }

        if (method === 'POST' || method === 'PUT') {
            // In order to not loose input because the value is undefined, convert it to null so JSON.stringify won't remove it
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            fetchOptions.body = JSON.stringify(body, (_, value) => (value === undefined ? null : value));
        }

        return fetch(constructEntityUrl(baseUrl, baseEntity, entity, parameters), fetchOptions)
            .then((response) => {
                dispatch(basicErrorHandler(response.status, `${baseEntity}/${entity}`, method, callbackError));

                return response.json();
            })
            .then((response) => {
                dispatch(setHasUnauthorizedCall(false));
                dispatch(setHasError(false));
                dispatch(setError({} as Error));
                callbackSuccess(response);
            })
            .catch((error) => {
                const status = (error as string).toString() === 'TypeError: Failed to fetch' ? 100 : 101;
                dispatch(setHasError(true));

                dispatch(
                    setError({
                        code: status,
                        description: error,
                    })
                );

                if (status === 100) {
                    callbackError(error);
                } else {
                    throw error;
                }
            });
    };

export const refreshToken =
    (): ThunkResult<Promise<void>> =>
    (dispatch, getState): Promise<void> => {
        const { authenticationUrl, baseEntity, gripPassword, gripUsername } = getState().config;
        const id = getState().user.user.UserId || -1;
        const { locale } = getState().language;
        dispatch(setIsTokenBeingRefreshed(true));
        dispatch(setHasInactivityTimeout(false));

        const fetchOptions: RequestInit = {
            body: encodeQueryParameters({
                id,
                refreshToken: getTokenInformation().refreshToken,
                refreshTokenExpires: moment(getTokenInformation().expirationTimestamp).toISOString(),
            }),
            headers: {
                ...getHeaders(locale),
                Authorization: getBasicAuthenticationHeader(gripPassword, gripUsername),
            },
            method: 'POST',
        };

        refreshTokenPromise = fetch(
            constructEntityUrl(authenticationUrl, baseEntity, '/account/token/RefreshToken'),
            fetchOptions
        )
            .then((response) => {
                if (response.status === 420) {
                    dispatch(setHasInactivityTimeout(true));
                    dispatch(setIsTokenBeingRefreshed(false));
                }

                return response.json();
            })
            .then((TokenObject: TokenInformation) => {
                // eslint-disable-next-line no-console
                console.log('**************** refreshed token:', TokenObject);

                // Set token data
                setLocalTokenStorage(TokenObject);
                dispatch(setIsTokenBeingRefreshed(false));
            });

        return refreshTokenPromise;
    };

export const setIsTokenBeingRefreshed = (isTokenBeingRefreshed: boolean): EntityActionTypes => ({
    payload: isTokenBeingRefreshed,
    type: SET_IS_TOKEN_BEING_REFRESHED,
});

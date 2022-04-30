/* eslint-disable @typescript-eslint/no-use-before-define */
import {
    basicErrorHandler,
    setHasInactivityTimeout,
    setHasServerError,
    setHasUnauthorizedCall,
    setServerError,
} from '../error/actions';
import {
    constructEntityUrl,
    encodeQueryParameters,
    getBearerAuthenticationHeader,
    getHeaders,
    getOauthHeaders,
} from '../helpers';
import { EntityActionTypes, EntityRequest, Method, SET_IS_TOKEN_BEING_REFRESHED } from './types';
import { getTokenInformation, setLocalTokenStorage } from '../../utils/token';
import moment from 'moment';
import { ServerErrorObject } from '../error/types';
import { ThunkResult } from '../store';
import { TokenInformation } from '../../../@types/user/TokenInformation';

let refreshTokenPromise: Promise<void>;

export const entityRequest =
    ({
        body,
        callbackError,
        callbackSuccess,
        entity,
        isPublic = false,
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
                dispatchEntityRequest(resolve);
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
            config: { baseEntity, baseUrl },
            language: { locale },
        } = getState();

        const fetchOptions: RequestInit = {
            headers: getHeaders(locale),
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
                dispatch(setHasServerError(false));
                dispatch(setServerError({} as ServerErrorObject));
                callbackSuccess(response);
            })
            .catch((error) => {
                const status = (error as string).toString() === 'TypeError: Failed to fetch' ? 100 : 101;
                dispatch(setHasServerError(true));

                dispatch(
                    setServerError({
                        description: error,
                        status,
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
        const { authenticationUrl, baseEntity } = getState().config;
        const id = getState().user.user.UserId || -1;
        dispatch(setIsTokenBeingRefreshed(true));
        dispatch(setHasInactivityTimeout(false));

        refreshTokenPromise = fetch(`${authenticationUrl}/${baseEntity}/account/token/RefreshToken`, {
            body: encodeQueryParameters({
                id,
                refreshToken: getTokenInformation().refreshToken,
                refreshTokenExpires: moment(getTokenInformation().expirationTimestamp).toISOString(),
            }),
            headers: getOauthHeaders(),
            method: 'POST',
        })
            .then((response) => response.json())
            .then((TokenObject: TokenInformation) => {
                /* eslint-disable-next-line */
                console.log('**************** refreshed token:', TokenObject);

                setLocalTokenStorage(TokenObject);
                dispatch(setIsTokenBeingRefreshed(false));
            });

        return refreshTokenPromise;
    };

export const setIsTokenBeingRefreshed = (isTokenBeingRefreshed: boolean): EntityActionTypes => ({
    payload: isTokenBeingRefreshed,
    type: SET_IS_TOKEN_BEING_REFRESHED,
});

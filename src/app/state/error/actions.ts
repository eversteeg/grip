/* eslint-disable @typescript-eslint/no-use-before-define */
import {
    ErrorActionTypes,
    RESET,
    ServerErrorObject,
    SET_ENTITY_VIOLATION,
    SET_HAS_ENTITY_VIOLATION,
    SET_HAS_INACTIVITY_TIMEOUT,
    SET_HAS_SERVER_ERROR,
    SET_HAS_UNAUTHORIZED_CALL,
    SET_SERVER_ERROR,
} from './types';
import { EntityViolation } from '../../../@types/error/EntityViolation';
// import { Method } from '../entity/types';
import { ThunkResult } from '../store';

export type Method = 'DELETE' | 'GET' | 'POST' | 'PUT';

export const basicErrorHandler =
    (
        status: number,
        entity: string,
        method: Method,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        callbackError?: (...args: any[]) => any
    ): ThunkResult =>
    (dispatch): void => {
        if ((status >= 400 && status < 600 && status !== 420) || status >= 602) {
            // eslint-disable-next-line no-console
            console.log(entity, method);

            let description = '';

            // An exception needs to be made for LinkToPerson, because this situation needs to be handled differently
            // description = `Error in entity call '${entity}' using method: '${method}'. Response status: ${status}`;
            description += '';
            dispatch(setHasServerError(true));

            dispatch(
                setServerError({
                    description,
                    status,
                })
            );

            if (callbackError) {
                dispatch(callbackError());
            }

            throw new Error(description);
        }
    };

export const resetEntityViolations =
    (): ThunkResult =>
    (dispatch): void => {
        void dispatch(setHasEntityViolation(false));
        void dispatch(setEntityViolation({} as EntityViolation));
    };

export const resetErrors = (): ErrorActionTypes => ({
    type: RESET,
});

export const setEntityViolation = (entityViolation: EntityViolation): ErrorActionTypes => ({
    payload: entityViolation,
    type: SET_ENTITY_VIOLATION,
});

export const setHasEntityViolation = (hasEntityViolation: boolean): ErrorActionTypes => ({
    payload: hasEntityViolation,
    type: SET_HAS_ENTITY_VIOLATION,
});

export const setHasInactivityTimeout = (hasInactivityTimeout: boolean): ErrorActionTypes => ({
    payload: hasInactivityTimeout,
    type: SET_HAS_INACTIVITY_TIMEOUT,
});
export const setHasServerError = (hasServerError: boolean): ErrorActionTypes => ({
    payload: hasServerError,
    type: SET_HAS_SERVER_ERROR,
});

export const setHasUnauthorizedCall = (hasUnauthorizedCall: boolean): ErrorActionTypes => ({
    payload: hasUnauthorizedCall,
    type: SET_HAS_UNAUTHORIZED_CALL,
});

export const setServerError = (serverError: ServerErrorObject): ErrorActionTypes => ({
    payload: serverError,
    type: SET_SERVER_ERROR,
});

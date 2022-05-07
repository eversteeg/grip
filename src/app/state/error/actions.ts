/* eslint-disable @typescript-eslint/no-use-before-define */
import {
    ErrorActionTypes,
    RESET,
    SET_ERROR,
    SET_HAS_ERROR,
    SET_HAS_INACTIVITY_TIMEOUT,
    SET_HAS_UNAUTHORIZED_CALL,
} from './types';
import { Error } from '../../../@types/error/Error';
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

            const description = '';

            dispatch(
                setError({
                    code: status,
                    description,
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
        void dispatch(setHasError(false));
        void dispatch(setError({} as Error));
    };

export const resetErrors = (): ErrorActionTypes => ({
    type: RESET,
});

export const setError = (error: Error): ErrorActionTypes => ({
    payload: error,
    type: SET_ERROR,
});

export const setHasError = (hasError: boolean): ErrorActionTypes => ({
    payload: hasError,
    type: SET_HAS_ERROR,
});

export const setHasInactivityTimeout = (hasInactivityTimeout: boolean): ErrorActionTypes => ({
    payload: hasInactivityTimeout,
    type: SET_HAS_INACTIVITY_TIMEOUT,
});

export const setHasUnauthorizedCall = (hasUnauthorizedCall: boolean): ErrorActionTypes => ({
    payload: hasUnauthorizedCall,
    type: SET_HAS_UNAUTHORIZED_CALL,
});

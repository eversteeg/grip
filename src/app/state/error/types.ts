import { Error } from '../../../@types/error/Error';

export interface ErrorState {
    error: Error;
    hasError: boolean;
    hasInactivityTimeout: boolean;
    hasServerError: boolean;
    hasUnauthorizedCall: boolean;
}

export interface ServerErrorObject {
    description: string;
    status: number;
}

export const RESET = 'error.RESET';

interface ResetAction {
    type: typeof RESET;
}

export const SET_ERROR = 'error.SET_ERROR';

interface SetErrorAction {
    payload: Error;
    type: typeof SET_ERROR;
}

export const SET_HAS_ERROR = 'error.SET_HAS_ERROR';

interface setHasErrorAction {
    payload: boolean;
    type: typeof SET_HAS_ERROR;
}

export const SET_HAS_INACTIVITY_TIMEOUT = 'error.SET_HAS_INACTIVITY_TIMEOUT';

interface SetHasInactivityTimeout {
    payload: boolean;
    type: typeof SET_HAS_INACTIVITY_TIMEOUT;
}

export const SET_HAS_SERVER_ERROR = 'error.SET_HAS_SERVER_ERROR';

interface setHasServerErrorAction {
    payload: boolean;
    type: typeof SET_HAS_SERVER_ERROR;
}

export const SET_HAS_UNAUTHORIZED_CALL = 'error.SET_HAS_UNAUTHORIZED_CALL';

interface SetHasUnauthorizedCallAction {
    payload: boolean;
    type: typeof SET_HAS_UNAUTHORIZED_CALL;
}

export type ErrorActionTypes =
    | ResetAction
    | SetErrorAction
    | setHasErrorAction
    | SetHasInactivityTimeout
    | setHasServerErrorAction
    | SetHasUnauthorizedCallAction;

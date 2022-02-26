import { EntityViolation } from '../../../@types/error/EntityViolation';

export interface ErrorState {
    entityViolation: EntityViolation;
    hasEntityViolation: boolean;
    hasInactivityTimeout: boolean;
    hasServerError: boolean;
    hasUnauthorizedCall: boolean;
    serverError: ServerErrorObject;
}

export interface ServerErrorObject {
    description: string;
    status: number;
}

export const RESET = 'error.RESET';

interface ResetAction {
    type: typeof RESET;
}

export const SET_ENTITY_VIOLATION = 'error.SET_ENTITY_VIOLATION';

interface SetEntityViolationAction {
    payload: EntityViolation;
    type: typeof SET_ENTITY_VIOLATION;
}

export const SET_HAS_ENTITY_VIOLATION = 'error.SET_HAS_ENTITY_VIOLATION';

interface SetHasEntityViolationAction {
    payload: boolean;
    type: typeof SET_HAS_ENTITY_VIOLATION;
}

export const SET_HAS_INACTIVITY_TIMEOUT = 'error.SET_HAS_INACTIVITY_TIMEOUT';

interface SetHasInactivityTimeout {
    payload: boolean;
    type: typeof SET_HAS_INACTIVITY_TIMEOUT;
}

export const SET_HAS_SERVER_ERROR = 'error.SET_HAS_SERVER_ERROR';

interface SetHasServerErrorAction {
    payload: boolean;
    type: typeof SET_HAS_SERVER_ERROR;
}

export const SET_HAS_UNAUTHORIZED_CALL = 'error.SET_HAS_UNAUTHORIZED_CALL';

interface SetHasUnauthorizedCallAction {
    payload: boolean;
    type: typeof SET_HAS_UNAUTHORIZED_CALL;
}

export const SET_SERVER_ERROR = 'error.SET_SERVER_ERROR';

interface SetServerErrorAction {
    payload: ServerErrorObject;
    type: typeof SET_SERVER_ERROR;
}

export type ErrorActionTypes =
    | ResetAction
    | SetEntityViolationAction
    | SetHasEntityViolationAction
    | SetHasInactivityTimeout
    | SetHasServerErrorAction
    | SetHasUnauthorizedCallAction
    | SetServerErrorAction;

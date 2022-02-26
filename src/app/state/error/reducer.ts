import {
    ErrorActionTypes,
    ErrorState,
    RESET,
    SET_ENTITY_VIOLATION,
    SET_HAS_ENTITY_VIOLATION,
    SET_HAS_INACTIVITY_TIMEOUT,
    SET_HAS_SERVER_ERROR,
    SET_HAS_UNAUTHORIZED_CALL,
    SET_SERVER_ERROR,
} from './types';

const initialState: ErrorState = {
    entityViolation: {} as ErrorState['entityViolation'],
    hasEntityViolation: false,
    hasInactivityTimeout: false,
    hasServerError: false,
    hasUnauthorizedCall: false,
    serverError: {} as ErrorState['serverError'],
};

export default (state = initialState, action: ErrorActionTypes): ErrorState => {
    switch (action.type) {
        /* eslint-disable padding-line-between-statements */
        case RESET:
            return {
                ...initialState,
            };
        /* eslint-enable padding-line-between-statements */

        case SET_ENTITY_VIOLATION:
            return {
                ...state,
                entityViolation: action.payload,
            };

        case SET_HAS_ENTITY_VIOLATION:
            return {
                ...state,
                hasEntityViolation: action.payload,
            };

        case SET_HAS_INACTIVITY_TIMEOUT:
            return {
                ...state,
                hasInactivityTimeout: action.payload,
            };

        case SET_HAS_SERVER_ERROR:
            return {
                ...state,
                hasServerError: action.payload,
            };

        case SET_HAS_UNAUTHORIZED_CALL:
            return {
                ...state,
                hasUnauthorizedCall: action.payload,
            };

        case SET_SERVER_ERROR:
            return {
                ...state,
                serverError: action.payload,
            };

        default:
            return state;
    }
};

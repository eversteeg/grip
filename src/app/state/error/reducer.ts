import {
    ErrorActionTypes,
    ErrorState,
    RESET,
    SET_ERROR,
    SET_HAS_ERROR,
    SET_HAS_INACTIVITY_TIMEOUT,
    SET_HAS_UNAUTHORIZED_CALL,
} from './types';

const initialState: ErrorState = {
    error: {} as ErrorState['error'],
    hasError: false,
    hasInactivityTimeout: false,
    hasUnauthorizedCall: false,
};

export default (state = initialState, action: ErrorActionTypes): ErrorState => {
    switch (action.type) {
        /* eslint-disable padding-line-between-statements */
        case RESET:
            return {
                ...initialState,
            };
        /* eslint-enable padding-line-between-statements */

        case SET_ERROR:
            return {
                ...state,
                error: action.payload,
            };

        case SET_HAS_ERROR:
            return {
                ...state,
                hasError: action.payload,
            };

        case SET_HAS_INACTIVITY_TIMEOUT:
            return {
                ...state,
                hasInactivityTimeout: action.payload,
            };

        case SET_HAS_UNAUTHORIZED_CALL:
            return {
                ...state,
                hasUnauthorizedCall: action.payload,
            };

        default:
            return state;
    }
};

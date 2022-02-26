import {
    SET_HAS_LOGIN_ERROR,
    SET_IS_AUTHENTICATED,
    SET_IS_AUTHENTICATING,
    SET_IS_LOADING,
    SET_IS_PASSWORD_REQUESTED,
    SET_IS_PASSWORD_RESET,
    SET_IS_SETTINGS_LOADING,
    SET_IS_SETTINGS_REFRESH_REQUIRED,
    SET_IS_SETTINGS_SAVING,
    SET_USER_SETTINGS,
    UserSettingsActionTypes,
    UserSettingsState,
} from './types';

const initialState: UserSettingsState = {
    hasLoginError: false,
    isAuthenticated: false,
    isAuthenticating: false,
    isLoading: false,
    isPasswordRequested: false,
    isPasswordReset: false,
    isSettingsLoading: false,
    isSettingsRefreshRequired: false,
    isSettingsSaving: false,
    settings: {} as UserSettingsState['settings'],
};

export default (state = initialState, action: UserSettingsActionTypes): UserSettingsState => {
    switch (action.type) {
        case SET_HAS_LOGIN_ERROR:
            return {
                ...state,
                hasLoginError: action.payload,
            };

        case SET_IS_AUTHENTICATED:
            return {
                ...state,
                isAuthenticated: action.payload,
            };

        case SET_IS_AUTHENTICATING:
            return {
                ...state,
                isAuthenticating: action.payload,
            };

        case SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload,
            };

        case SET_IS_PASSWORD_REQUESTED:
            return {
                ...state,
                isPasswordRequested: action.payload,
            };

        case SET_IS_PASSWORD_RESET:
            return {
                ...state,
                isPasswordReset: action.payload,
            };

        case SET_IS_SETTINGS_LOADING:
            return {
                ...state,
                isSettingsLoading: action.payload,
            };

        case SET_IS_SETTINGS_REFRESH_REQUIRED:
            return {
                ...state,
                isSettingsRefreshRequired: action.payload,
            };

        case SET_IS_SETTINGS_SAVING:
            return {
                ...state,
                isSettingsSaving: action.payload,
            };

        case SET_USER_SETTINGS:
            return {
                ...state,
                settings: action.payload,
            };

        default:
            return state;
    }
};

import {
    LOG_OUT,
    SET_HAS_LOGIN_ERROR,
    SET_IS_AUTHENTICATED,
    SET_IS_AUTHENTICATING,
    SET_IS_LOADING,
    SET_IS_LOGGEDIN,
    SET_IS_PASSWORD_REQUESTED,
    SET_IS_PASSWORD_RESET,
    SET_IS_PERSIST_LOADING,
    SET_IS_RECAPTCHA_TOKEN_VALID,
    SET_IS_RECAPTCHA_TOKEN_VERIFIED,
    SET_IS_SETTINGS_LOADING,
    SET_IS_SETTINGS_REFRESH_REQUIRED,
    SET_IS_SETTINGS_SAVING,
    SET_IS_VERIFYING_RECAPTCHA_TOKEN,
    SET_USER,
    SET_USER_SETTINGS,
    UserActionTypes,
    UserState,
} from './types';

const initialState: UserState = {
    hasLoginError: false,
    isAuthenticated: false,
    isAuthenticating: false,
    isLoading: false,
    isLoggedIn: false,
    isPasswordRequested: false,
    isPasswordReset: false,
    isPersistLoading: false,
    isReCaptchaTokenValid: false,
    isReCaptchaTokenVerified: false,
    isSettingsLoading: false,
    isSettingsRefreshRequired: false,
    isSettingsSaving: false,
    isVerifyingReCaptchaToken: false,
    loginError: {} as UserState['loginError'],
    settings: {} as UserState['settings'],
    user: {} as UserState['user'],
};

export default (state = initialState, action: UserActionTypes): UserState => {
    switch (action.type) {
        case LOG_OUT:
            return {
                ...initialState,
            };

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

        case SET_IS_LOGGEDIN:
            return {
                ...state,
                isLoggedIn: action.payload,
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

        case SET_IS_PERSIST_LOADING:
            return {
                ...state,
                isPersistLoading: action.payload,
            };

        case SET_IS_RECAPTCHA_TOKEN_VALID:
            return {
                ...state,
                isReCaptchaTokenValid: action.payload,
            };

        case SET_IS_RECAPTCHA_TOKEN_VERIFIED:
            return {
                ...state,
                isReCaptchaTokenVerified: action.payload,
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

        case SET_IS_VERIFYING_RECAPTCHA_TOKEN:
            return {
                ...state,
                isVerifyingReCaptchaToken: action.payload,
            };

        case SET_USER_SETTINGS:
            return {
                ...state,
                settings: action.payload,
            };

        case SET_USER:
            return {
                ...state,
                user: action.payload,
            };

        default:
            return state;
    }
};

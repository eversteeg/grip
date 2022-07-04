import { ErrorObject } from '../../../@types/error/ErrorObject';
import { User } from '../../../@types/user/User';
import { UserSettings } from '../../../@types/user/UserSettings';

export interface UserState {
    hasLoginError: boolean;
    isAuthenticated: boolean;
    isAuthenticating: boolean;
    isLoading: boolean;
    isLoggedIn: boolean;
    isPasswordRequested: boolean;
    isPasswordReset: boolean;
    isPersistLoading: boolean;
    isReCaptchaTokenValid: boolean;
    isReCaptchaTokenVerified: boolean;
    isSettingsLoading: boolean;
    isSettingsRefreshRequired: boolean;
    isSettingsSaving: boolean;
    isVerifyingReCaptchaToken: boolean;
    loginError: ErrorObject;
    settings: UserSettings;
    user: User;
}

export const LOG_OUT = 'user.LOG_OUT';

export interface LogoutAction {
    type: typeof LOG_OUT;
}

export const RESET_LOGIN_ERRORS = 'user.oauth.RESET_LOGIN_ERRORS';

interface ResetLoginErrorsAction {
    type: typeof RESET_LOGIN_ERRORS;
}

export const SET_HAS_LOGIN_ERROR = 'user.oauth.SET_HAS_LOGIN_ERROR';

interface SetHasLoginErrorAction {
    payload: boolean;
    type: typeof SET_HAS_LOGIN_ERROR;
}

export const SET_IS_AUTHENTICATED = 'user.oauth.SET_IS_AUTHENTICATED';

interface SetIsAuthenticatedAction {
    payload: boolean;
    type: typeof SET_IS_AUTHENTICATED;
}

export const SET_IS_AUTHENTICATING = 'user.oauth.SET_IS_AUTHENTICATING';

interface SetIsAuthenticatingAction {
    payload: boolean;
    type: typeof SET_IS_AUTHENTICATING;
}

export const SET_IS_LOADING = 'user.SET_IS_LOADING';

interface SetIsLoadingAction {
    payload: boolean;
    type: typeof SET_IS_LOADING;
}

export const SET_IS_LOGGEDIN = 'user.SET_IS_LOGGEDIN';

interface SetIsLoggedInAction {
    payload: boolean;
    type: typeof SET_IS_LOGGEDIN;
}

export const SET_IS_PASSWORD_REQUESTED = 'user.SET_IS_PASSWORD_REQUESTED';

interface SetIsPasswordRequestedAction {
    payload: boolean;
    type: typeof SET_IS_PASSWORD_REQUESTED;
}

export const SET_IS_PASSWORD_RESET = 'user.SET_IS_PASSWORD_RESET';

interface SetIsPasswordResetAction {
    payload: boolean;
    type: typeof SET_IS_PASSWORD_RESET;
}

export const SET_IS_PERSIST_LOADING = 'user.SET_IS_PERSIST_LOADING';

interface SetIsPersistLoading {
    payload: boolean;
    type: typeof SET_IS_PERSIST_LOADING;
}

export const SET_IS_RECAPTCHA_TOKEN_VALID = 'user.SET_IS_RECAPTCHA_TOKEN_VALID';

interface SetIsReCaptchaTokenValidAction {
    payload: boolean;
    type: typeof SET_IS_RECAPTCHA_TOKEN_VALID;
}

export const SET_IS_RECAPTCHA_TOKEN_VERIFIED = 'user.SET_IS_RECAPTCHA_TOKEN_VERIFIED';

interface SetIsReCaptchaTokenVerifiedAction {
    payload: boolean;
    type: typeof SET_IS_RECAPTCHA_TOKEN_VERIFIED;
}

export const SET_IS_SETTINGS_LOADING = 'user.settings.SET_IS_SETTINGS_LOADING';

interface SetIsSettingsLoadingAction {
    payload: boolean;
    type: typeof SET_IS_SETTINGS_LOADING;
}

export const SET_IS_SETTINGS_REFRESH_REQUIRED = 'user.settings.SET_IS_SETTINGS_REFRESH_REQUIRED';

interface SetIsSettingsRefreshRequiredAction {
    payload: boolean;
    type: typeof SET_IS_SETTINGS_REFRESH_REQUIRED;
}

export const SET_IS_SETTINGS_SAVING = 'user.settings.SET_IS_SETTINGS_SAVING';

interface SetIsSettingsSavingAction {
    payload: boolean;
    type: typeof SET_IS_SETTINGS_SAVING;
}

export const SET_IS_VERIFYING_RECAPTCHA_TOKEN = 'user.settings.SET_IS_VERIFYING_RECAPTCHA_TOKEN';

interface SetIsVerifyingReCaptchaTokenAction {
    payload: boolean;
    type: typeof SET_IS_VERIFYING_RECAPTCHA_TOKEN;
}

export const SET_LOGIN_ERROR = 'user.SET_LOGIN_ERROR';

interface SetLoginErrorAction {
    payload: ErrorObject;
    type: typeof SET_LOGIN_ERROR;
}

export const SET_USER = 'user.settings.SET_USER';

interface SetUserAction {
    payload: User;
    type: typeof SET_USER;
}

export const SET_USER_SETTINGS = 'user.settings.SET_USER_SETTINGS';

interface SetUserSettingsAction {
    payload: UserSettings;
    type: typeof SET_USER_SETTINGS;
}

export type UserActionTypes =
    | LogoutAction
    | ResetLoginErrorsAction
    | SetHasLoginErrorAction
    | SetIsAuthenticatedAction
    | SetIsAuthenticatingAction
    | SetIsLoadingAction
    | SetIsLoggedInAction
    | SetIsPasswordRequestedAction
    | SetIsPasswordResetAction
    | SetIsPersistLoading
    | SetIsReCaptchaTokenValidAction
    | SetIsReCaptchaTokenVerifiedAction
    | SetIsSettingsLoadingAction
    | SetIsSettingsRefreshRequiredAction
    | SetIsSettingsSavingAction
    | SetIsVerifyingReCaptchaTokenAction
    | SetLoginErrorAction
    | SetUserAction
    | SetUserSettingsAction;

/* eslint-disable @typescript-eslint/no-use-before-define */
import { backendRequest, refreshToken } from '../entity/actions';
import { decryptData, encryptData } from '../../utils/crypting';
import { deleteLocalTokenStorage, isTokenValid, setLocalTokenStorage } from '../../utils/token';
import { isEmpty, Locale, toNumber } from 'faralley-ui-kit';
import { LOCAL_STORAGE, SESSION_STORAGE } from '../../globals/storage';
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
    SET_LOGIN_ERROR,
    SET_USER,
    SET_USER_SETTINGS,
    UserActionTypes,
    UserState,
} from './types';
import { APIResult } from '../../../@types/APIResult';
import { ErrorObject } from '../../../@types/error/ErrorObject';
import { SYSTEM_KEY } from '../../globals/constants';
import { THEMES } from '../../globals/themes';
import { ThunkResult } from '../store';
import { TokenInformation } from '../../../@types/user/TokenInformation';
import { User } from '../../../@types/user/User';
import { UserSettings } from '../../../@types/user/UserSettings';

const VALID_SCORE_THRESHOLD = 0.5;

interface APIResultAuthenticate {
    TokenInformation: TokenInformation;
    User: User;
}

interface APIResultUserSettings {
    objectname: string;
    objecttype: string;
    propertyname: string;
    propertyvalue: string;
}

interface ReCaptchaResponse {
    // eslint-disable-next-line camelcase
    challenge_ts: Date;
    'error-codes': [
        {
            error: string;
        }
    ];
    hostname: string;
    score: number;
    success: boolean;
}

export const verifyReCaptchaToken =
    (token: string): ThunkResult =>
    (dispatch): void => {
        dispatch(setIsReCaptchaTokenVerified(false));
        dispatch(setIsReCaptchaTokenValid(false));
        dispatch(setIsVerifyingReCaptchaToken(true));

        dispatch(
            backendRequest({
                callbackError: (): void => {
                    dispatch(setHasLoginError(true));
                    dispatch(setIsVerifyingReCaptchaToken(false));
                    dispatch(setIsLoading(false));
                },
                callbackSuccess: (response: ReCaptchaResponse): void => {
                    const isValidResult: boolean =
                        response.success && response.score !== undefined && response.score >= VALID_SCORE_THRESHOLD;

                    dispatch(setIsReCaptchaTokenValid(isValidResult));
                    dispatch(setIsReCaptchaTokenVerified(true));
                    dispatch(setIsVerifyingReCaptchaToken(isValidResult)); // If result is valid, then leave this so it can be unset after authentication
                },
                entity: 'account/token/VerifyReCaptcha',
                isPublic: true,
                parameters: { token },
            })
        );
    };

export const authenticateUser =
    (username: string, password: string): ThunkResult =>
    (dispatch): void => {
        dispatch(setIsLoading(true));
        dispatch(setIsAuthenticated(false));
        dispatch(setIsLoggedIn(false));
        dispatch(setHasLoginError(false));

        dispatch(
            backendRequest({
                body: {
                    password,
                    username,
                },
                callbackError: (): void => {
                    dispatch(setHasLoginError(true));
                    dispatch(setIsVerifyingReCaptchaToken(false));
                    dispatch(setIsLoading(false));
                },
                callbackSuccess: ({ error, hasError, result }: APIResult): void => {
                    const apiResult: APIResultAuthenticate = result.data as APIResultAuthenticate;

                    dispatch(
                        setLoginErrorObject(
                            hasError && error
                                ? {
                                      description: error.description,
                                      descriptionKey: 'ErrorUnknown',
                                      id: toNumber(error.code),
                                  }
                                : ({} as ErrorObject)
                        )
                    );

                    dispatch(setHasLoginError(hasError));
                    dispatch(setIsAuthenticated(!hasError));
                    setLocalTokenStorage(apiResult.TokenInformation);

                    if (!hasError && apiResult.User && !apiResult.User.IsBlackListed && !apiResult.User.IsBlocked) {
                        dispatch(loginUser(apiResult.User));
                    }

                    dispatch(setIsVerifyingReCaptchaToken(false));
                    dispatch(setIsLoading(false));
                },
                entity: 'account/Authenticate',
                isPublic: true,
                method: 'POST',
            })
        );
    };

export const changePassword =
    (password: string, token: string): ThunkResult =>
    (dispatch): void => {
        // eslint-disable-next-line no-console
        console.log(password, token);
        dispatch(setIsLoading(true));

        // void dispatch(
        //     backendRequest({
        //         body: {
        //             password,
        //             token,
        //         },
        //         callbackError: (): void => {
        //             dispatch(setIsLoading(false));
        //         },
        //         callbackSuccess: (): void => {
        //             dispatch(setIsLoading(false));
        //             dispatch(setIsPasswordReset(true));
        //         },
        //         entity: 'user/UpdatePassword',
        //         isPublic: true,
        //         method: 'POST',
        //         tenant: getTenant(Unions.GENERIC),
        //     })
        // );
    };

export const getUserSettings =
    (): ThunkResult =>
    (dispatch, getState): void => {
        const userId = getState().user.user.UserId;
        dispatch(setIsSettingsLoading(true));
        dispatch(setIsSettingRefreshRequired(false));

        void dispatch(
            backendRequest({
                callbackError: (): void => {
                    dispatch(setIsSettingsLoading(false));
                },
                callbackSuccess: ({ result }: APIResult): void => {
                    const apiResult: APIResultUserSettings[] = result.data as APIResultUserSettings[];
                    const theme = localStorage.getItem(LOCAL_STORAGE.theme) || THEMES.cyrillic;
                    // Take the values form the list
                    let userSettings: UserSettings = {} as UserSettings;
                    let appTheme: string = theme;
                    let language: Locale = 'NL' as Locale;

                    apiResult.forEach((item) => {
                        if (
                            item.objectname === 'DEFAULTVALUE' &&
                            item.objecttype === 'APPLICATION' &&
                            item.propertyname === 'LANGUAGE'
                        ) {
                            language = item.propertyvalue as Locale;
                        }

                        if (
                            item.objectname === 'DEFAULTVALUE' &&
                            item.objecttype === 'APPLICATION' &&
                            item.propertyname === 'THEME'
                        ) {
                            appTheme = item.propertyvalue;
                        }
                    });

                    userSettings = {
                        AppTheme: appTheme,
                        IsSuccess: true,
                        Language: language,
                    };

                    dispatch(setUserSettings(userSettings));
                    dispatch(setIsSettingsLoading(false));
                },
                entity: 'account/UserSettings',
                parameters: { userId },
            })
        );
    };

export const loginUser =
    (user: User): ThunkResult =>
    (dispatch): void => {
        dispatch(setUser(user));
        dispatch(setIsLoggedIn(true));
        dispatch(setPersistUser());
    };

export const logoutUser =
    (): ThunkResult =>
    (dispatch, getState): void => {
        const { hasInactivityTimeout } = getState().error;
        dispatch(setIsLoading(true));
        const userId = getState().user.user.UserId;

        const callbackResult = (): void => {
            deletePersistUserSession();

            dispatch({
                type: LOG_OUT,
            });

            deleteLocalTokenStorage();
            dispatch(setIsLoading(false));
        };

        const logout = (): void => {
            void dispatch(
                backendRequest({
                    body: { userId },
                    callbackError: callbackResult,
                    callbackSuccess: callbackResult,
                    entity: 'account/Logout',
                    isPublic: true,
                    method: 'POST',
                })
            );
        };

        if (hasInactivityTimeout) {
            callbackResult();
        } else if (isTokenValid()) {
            logout();
        } else {
            // For now I don't see any difference in a succesfull or failed call for logout, so logout or empty stuff
            dispatch(refreshToken())
                .then(() => {
                    logout();
                })
                .catch(() => {
                    callbackResult();
                });
        }
    };

export const requestPassword =
    (username: string): ThunkResult =>
    (dispatch): void => {
        // eslint-disable-next-line no-console
        console.log(username);
        dispatch(setIsLoading(true));
        dispatch(setIsLoading(false));

        // void dispatch(
        //     backendRequest({
        //         callbackError: (error: Error): void => {
        //             // @TODO: add error handling
        //             // eslint-disable-next-line
        //             console.error(error);
        //         },
        //         callbackSuccess: (): void => {
        //             dispatch({
        //                 payload: true,
        //                 type: SET_IS_PASSWORD_REQUESTED,
        //             });
        //         },
        //         entity: 'user/RequestNewPassword',
        //         isPublic: true,
        //         parameters: { EmailAddress: username },
        //     })
        // );
    };

export const updateUserSettings =
    (userSettings: UserState['settings']): ThunkResult =>
    (dispatch, getState): void => {
        const userId = getState().user.user.UserId;
        dispatch(setIsSettingsSaving(true));

        void dispatch(
            backendRequest({
                body: {
                    ...userSettings,
                    userId,
                },
                callbackError: (): void => {
                    dispatch(setIsSettingsSaving(false));
                },
                callbackSuccess: ({ hasError }: APIResult): void => {
                    dispatch(setIsSettingRefreshRequired(!hasError));
                    dispatch(setIsSettingsSaving(false));
                },
                entity: 'account/UpdateUserSettings',
                method: 'PUT',
            })
        );
    };

export const deletePersistUserSession = (): void => {
    localStorage.removeItem(LOCAL_STORAGE.language);
    sessionStorage.removeItem(SESSION_STORAGE.user);
};

export const getPersistUser =
    (): ThunkResult =>
    (dispatch): void => {
        const persistedUserObj = sessionStorage.getItem(SESSION_STORAGE.user) || '';

        const persistedUser = !isEmpty(persistedUserObj)
            ? (decryptData(persistedUserObj, SYSTEM_KEY) as unknown as UserState)
            : ({} as UserState);

        dispatch(setIsPersistLoading(true));

        if (!isEmpty(persistedUser)) {
            dispatch(setUser(persistedUser.user));
            dispatch(setIsAuthenticated(persistedUser.isAuthenticated));
            dispatch(setIsLoggedIn(persistedUser.isLoggedIn));
        }

        dispatch(setIsPersistLoading(false));
    };

export const setPersistUser =
    (): ThunkResult =>
    (_, getState): void => {
        let persistUser = getState().user;

        persistUser = {
            ...persistUser,
            user: {
                ...persistUser.user,
            },
        };

        sessionStorage.setItem(SESSION_STORAGE.user, encryptData(JSON.stringify({ ...persistUser }), SYSTEM_KEY));
    };

export const setHasLoginError = (hasLoginError: boolean): UserActionTypes => ({
    payload: hasLoginError,
    type: SET_HAS_LOGIN_ERROR,
});

export const setIsAuthenticated = (isAuthenticated: boolean): UserActionTypes => ({
    payload: isAuthenticated,
    type: SET_IS_AUTHENTICATED,
});

export const setIsAuthenticating = (isAuthenticating: boolean): UserActionTypes => ({
    payload: isAuthenticating,
    type: SET_IS_AUTHENTICATING,
});

export const setIsLoading = (isLoading: boolean): UserActionTypes => ({
    payload: isLoading,
    type: SET_IS_LOADING,
});

export const setIsLoggedIn = (isLoggedIn: boolean): UserActionTypes => ({
    payload: isLoggedIn,
    type: SET_IS_LOGGEDIN,
});

export const setIsPasswordRequested = (isPasswordRequested: boolean): UserActionTypes => ({
    payload: isPasswordRequested,
    type: SET_IS_PASSWORD_REQUESTED,
});

export const setIsPasswordReset = (isPasswordReset: boolean): UserActionTypes => ({
    payload: isPasswordReset,
    type: SET_IS_PASSWORD_RESET,
});

export const setIsPersistLoading = (isPersistLoading: boolean): UserActionTypes => ({
    payload: isPersistLoading,
    type: SET_IS_PERSIST_LOADING,
});

export const setIsReCaptchaTokenValid = (isValid: boolean): UserActionTypes => ({
    payload: isValid,
    type: SET_IS_RECAPTCHA_TOKEN_VALID,
});

export const setIsReCaptchaTokenVerified = (isReCaptchaTokenVerified: boolean): UserActionTypes => ({
    payload: isReCaptchaTokenVerified,
    type: SET_IS_RECAPTCHA_TOKEN_VERIFIED,
});

export const setIsSettingsLoading = (isLoading: boolean): UserActionTypes => ({
    payload: isLoading,
    type: SET_IS_SETTINGS_LOADING,
});

export const setIsSettingRefreshRequired = (isRefreshRequired: boolean): UserActionTypes => ({
    payload: isRefreshRequired,
    type: SET_IS_SETTINGS_REFRESH_REQUIRED,
});

export const setIsSettingsSaving = (isSaving: boolean): UserActionTypes => ({
    payload: isSaving,
    type: SET_IS_SETTINGS_SAVING,
});

export const setIsVerifyingReCaptchaToken = (isVerifying: boolean): UserActionTypes => ({
    payload: isVerifying,
    type: SET_IS_VERIFYING_RECAPTCHA_TOKEN,
});

export const setLoginErrorObject = (errorObject: ErrorObject): UserActionTypes => ({
    payload: errorObject,
    type: SET_LOGIN_ERROR,
});

export const setUser = (user: UserState['user']): UserActionTypes => ({
    payload: user,
    type: SET_USER,
});

export const setUserSettings = (userSettings: UserState['settings']): UserActionTypes => ({
    payload: userSettings,
    type: SET_USER_SETTINGS,
});

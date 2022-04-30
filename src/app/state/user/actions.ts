/* eslint-disable @typescript-eslint/no-use-before-define */
import { decryptData, encryptData } from '../../utils/crypting';
import { deleteLocalTokenStorage, isTokenValid, setLocalTokenStorage } from '../../utils/token';
import { entityRequest, refreshToken } from '../entity/actions';
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
    SET_IS_SETTINGS_LOADING,
    SET_IS_SETTINGS_REFRESH_REQUIRED,
    SET_IS_SETTINGS_SAVING,
    SET_LOGIN_ERROR,
    SET_USER,
    SET_USER_SETTINGS,
    UserActionTypes,
    UserState,
} from './types';
import { APIResult } from '../../../@types/APIResult';
import { ErrorObject } from '../../../@types/error/ErrorObject';
import { isEmpty } from 'faralley-ui-kit';
import { SYSTEM_KEY } from '../../globals/constants';
import { ThunkResult } from '../store';
import { TokenInformation } from '../../../@types/user/TokenInformation';
import { User } from '../../../@types/user/User';

interface APIResultAuthenticate {
    TokenInformation: TokenInformation;
    User: User;
}

export const authenticateUser =
    (username: string, password: string): ThunkResult =>
    (dispatch): void => {
        dispatch(setIsLoading(true));
        dispatch(setIsAuthenticated(false));
        dispatch(setIsLoggedIn(false));
        dispatch(setHasLoginError(false));

        dispatch(
            entityRequest({
                body: {
                    password,
                    username,
                },
                callbackError: (): void => {
                    dispatch(setHasLoginError(true));
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
                                      id: error.code,
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
        //     entityRequest({
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
    (dispatch): void => {
        dispatch(setIsSettingsLoading(true));
        dispatch(setIsSettingRefreshRequired(false));

        // void dispatch(
        //     entityRequest({
        //         callbackError: (): void => {
        //             dispatch(setIsSettingsLoading(false));
        //         },
        //         callbackSuccess: (response: UserState['settings']): void => {
        //             dispatch(setUserSettings(response));
        //             dispatch(setIsSettingsLoading(false));
        //         },
        //         entity: 'user/settings/UserSettings',
        //     })
        // );
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
                entityRequest({
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
        //     entityRequest({
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
    (dispatch): void => {
        dispatch(setIsSettingsSaving(true));

        // eslint-disable-next-line no-console
        console.log(userSettings);

        // void dispatch(
        //     entityRequest({
        //         body: {
        //             ...userSettings,
        //         },
        //         callbackError: (): void => {
        //             dispatch(setIsSettingsSaving(false));
        //         },
        //         callbackSuccess: (response: UserSettingsState['settings']): void => {
        //             dispatch(setIsSettingRefreshRequired(response.IsSuccess));
        //             dispatch(setIsSettingsSaving(false));
        //         },
        //         entity: 'user/settings/UserSettings',
        //         method: 'PUT',
        //     })
        // );
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

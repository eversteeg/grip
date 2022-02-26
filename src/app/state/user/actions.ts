/* eslint-disable @typescript-eslint/no-use-before-define */
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
import { ThunkResult } from '../store';

export const authenticateUser =
    (Username: string, Password: string): ThunkResult =>
    (dispatch): void => {
        dispatch(setIsSettingsLoading(true));
        dispatch(setIsSettingRefreshRequired(false));
        // eslint-disable-next-line no-console
        console.log(Username, Password);
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
        //         callbackSuccess: (response: UserSettingsState['settings']): void => {
        //             dispatch(setUserSettings(response));
        //             dispatch(setIsSettingsLoading(false));
        //         },
        //         entity: 'user/settings/UserSettings',
        //     })
        // );
    };

export const logoutUser =
    (): ThunkResult =>
    (dispatch): void => {
        dispatch(setIsAuthenticated(false));
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
    (userSettings: UserSettingsState['settings']): ThunkResult =>
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

export const setHasLoginError = (hasLoginError: boolean): UserSettingsActionTypes => ({
    payload: hasLoginError,
    type: SET_HAS_LOGIN_ERROR,
});

export const setIsAuthenticated = (isAuthenticated: boolean): UserSettingsActionTypes => ({
    payload: isAuthenticated,
    type: SET_IS_AUTHENTICATED,
});

export const setIsAuthenticating = (isAuthenticating: boolean): UserSettingsActionTypes => ({
    payload: isAuthenticating,
    type: SET_IS_AUTHENTICATING,
});

export const setIsLoading = (isLoading: boolean): UserSettingsActionTypes => ({
    payload: isLoading,
    type: SET_IS_LOADING,
});

export const setIsPasswordRequested = (isPasswordRequested: boolean): UserSettingsActionTypes => ({
    payload: isPasswordRequested,
    type: SET_IS_PASSWORD_REQUESTED,
});

export const setIsPasswordReset = (isPasswordReset: boolean): UserSettingsActionTypes => ({
    payload: isPasswordReset,
    type: SET_IS_PASSWORD_RESET,
});

export const setIsSettingsLoading = (isLoading: boolean): UserSettingsActionTypes => ({
    payload: isLoading,
    type: SET_IS_SETTINGS_LOADING,
});

export const setIsSettingRefreshRequired = (isRefreshRequired: boolean): UserSettingsActionTypes => ({
    payload: isRefreshRequired,
    type: SET_IS_SETTINGS_REFRESH_REQUIRED,
});

export const setIsSettingsSaving = (isSaving: boolean): UserSettingsActionTypes => ({
    payload: isSaving,
    type: SET_IS_SETTINGS_SAVING,
});

export const setUserSettings = (userSettings: UserSettingsState['settings']): UserSettingsActionTypes => ({
    payload: userSettings,
    type: SET_USER_SETTINGS,
});

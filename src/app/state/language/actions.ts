/* eslint-disable @typescript-eslint/no-use-before-define */
import {
    Dialect,
    GenericErrorMessages,
    LanguageActionTypes,
    Locales,
    SET_DIALECT,
    SET_GENERIC_ERROR_MESSAGES,
    SET_IS_LOADING,
    SET_IS_LOCALE_CHANGED,
    SET_LOCALE,
    SET_TRANSLATIONS,
    Translations,
} from './types';
import { getGenericErrorMessages } from '../../utils/translationFunctions';
import { LOCAL_STORAGE } from '../../globals/storage';
import { ThunkResult } from '../store';

export const getDialect =
    (unionId: string): ThunkResult =>
    (dispatch, getState): Promise<void> => {
        const { locale } = getState().language;
        const dialectUrl = `/translations/${locale.toLowerCase()}-${unionId.toUpperCase()}.json`;

        return fetch(dialectUrl)
            .then((response) => response.json())
            .then((json) => {
                dispatch(setDialect(json));
                dispatch(setPersistLanguage());
            })
            .catch(() => {
                // No dialect file, set empty default for case that there was a dialect of another union before
                // eslint-disable-next-line no-console
                console.log('Missing dialect file for:', dialectUrl);
                dispatch(setDialect({}));
                dispatch(setPersistLanguage());
            });
    };

export const getTranslations =
    (): ThunkResult =>
    (dispatch, getState): void => {
        const { locale } = getState().language;
        dispatch(setIsLoading(true));

        fetch(`/translations/${locale.toLowerCase()}.json`)
            .then((response) => {
                if (response.status >= 400 && response.status < 600) {
                    throw Error('Error fetching translations');
                }

                return response.json();
            })
            .then((json) => {
                dispatch(setTranslations(json));
                dispatch(setGenericErrorMessages(getGenericErrorMessages(json as Translations)));
                dispatch(setPersistLanguage());
                dispatch(setIsLoading(false));
            })
            .catch((error) => {
                // @TODO: add error handling
                // eslint-disable-next-line
                console.error(error);
            });
    };

export const setDialect = (dialect: Dialect): LanguageActionTypes => ({
    payload: dialect,
    type: SET_DIALECT,
});

export const setGenericErrorMessages = (genericErrorMessages: GenericErrorMessages): LanguageActionTypes => ({
    payload: genericErrorMessages,
    type: SET_GENERIC_ERROR_MESSAGES,
});

export const setIsLoading = (isLoading: boolean): LanguageActionTypes => ({
    payload: isLoading,
    type: SET_IS_LOADING,
});

export const setIsLocaleChanged = (isLocaleChanged: boolean): LanguageActionTypes => ({
    payload: isLocaleChanged,
    type: SET_IS_LOCALE_CHANGED,
});

export const setLocale =
    (locale: Locales): ThunkResult =>
    (dispatch): void => {
        dispatch({
            payload: locale,
            type: SET_LOCALE,
        });

        dispatch(getTranslations());
    };

export const setPersistLanguage =
    (): ThunkResult =>
    (_, getState): void => {
        const { language } = getState();
        const persistLanguage = { ...language };

        localStorage.setItem(LOCAL_STORAGE.language, JSON.stringify(persistLanguage));
    };

export const setTranslations = (translations: Translations): LanguageActionTypes => ({
    payload: translations,
    type: SET_TRANSLATIONS,
});

import {
    LanguageActionTypes,
    LanguageState,
    SET_DIALECT,
    SET_GENERIC_ERROR_MESSAGES,
    SET_IS_LOADING,
    SET_IS_LOCALE_CHANGED,
    SET_LOCALE,
    SET_TRANSLATIONS,
} from './types';
import { Locale } from 'faralley-ui-kit';

const initialState: LanguageState = {
    dialect: {},
    genericErrorMessages: {} as LanguageState['genericErrorMessages'],
    isLoading: true,
    isLocaleChanged: false,
    locale: Locale.NL,
    translations: {} as LanguageState['translations'],
};

export default (state = initialState, action: LanguageActionTypes): LanguageState => {
    switch (action.type) {
        case SET_DIALECT:
            return {
                ...state,
                dialect: action.payload,
            };

        case SET_GENERIC_ERROR_MESSAGES:
            return {
                ...state,
                genericErrorMessages: action.payload,
            };

        case SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload,
            };

        case SET_IS_LOCALE_CHANGED:
            return {
                ...state,
                isLocaleChanged: action.payload,
            };

        case SET_LOCALE:
            return {
                ...state,
                locale: action.payload,
            };

        case SET_TRANSLATIONS:
            return {
                ...state,
                translations: action.payload,
            };

        default:
            return state;
    }
};

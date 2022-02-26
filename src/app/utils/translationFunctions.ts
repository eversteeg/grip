import { Dialect, GenericErrorMessages, Translations } from '../state/language/types';
import useSelector from '../state/useSelector';

export const hasHtmlTags = (value: string): boolean => {
    const htmlRegex = new RegExp('<([A-Za-z][A-Za-z0-9]*)\\b[^>]*>(.*?)</\\1>');

    return htmlRegex.test(value);
};

export const getTranslationObject = (value: keyof Translations): string => {
    const dialect = useSelector(({ language }) => language.dialect);
    const translations = useSelector(({ language }) => language.translations);

    return value in dialect ? dialect[value] : translations[value];
};

export const getTranslation = (value: keyof Translations, toLowerCase = false): string => {
    let translation = getTranslationObject(value);

    if (toLowerCase && typeof translation === 'string') {
        translation = translation.toLowerCase();
    }

    if (hasHtmlTags(translation)) {
        return value;
    }

    return translation;
};

// In some cases we need to avoid the hooks error, hence this function
export const getTranslationFromStorage = (
    dialect: Dialect,
    translations: Translations,
    value: keyof Translations
): string => {
    if (dialect && translations) {
        return value in dialect ? dialect[value] : translations[value];
    }

    return value;
};

export const getGenericErrorMessages = (translations: Translations): GenericErrorMessages => ({
    email: translations.GenericErrorMessageEmail,
    required: translations.GenericErrorMessageRequired,
    telephone: translations.GenericErrorMessageTelephone,
    uri: translations.GenericErrorMessageURI,
});

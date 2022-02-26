import 'moment/locale/fr';
import 'moment/locale/nl';
import { Dialect, Locales, Translations } from './state/language/types';
import { isEmpty, themeBasic, themeDark, Tooltip } from 'faralley-ui-kit';
import { isTheme, THEMES } from './globals/themes';
import React, { FunctionComponent, useEffect } from 'react';
import { setDialect, setIsLocaleChanged, setLocale } from './state/language/actions';
import { shallowEqual, useDispatch } from 'react-redux';
import { APP_TITLE } from './globals/constants';
import { BrowserRouter } from 'react-router-dom';
import { getConfig } from './state/config/actions';
import { getTranslationFromStorage } from './utils/translationFunctions';
import GlobalStyle from './styles/GlobalStyle';
import { Helmet } from 'react-helmet';
import { hot } from 'react-hot-loader/root';
import { LOCAL_STORAGE } from './globals/storage';
import moment from 'moment';
import Routes from './routing/Routes';
import ScrollToTop from './components/atoms/scrollToTop/ScrollToTop';
import { setUserSettings } from './state/user/actions';
import { ThemeProvider } from 'styled-components';
import useSelector from './state/useSelector';

interface LanguageObject {
    dialect: Dialect;
    locale: Locales;
    translations: Translations;
}

// Return empty object if nothing prsent, so we do not have to check everything later
const getLanguageObject = (value: string): LanguageObject =>
    value ? (JSON.parse(value) as LanguageObject) : ({} as LanguageObject);

const App: FunctionComponent = () => {
    const dispatch = useDispatch();
    const activeRoute = useSelector(({ global }) => global.activeRoute);
    const isConfigLoading = useSelector(({ config }) => config.isLoading);
    const isLanguageLoading = useSelector(({ language }) => language.isLoading);
    const isLocaleChanged = useSelector(({ language }) => language.isLocaleChanged);
    const isPersistCodeTableLoading = useSelector(({ global }) => global.isLoading);
    const locale = useSelector(({ language }) => language.locale);
    const { dialect, translations } = useSelector(({ language }) => language, shallowEqual);
    const settings = useSelector(({ user }) => user.settings);

    useEffect(() => {
        dispatch(getConfig());
        const language = localStorage.getItem(LOCAL_STORAGE.language) || '';

        if (isEmpty(language) && locale) {
            dispatch(setLocale(locale));
            dispatch(setIsLocaleChanged(true));
        }

        if (!isEmpty(language)) {
            const languageObject = getLanguageObject(language);

            if (locale !== languageObject.locale || isEmpty(translations)) {
                dispatch(setDialect(languageObject.dialect));
                dispatch(setLocale(languageObject.locale));
                dispatch(setIsLocaleChanged(true));
            }
        }

        const theme = localStorage.getItem(LOCAL_STORAGE.theme) || '';

        // @TODO: figure out how to refresh this correctly
        // Set new locale for moment
        moment.locale(locale);

        if (isTheme(theme) && theme !== settings.AppTheme) {
            dispatch(setUserSettings({ ...settings, AppTheme: theme }));
        }
    }, []);

    // If the language/locale changes, then we also need to ..... do what exactly?
    useEffect(() => {
        if (isLocaleChanged) {
            dispatch(setIsLocaleChanged(false));
        }
    }, [isLocaleChanged]);

    const getMetaDescription = (): string => {
        if (activeRoute && activeRoute.metaDescription) {
            return getTranslationFromStorage(dialect, translations, activeRoute.metaDescription);
        }

        if (activeRoute && activeRoute.title && activeRoute.title in translations) {
            return getTranslationFromStorage(dialect, translations, activeRoute.title as keyof Translations);
        }

        return activeRoute.title || '';
    };

    return (
        <ThemeProvider theme={settings.AppTheme === THEMES.dark ? themeDark : themeBasic}>
            <Helmet
                htmlAttributes={{ lang: locale.toLowerCase() }}
                meta={[
                    {
                        content: getMetaDescription(),
                        name: `description`,
                    },
                ]}
                title={`${APP_TITLE}${
                    activeRoute && activeRoute.title
                        ? ' | '.concat(
                              activeRoute.title in translations
                                  ? getTranslationFromStorage(
                                        dialect,
                                        translations,
                                        activeRoute.title as keyof Translations
                                    )
                                  : activeRoute.title
                          )
                        : ''
                }`}
            />
            <BrowserRouter>
                <GlobalStyle />
                <ScrollToTop />
                {!isConfigLoading && !isLanguageLoading && !isPersistCodeTableLoading && (
                    <>
                        {/* @TODO: think of something to make this easily adjustable where necessary.
                        Default should still be the ui-kit value */}
                        <Tooltip delay={2000} />
                        <Routes />
                    </>
                )}
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default hot(App);

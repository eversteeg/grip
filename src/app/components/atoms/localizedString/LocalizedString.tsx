/* eslint-disable react/no-danger */
import React, { cloneElement, FunctionComponent, isValidElement, ReactElement, useContext } from 'react';
import { getTranslationObject } from '../../../utils/translationFunctions';
import ReactDOMServer from 'react-dom/server';
import { ThemeContext } from 'styled-components';
import { Translations } from '../../../state/language/types';
import useSelector from '../../../state/useSelector';

export interface LocalizedStringProps {
    toLowerCase?: boolean;
    value: keyof Translations;
    variables?: { [key: string]: number | ReactElement | string };
}

const LocalizedString: FunctionComponent<LocalizedStringProps> = ({ toLowerCase = false, value, variables = {} }) => {
    const locale = useSelector(({ language }) => language.locale);
    const theme = useContext(ThemeContext);
    let translation = getTranslationObject(value);

    if (translation !== undefined && translation !== null) {
        Object.keys(variables).forEach((variableKey) => {
            let variableValue = variables[variableKey];

            if (isValidElement(variableValue)) {
                variableValue = ReactDOMServer.renderToStaticMarkup(
                    cloneElement(variableValue, {
                        theme,
                    })
                );
            } else if (typeof variableValue === 'number') {
                variableValue = variableValue.toString();
            }

            translation = translation.replace(`{{${variableKey}}}`, variableValue);
        });

        if (toLowerCase && typeof translation === 'string') {
            translation = translation.toLowerCase();
        }

        return <span dangerouslySetInnerHTML={{ __html: translation }} />;
    }

    // eslint-disable-next-line
    console.error(
        `The translation for '${value}' isn't found in ${locale.toLowerCase()}.json and might also be missing from other translation files.`
    );

    return null;
};

export default LocalizedString;

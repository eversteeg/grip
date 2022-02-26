import { Dropdown, IconCustomizable, IconCustomizableSize, IconType } from 'faralley-ui-kit';
import { IconWrapper, StyledDropdownLanguage } from './DropdownLanguage.sc';
import React, { ChangeEvent, FunctionComponent, useCallback, useContext, useMemo } from 'react';
import { setIsLocaleChanged, setLocale } from '../../../state/language/actions';
import { Locales } from '../../../state/language/types';
import { ThemeContext } from 'styled-components';
import { useDispatch } from 'react-redux';
import useSelector from '../../../state/useSelector';

const locales: {
    [key in Locales]: string;
} = {
    EN: 'English',
    NL: 'Nederlands',
};

export interface DropdownLanguageProps {
    hasIcon?: boolean;
}

const DropdownLanguage: FunctionComponent<DropdownLanguageProps> = ({ hasIcon = true }) => {
    const theme = useContext(ThemeContext);
    const dispatch = useDispatch();
    const { locale: currentLocale } = useSelector(({ language }) => language);

    const setLocaleCallback = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
        dispatch(setLocale(event.currentTarget.value as Locales));
        dispatch(setIsLocaleChanged(true));
    }, []);

    const localeOptions = useMemo(
        () =>
            Object.entries(locales).map(([key, value]) => ({
                label: value,
                value: key,
            })),
        []
    );

    return (
        <StyledDropdownLanguage>
            {hasIcon && (
                <IconWrapper>
                    <IconCustomizable
                        iconColor={theme.colorText.primary}
                        iconSize={IconCustomizableSize.SIZE20}
                        iconType={IconType.WORLD}
                    />
                </IconWrapper>
            )}
            <Dropdown
                name="DROPDOWN_LANGUAGE"
                onChange={setLocaleCallback}
                options={localeOptions}
                value={currentLocale}
            />
        </StyledDropdownLanguage>
    );
};

export default DropdownLanguage;

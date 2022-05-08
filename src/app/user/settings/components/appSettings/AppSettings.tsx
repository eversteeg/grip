import {
    DropdownMultiSelectOption,
    DropdownSelectOption,
    EditableDataComponent,
    EditableInformationDataType,
    EditableInformationProps,
    IconType,
    ImmutableDataProps,
    Locale,
    SelectionControl,
    SelectionControlType,
} from 'faralley-ui-kit';
import { getUserSettings, updateUserSettings } from '../../../../state/user/actions';
import React, { ChangeEvent, FunctionComponent, MouseEvent, useCallback, useEffect, useMemo } from 'react';
import { shallowEqual, useDispatch } from 'react-redux';
import DropdownLanguage from '../../../../components/organisms/dropdownLanguage/DropdownLanguage';
import GenericEditableInformation from '../../../../components/molecules/genericEditableInformation/GenericEditableInformation';
import { LOCAL_STORAGE } from '../../../../globals/storage';
import LocalizedString from '../../../../components/atoms/localizedString/LocalizedString';
import { THEMES } from '../../../../globals/themes';
import useSelector from '../../../../state/useSelector';

const AppSettings: FunctionComponent = () => {
    const dispatch = useDispatch();

    const { isSettingsLoading, isSettingsRefreshRequired, isSettingsSaving, settings } = useSelector(
        ({ user }) => user,
        shallowEqual
    );

    const setThemeCallback = useCallback(
        (event: ChangeEvent<HTMLInputElement> | MouseEvent<HTMLButtonElement>) => {
            const newTheme = (event.currentTarget as HTMLInputElement).checked ? THEMES.cyrillicdark : THEMES.cyrillic;
            localStorage.setItem(LOCAL_STORAGE.theme, newTheme);
            dispatch(updateUserSettings({ ...settings, AppTheme: newTheme }));
        },
        [settings]
    );

    const setLanguageCallback = useCallback(
        (language: Locale): void => {
            dispatch(updateUserSettings({ ...settings, Language: language }));
        },
        [settings]
    );

    // fetch initial data
    useEffect(() => {
        dispatch(getUserSettings());
    }, []);

    useEffect(() => {
        if (isSettingsRefreshRequired) {
            dispatch(getUserSettings());
        }
    }, [isSettingsRefreshRequired]);

    const editableInformationData = useMemo((): EditableInformationProps<
        DropdownSelectOption,
        DropdownMultiSelectOption
    >['data'] => {
        const data = [] as Array<EditableInformationDataType<DropdownSelectOption, DropdownMultiSelectOption>>;

        data.push(
            {
                component: EditableDataComponent.IMMUTABLE,
                label: <LocalizedString value="Language" />,
                name: 'Language',
                value: (
                    <DropdownLanguage hasIcon={false} onChange={(language: Locale) => setLanguageCallback(language)} />
                ),
            } as ImmutableDataProps,
            {
                component: EditableDataComponent.IMMUTABLE,
                label: <LocalizedString value="UseDarkTheme" />,
                name: 'UseDarkTheme',
                value: (
                    <SelectionControl
                        isChecked={settings.AppTheme === THEMES.cyrillicdark}
                        label={''}
                        name="use-dark-theme"
                        onChange={setThemeCallback}
                        type={SelectionControlType.CHECKBOX}
                        value="use-dark-theme"
                    />
                ),
            } as ImmutableDataProps
        );

        return data;
    }, [settings]);

    return (
        <GenericEditableInformation
            data={editableInformationData}
            iconType={IconType.FLAG}
            isEditing
            isLoading={isSettingsLoading}
            isSaving={isSettingsSaving}
            title={<LocalizedString value="AppSettings" />}
        />
    );
};

export default AppSettings;

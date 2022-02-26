import {
    AmountOfColumns,
    DropdownMultiSelectOption,
    DropdownSelectOption,
    EditableInformation,
    EditableInformationProps,
    IconType,
    Status,
} from 'faralley-ui-kit';
import { Column, Row } from '../../atoms/grid/Grid';
import React, { FunctionComponent, ReactNode, useCallback, useEffect, useState } from 'react';
import { getTranslation } from '../../../utils/translationFunctions';
import { getViolationTexts } from '../../../utils/violationFunctions';
import { resetErrors } from '../../../state/error/actions';
import { setHasUnsavedChanges } from '../../../state/shared/navigationInfo/actions';
import { unsupportedWidth } from '../../../styles/constants';
import { useDispatch } from 'react-redux';
import useSelector from '../../../state/useSelector';

/* If you don't have onChange, then use the isDataChanged in the onSave otherwise if you do have onChange, then save the value of isDataChanged in a local state for later */

interface GenericEditableInformationProps {
    amountOfColumns?: AmountOfColumns;
    amountOfRows?: number;
    data: EditableInformationProps<DropdownSelectOption, DropdownMultiSelectOption>['data'];
    dateFormat?: string;
    errors?: string[];
    handleSavingAsLoading?: boolean;
    hasAutoFocus?: boolean;
    hasHorizontalCorrection?: boolean;
    hasMarginBottom?: boolean;
    iconCancel?: IconType;
    iconEdit?: IconType;
    iconSave?: IconType;
    iconType: IconType;
    ignoreModalVisible?: boolean;
    isButtonDisabled?: boolean;
    isDisabled?: boolean;
    isEditing?: boolean;
    isLoading: boolean;
    isSaving?: boolean;
    keepEditMode?: boolean;
    onCancel?: () => void;
    onChange?: (data: unknown, isDataChanged: boolean) => void;
    onEdit?: () => void;
    onSave?: (data: unknown, isDataChanged: boolean) => void;
    onValidation?: (isValidData: boolean) => void;
    options?: ReactNode;
    status?: Status;
    textCancel?: string;
    textEdit?: string;
    textSave?: string;
    title: ReactNode;
    warnings?: string[];
}

const GenericEditableInformation: FunctionComponent<GenericEditableInformationProps> = ({
    amountOfColumns = 2,
    amountOfRows = 4,
    data,
    dateFormat = getTranslation('DateFormat'),
    errors,
    handleSavingAsLoading = true,
    hasAutoFocus = true,
    hasHorizontalCorrection = true,
    hasMarginBottom = true,
    iconCancel = IconType.CROSS,
    iconEdit = IconType.PENCIL,
    iconSave = IconType.CHECK,
    iconType,
    isButtonDisabled,
    isDisabled = false,
    isEditing = false,
    isLoading,
    isSaving,
    keepEditMode,
    onCancel,
    onChange,
    onEdit,
    onSave,
    onValidation,
    options,
    ignoreModalVisible = false,
    status,
    textCancel = getTranslation('Cancel'),
    textEdit = getTranslation('Change'),
    textSave = getTranslation('Save'),
    title,
    warnings,
}) => {
    const dispatch = useDispatch();
    // const hasError = useSelector(({ error }) => error.hasError);
    // const violations = useSelector(({ error }) => error.entityViolation.Violations || {}, shallowEqual);
    const hasError = false;
    const violations: { [key: string]: string } = {};
    // const isModalVisible = useSelector(({ modal }) => modal.modalProps.isVisible);
    // const isDialogVisible = useSelector(({ dialog }) => dialog.dialogProps.isVisible);
    const isModalVisible = false;
    const isDialogVisible = false;
    const locale = useSelector(({ language }) => language.locale);
    const [isResetStatesRequested, setIsResetStatesRequested] = useState(false);
    const [localKeepEditMode, setLocalKeepEditMode] = useState(keepEditMode);

    const [localAmountOfColumns, setLocalAmountOfColumns] = useState(
        window.innerWidth < unsupportedWidth ? 1 : amountOfColumns
    );

    const resetStates = useCallback(
        (resetAll = true) => {
            if (hasError) {
                dispatch(resetErrors());
            }

            if (resetAll) {
                setLocalKeepEditMode(false);
                setIsResetStatesRequested(false);
            }
        },
        [hasError]
    );

    const onEditCallback = useCallback(() => {
        if (onEdit) {
            onEdit();
        }
    }, [onEdit]);

    const onCancelCallback = useCallback(() => {
        // When canceling, always reset violations
        if (hasError) {
            resetStates();
        }

        dispatch(setHasUnsavedChanges(false));
        setIsResetStatesRequested(false);

        if (onCancel) {
            onCancel();
        }
    }, [hasError, onCancel]);

    const onChangeCallback = useCallback(
        (newData: unknown, isDataChanged: boolean) => {
            // When changing data, always reset violations
            if (hasError) {
                setIsResetStatesRequested(false);
                resetStates(false);
            }

            dispatch(setHasUnsavedChanges(isDataChanged));

            if (onChange) {
                onChange(newData, isDataChanged);
            }
        },
        [onChange, hasError]
    );

    const onSaveCallback = useCallback(
        (newData: unknown, isDataChanged: boolean) => {
            setIsResetStatesRequested(true);

            if (!isDataChanged) {
                dispatch(setHasUnsavedChanges(false));
            }

            if (onSave) {
                onSave(newData, isDataChanged);
            }
        },
        [onSave]
    );

    useEffect(() => {
        if (keepEditMode) {
            setLocalKeepEditMode(true);
        } else if (!isSaving && isResetStatesRequested) {
            if (hasError) {
                setLocalKeepEditMode(true);
            } else {
                resetStates();
            }
        }
    }, [hasError, isResetStatesRequested, isSaving, keepEditMode]);

    useEffect(() => {
        function handleResize() {
            setLocalAmountOfColumns(window.innerWidth < unsupportedWidth ? 1 : amountOfColumns);
        }

        window.addEventListener('resize', handleResize);

        return function cleanup() {
            window.removeEventListener('resize', handleResize);
        };
    });

    return (
        <Row hasHorizontalCorrection={hasHorizontalCorrection}>
            <Column hasMarginBottom={hasMarginBottom}>
                <EditableInformation
                    amountOfColumns={localAmountOfColumns}
                    amountOfRows={amountOfRows}
                    data={data}
                    dateFormat={dateFormat}
                    errors={
                        // eslint-disable-next-line no-nested-ternary
                        !isDisabled && errors
                            ? errors
                            : !isDisabled && hasError && (ignoreModalVisible || !isModalVisible) && !isDialogVisible
                            ? getViolationTexts(violations)
                            : undefined
                    }
                    hasAutoFocus={hasAutoFocus}
                    iconCancel={iconCancel}
                    iconEdit={iconEdit}
                    iconSave={iconSave}
                    iconType={iconType}
                    isButtonDisabled={isButtonDisabled}
                    isDisabled={isDisabled}
                    isEditing={localKeepEditMode || isEditing}
                    isLoading={isLoading || (handleSavingAsLoading && isSaving)}
                    isSaving={isSaving}
                    keepEditMode={localKeepEditMode}
                    locale={locale}
                    localeCurrency={locale} // For now, this will be the same as the locale, but is here so we know the option is availbale
                    onCancel={onCancelCallback}
                    onChange={onChangeCallback}
                    onEdit={onEditCallback}
                    onSave={onSave ? onSaveCallback : undefined} // Might be undefined, so the action buttons will be hidden
                    onValidation={onValidation}
                    options={options}
                    status={status}
                    textCancel={textCancel}
                    textEdit={textEdit}
                    textSave={textSave}
                    title={title}
                    warnings={warnings}
                />
            </Column>
        </Row>
    );
};

export default GenericEditableInformation;

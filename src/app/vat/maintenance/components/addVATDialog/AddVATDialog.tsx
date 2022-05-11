import { ButtonSize, ButtonVariant, IconType, Input, InputType, isEmpty } from 'faralley-ui-kit';
import React, { ChangeEvent, FunctionComponent, useCallback, useEffect, useState } from 'react';
import { addVAT } from '../../_state/actions';
import { DialogFormElementWrapper } from '../../../../components/atoms/dialogFormat/DialogFormat.sc';
import { getViolationTexts } from '../../../../utils/violationFunctions';
import LocalizedString from '../../../../components/atoms/localizedString/LocalizedString';
import { maxInputWidth } from '../../../../globals/constants';
import { resetAllErrors } from '../../../../state/error/actions';
import { toDecimalNumber } from '../../../../utils/formatFunctions';
import { updateDialogProperties } from '../../../../state/dialog/actions';
import { useDispatch } from 'react-redux';
import useSelector from '../../../../state/useSelector';
import { ViolationList } from '../../../../components/atoms/violationList/ViolationList.sc';

export interface AddVATDialogProps {
    onClose: () => void;
}

const AddVATDialog: FunctionComponent<AddVATDialogProps> = ({ onClose }) => {
    const dispatch = useDispatch();
    const [description, setDescription] = useState('');
    const [percentage, setPercentage] = useState('');
    const [isCloseDialogAllowed, setIsCloseDialogAllowed] = useState(false);
    const hasError = useSelector(({ error }) => error.hasError);
    const violations = useSelector(({ error }) => error.error);
    const isSaving = useSelector(({ vatMaintenance }) => vatMaintenance.isSaving);

    const resetViolations = useCallback(() => {
        setIsCloseDialogAllowed(false);
        dispatch(resetAllErrors());
    }, []);

    const onConfirmEditCallback = useCallback(() => {
        dispatch(addVAT(toDecimalNumber(percentage), description));
        setIsCloseDialogAllowed(true);
    }, [description, percentage]);

    const onChangePercentage = useCallback((value: string) => {
        setPercentage(value);
        setDescription(`${toDecimalNumber(value) * 100} %`);
    }, []);

    // Check if closing is allowed
    useEffect(() => {
        if (!hasError && !isSaving && isCloseDialogAllowed) {
            onClose();
        }
    }, [hasError, isSaving]);

    useEffect(() => {
        dispatch(
            updateDialogProperties({
                footerButtons: [
                    {
                        children: <LocalizedString value="Cancel" />,
                        iconType: IconType.CROSS,
                        isDisabled: isSaving,
                        onClick: onClose,
                        size: ButtonSize.SMALL,
                        variant: ButtonVariant.TEXT_ONLY,
                    },
                    {
                        children: <LocalizedString value="Add" />,
                        iconType: IconType.PLUS,
                        isDisabled: isEmpty(description) || isEmpty(percentage),
                        isLoading: isSaving,
                        onClick: onConfirmEditCallback,
                        size: ButtonSize.SMALL,
                    },
                ],
                isScrollable: false,
                title: <LocalizedString value="AddVAT" />,
            })
        );
    }, [onClose, onConfirmEditCallback, description, isSaving, percentage]);

    return (
        <>
            <DialogFormElementWrapper>
                <Input
                    autoFocus
                    label={<LocalizedString value="Percentage" />}
                    maxLength={5}
                    name="percentage"
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        onChangePercentage(event.currentTarget.value);
                        resetViolations();
                    }}
                    type={InputType.CURRENCY}
                    value={percentage}
                />
            </DialogFormElementWrapper>
            <DialogFormElementWrapper>
                <Input
                    label={<LocalizedString value="Description" />}
                    maxLength={maxInputWidth.xshort}
                    name="description"
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        setDescription(event.currentTarget.value);
                        resetViolations();
                    }}
                    value={description}
                />
            </DialogFormElementWrapper>

            {violations && (
                <ViolationList dangerouslySetInnerHTML={{ __html: getViolationTexts(violations).join() }} isError />
            )}
        </>
    );
};

export default AddVATDialog;

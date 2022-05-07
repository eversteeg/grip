import { ButtonSize, ButtonVariant, IconType, Input, InputType, isEmpty } from 'faralley-ui-kit';
import React, { ChangeEvent, FunctionComponent, useCallback, useEffect, useState } from 'react';
import { addVAT } from '../../_state/actions';
import { DialogFormElementWrapper } from '../../../components/atoms/dialogFormat/DialogFormat.sc';
import LocalizedString from '../../../components/atoms/localizedString/LocalizedString';
import { maxInputWidth } from '../../../globals/constants';
import { toDecimalNumber } from '../../../utils/formatFunctions';
import { updateDialogProperties } from '../../../state/dialog/actions';
import { useDispatch } from 'react-redux';

export interface AddVATDialogProps {
    onClose: () => void;
}

const AddVATDialog: FunctionComponent<AddVATDialogProps> = ({ onClose }) => {
    const dispatch = useDispatch();
    const [description, setDescription] = useState('');
    const [percentage, setPercentage] = useState('');

    const onConfirmEditCallback = useCallback(() => {
        dispatch(addVAT(toDecimalNumber(percentage), description));
        onClose();
    }, [description, percentage]);

    const onChangePercentage = useCallback((value: string) => {
        setPercentage(value);
        setDescription(`${toDecimalNumber(value) * 100} %`);
    }, []);

    useEffect(() => {
        dispatch(
            updateDialogProperties({
                footerButtons: [
                    {
                        children: <LocalizedString value="Cancel" />,
                        iconType: IconType.CROSS,
                        onClick: onClose,
                        size: ButtonSize.SMALL,
                        variant: ButtonVariant.TEXT_ONLY,
                    },
                    {
                        children: <LocalizedString value="Add" />,
                        iconType: IconType.PLUS,
                        isDisabled: isEmpty(description) || isEmpty(percentage),
                        onClick: onConfirmEditCallback,
                        size: ButtonSize.SMALL,
                    },
                ],
                isScrollable: false,
                title: <LocalizedString value="AddVAT" />,
            })
        );
    }, [onClose, onConfirmEditCallback, description, percentage]);

    return (
        <>
            <DialogFormElementWrapper>
                <Input
                    autoFocus
                    label={<LocalizedString value="Percentage" />}
                    maxLength={5}
                    name="percentage"
                    onChange={(event: ChangeEvent<HTMLInputElement>) => onChangePercentage(event.currentTarget.value)}
                    type={InputType.CURRENCY}
                    value={percentage}
                />
            </DialogFormElementWrapper>
            <DialogFormElementWrapper>
                <Input
                    label={<LocalizedString value="Description" />}
                    maxLength={maxInputWidth.xshort}
                    name="description"
                    onChange={(event: ChangeEvent<HTMLInputElement>) => setDescription(event.currentTarget.value)}
                    value={description}
                />
            </DialogFormElementWrapper>
        </>
    );
};

export default AddVATDialog;

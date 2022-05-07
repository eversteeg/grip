import { ButtonSize, ButtonVariant, IconType, Input, InputType } from 'faralley-ui-kit';
import React, { ChangeEvent, FunctionComponent, useCallback, useEffect, useState } from 'react';
import { DialogFormElementWrapper } from '../../../components/atoms/dialogFormat/DialogFormat.sc';
import LocalizedString from '../../../components/atoms/localizedString/LocalizedString';
import { maxInputWidth } from '../../../globals/constants';
import { toDecimalNumber } from '../../../utils/formatFunctions';
import { updateDialogProperties } from '../../../state/dialog/actions';
import { updateVAT } from '../../_state/actions';
import { useDispatch } from 'react-redux';
import { VAT } from '../../../../@types/vat/VAT';

export interface UpdateVATDialogProps {
    onClose: () => void;
    previousVAT: VAT;
}

const UpdateVATDialog: FunctionComponent<UpdateVATDialogProps> = ({ onClose, previousVAT }) => {
    const dispatch = useDispatch();
    const [description, setDescription] = useState(previousVAT.Description);
    const [percentage, setPercentage] = useState(previousVAT.Percentage.toString());

    const onConfirmEditCallback = useCallback(() => {
        dispatch(updateVAT(previousVAT.VATId, toDecimalNumber(percentage), description));
        onClose();
    }, [description, previousVAT, percentage]);

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
                        children: <LocalizedString value="Save" />,
                        iconType: IconType.PLUS,
                        onClick: onConfirmEditCallback,
                        size: ButtonSize.SMALL,
                    },
                ],
                isScrollable: false,
                title: <LocalizedString value="ChangeVAT" />,
            })
        );
    }, [onClose, onConfirmEditCallback]);

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

export default UpdateVATDialog;

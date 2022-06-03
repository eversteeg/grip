import {
    ButtonSize,
    ButtonVariant,
    Dropdown,
    DropdownVariant,
    IconType,
    Input,
    isEmpty,
    selectOptionsFacade,
} from 'faralley-ui-kit';
import { getVAT, getVATType } from '../../maintenance/_state/actions';
import React, { ChangeEvent, FunctionComponent, useCallback, useEffect, useState } from 'react';
import { shallowEqual, useDispatch } from 'react-redux';
import { VATItem, VATType as VATTypeEnum } from '../../../../@types/vat/VATItem';
import { DialogFormElementWrapper } from '../../../components/atoms/dialogFormat/DialogFormat.sc';
import { getViolationTexts } from '../../../utils/violationFunctions';
import LocalizedString from '../../../components/atoms/localizedString/LocalizedString';
import { maxInputWidth } from '../../../globals/constants';
import { resetAllErrors } from '../../../state/error/actions';
import { updateDialogProperties } from '../../../state/dialog/actions';
import { updateVATItem } from '../../_state/actions';
import useSelector from '../../../state/useSelector';
import { VAT } from '../../../../@types/vat/VAT';
import { VATType } from '../../../../@types/vat/VATType';
import { ViolationList } from '../../../components/atoms/violationList/ViolationList.sc';

export interface UpdateVATItemDialogProps {
    onClose: () => void;
    previousVATItem: VATItem;
}

const UpdateVATItemDialog: FunctionComponent<UpdateVATItemDialogProps> = ({ onClose, previousVATItem }) => {
    const dispatch = useDispatch();
    const [newVATItem, setNewVATItem] = useState(previousVATItem);
    const [selectedVAT, setSelectedVAT] = useState<VAT>({} as VAT);
    const [selectedVATType, setSelectedVATType] = useState<VATType>({} as VATType);
    const [isCloseDialogAllowed, setIsCloseDialogAllowed] = useState(false);
    const hasError = useSelector(({ error }) => error.hasError);
    const violations = useSelector(({ error }) => error.error);
    const { isSaving, vat, vatType } = useSelector(({ vatMaintenance }) => vatMaintenance, shallowEqual);

    console.log('****************** newvat', newVATItem);
    console.log('****************** selectedVATType', selectedVATType);
    console.log('****************** vat', vat);

    const resetViolations = useCallback(() => {
        setIsCloseDialogAllowed(false);
        dispatch(resetAllErrors());
    }, []);

    const onConfirmEditCallback = useCallback(() => {
        dispatch(updateVATItem(newVATItem));
        setIsCloseDialogAllowed(true);
    }, [newVATItem]);

    const onChangeVATCallback = useCallback(
        (newVATId: string) => {
            const newItem = vat.find((item) => item.VATId.toString() === newVATId) || ({} as VAT);
            setSelectedVAT(newItem);

            setNewVATItem({
                ...newVATItem,
                VATDescription: newItem.Description,
                VATId: newItem.VATId,
            });
        },
        [vat]
    );

    const onChangeVATTypeCallback = useCallback(
        (newVATType: string) => {
            const newItem = vatType.find((item) => item.VATType === newVATType) || ({} as VATType);
            setSelectedVATType(newItem);

            setNewVATItem({
                ...newVATItem,
                VATType: newItem.VATType as VATTypeEnum,
                VATTypeDescription: newItem.Description,
            });
        },
        [vatType]
    );

    // Fetch picklist of vats
    useEffect(() => {
        dispatch(getVAT());
        dispatch(getVATType());
    }, []);

    // Set correct vatid
    useEffect(() => {
        setSelectedVAT(vat.find((item) => item.VATId === previousVATItem.VATId) || ({} as VAT));
    }, [previousVATItem, vat]);

    // Set correct vattype
    useEffect(() => {
        setSelectedVATType(vatType.find((item) => item.VATType === previousVATItem.VATType) || ({} as VATType));
    }, [previousVATItem, vatType]);

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
                        children: <LocalizedString value="Save" />,
                        iconType: IconType.PLUS,
                        isDisabled: isEmpty(newVATItem.Description),
                        isLoading: isSaving,
                        onClick: onConfirmEditCallback,
                        size: ButtonSize.SMALL,
                    },
                ],
                isScrollable: false,
                title: <LocalizedString value="ChangeVATItem" />,
            })
        );
    }, [onClose, onConfirmEditCallback, isSaving, newVATItem]);

    return (
        <>
            <DialogFormElementWrapper>
                <Dropdown
                    label={<LocalizedString value="Percentage" />}
                    name="vatType"
                    onChange={({ currentTarget }): void => {
                        onChangeVATTypeCallback(currentTarget.value);
                    }}
                    options={selectOptionsFacade(vatType, 'Description', 'VATType')}
                    value={selectedVATType.VATType || ''}
                    variant={DropdownVariant.OUTLINE}
                />
            </DialogFormElementWrapper>
            <DialogFormElementWrapper>
                <Dropdown
                    label={<LocalizedString value="Percentage" />}
                    name="vat"
                    onChange={({ currentTarget }): void => {
                        onChangeVATCallback(currentTarget.value);
                    }}
                    options={selectOptionsFacade(vat, 'Description', 'VATId')}
                    value={selectedVAT.VATId || ''}
                    variant={DropdownVariant.OUTLINE}
                />
            </DialogFormElementWrapper>
            <DialogFormElementWrapper>
                <Input
                    label={<LocalizedString value="Description" />}
                    maxLength={maxInputWidth.xshort}
                    name="description"
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        setNewVATItem({
                            ...newVATItem,
                            Description: event.currentTarget.value,
                        });

                        resetViolations();
                    }}
                    value={newVATItem.Description}
                />
            </DialogFormElementWrapper>

            {violations && (
                <ViolationList dangerouslySetInnerHTML={{ __html: getViolationTexts(violations).join() }} isError />
            )}
        </>
    );
};

export default UpdateVATItemDialog;

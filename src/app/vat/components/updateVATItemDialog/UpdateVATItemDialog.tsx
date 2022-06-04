import {
    ButtonSize,
    ButtonVariant,
    Dropdown,
    DropdownVariant,
    IconType,
    Input,
    InputCurrency,
    InputVariant,
    isEmpty,
    selectOptionsFacade,
    toCents,
    toMoneyValue,
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
    const genericErrorMessages = useSelector(({ language }) => language.genericErrorMessages);
    const hasError = useSelector(({ error }) => error.hasError);
    const locale = useSelector(({ language }) => language.locale);
    const violations = useSelector(({ error }) => error.error);
    const { isSaving, vat, vatType } = useSelector(({ vatMaintenance }) => vatMaintenance, shallowEqual);
    const [amount, setAmount] = useState(previousVATItem.Amount.toString());
    const [amountVAT, setAmountVAT] = useState(previousVATItem.AmountVAT.toString());

    const resetViolations = useCallback(() => {
        setIsCloseDialogAllowed(false);
        dispatch(resetAllErrors());
    }, []);

    const onConfirmEditCallback = useCallback(() => {
        dispatch(
            updateVATItem({
                ...newVATItem,
                Amount: toCents(amount) / 100,
                AmountVAT: toCents(amountVAT) / 100,
            })
        );

        setIsCloseDialogAllowed(true);
    }, [amount, amountVAT, newVATItem]);

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

    const onChangeAmountCallback = (event: ChangeEvent<HTMLInputElement>): void => {
        setAmount(event.currentTarget.value);
    };

    // Fetch picklist of vats
    useEffect(() => {
        dispatch(getVAT());
        dispatch(getVATType());
    }, []);

    // Calculate and set amount vat
    useEffect(() => {
        if (amount && selectedVAT && selectedVAT.Percentage) {
            const percentage = 100 + 100 * selectedVAT.Percentage;
            const amountExclVAT = toMoneyValue(toCents(amount) / percentage, locale);
            setAmountVAT(((toCents(amount) - toCents(amountExclVAT)) / 100).toString());
        }
    }, [amount, selectedVAT]);

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
                    errorMessage={genericErrorMessages.required}
                    isRequired
                    label={<LocalizedString value="VATType" />}
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
                    errorMessage={genericErrorMessages.required}
                    isRequired
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
                    errorMessage={genericErrorMessages.required}
                    isRequired
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
            <DialogFormElementWrapper>
                <InputCurrency
                    errorMessage={<LocalizedString value="ErrorInvalidAmount" />}
                    isRequired
                    label={<LocalizedString value="Amount" />}
                    locale={locale}
                    name="amount"
                    onChange={onChangeAmountCallback}
                    value={amount}
                    variant={InputVariant.OUTLINE}
                />
            </DialogFormElementWrapper>
            <DialogFormElementWrapper>
                <InputCurrency
                    errorMessage={<LocalizedString value="ErrorInvalidAmount" />}
                    isDisabled
                    label={<LocalizedString value="AmountVAT" />}
                    locale={locale}
                    name="amountVAT"
                    value={amountVAT}
                    variant={InputVariant.OUTLINE}
                />
            </DialogFormElementWrapper>

            {violations && (
                <ViolationList dangerouslySetInnerHTML={{ __html: getViolationTexts(violations).join() }} isError />
            )}
        </>
    );
};

export default UpdateVATItemDialog;

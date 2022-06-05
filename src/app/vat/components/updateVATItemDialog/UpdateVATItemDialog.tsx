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
    toNumber,
} from 'faralley-ui-kit';
import { getOrganizationPicklist, setOrganizationOptions } from '../../../organization/maintenance/_state/actions';
import { getVAT, getVATType } from '../../maintenance/_state/actions';
import React, { ChangeEvent, FunctionComponent, useCallback, useEffect, useState } from 'react';
import { shallowEqual, useDispatch } from 'react-redux';
import { VATItem, VATType as VATTypeEnum } from '../../../../@types/vat/VATItem';
import { DialogFormElementWrapper } from '../../../components/atoms/dialogFormat/DialogFormat.sc';
import { getViolationTexts } from '../../../utils/violationFunctions';
import LocalizedString from '../../../components/atoms/localizedString/LocalizedString';
import { maxInputWidth } from '../../../globals/constants';
import { OrganizationOption } from '../../../../@types/organization/OrganizationOption';
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
    const [selectedOrganization, setSelectedOrganization] = useState<OrganizationOption>({} as OrganizationOption);
    const [selectedVAT, setSelectedVAT] = useState<VAT>({} as VAT);
    const [selectedVATType, setSelectedVATType] = useState<VATType>({} as VATType);
    const [isCloseDialogAllowed, setIsCloseDialogAllowed] = useState(false);
    const [isSaveAllowed, setIsSaveAllowed] = useState(false);
    const genericErrorMessages = useSelector(({ language }) => language.genericErrorMessages);
    const hasError = useSelector(({ error }) => error.hasError);
    const locale = useSelector(({ language }) => language.locale);
    const violations = useSelector(({ error }) => error.error);
    const isSaving = useSelector(({ vat }) => vat.isSaving);
    const { vat, vatType } = useSelector(({ vatMaintenance }) => vatMaintenance, shallowEqual);

    const { isLoading, organizationOptions } = useSelector(
        ({ organizationMaintenance }) => organizationMaintenance,
        shallowEqual
    );

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
        [newVATItem, vat]
    );

    const onChangeOrganizationCallback = useCallback(
        (newOrganizationId: string) => {
            const newItem =
                organizationOptions.find((item) => item.Id === toNumber(newOrganizationId)) ||
                ({} as OrganizationOption);

            newItem.IsSelected = true;

            // Just to be accurate and sure, replace isselected value
            dispatch(
                setOrganizationOptions(
                    organizationOptions.map((item) => ({
                        ...item,
                        IsSelected: item.Id === newItem.Id,
                    }))
                )
            );

            setSelectedOrganization(newItem);

            setNewVATItem({
                ...newVATItem,
                OrganizationId: newItem.Id,
                OrganizationName: newItem.Description,
            });
        },
        [newVATItem, organizationOptions]
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
        [newVATItem, vatType]
    );

    const onChangeAmountCallback = (event: ChangeEvent<HTMLInputElement>): void => {
        setAmount(event.currentTarget.value);
    };

    // Fetch picklist of vats
    useEffect(() => {
        dispatch(getOrganizationPicklist());
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

    // Set correct organization
    useEffect(() => {
        if (!selectedOrganization || isEmpty(selectedOrganization.Id)) {
            setSelectedOrganization(
                organizationOptions.find((item) => item.Id === previousVATItem.OrganizationId) ||
                    ({} as OrganizationOption)
            );
        }
    }, [previousVATItem, organizationOptions, selectedOrganization]);

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
        if (!hasError && !isLoading && !isSaving && isCloseDialogAllowed) {
            onClose();
        }
    }, [hasError, isCloseDialogAllowed, isLoading, isSaving]);

    // Check if saving is allowed
    useEffect(() => {
        setIsSaveAllowed(
            !isEmpty(newVATItem.VATItemId) &&
                !isEmpty(newVATItem.VATId) &&
                !isEmpty(newVATItem.VATType) &&
                !isEmpty(newVATItem.OrganizationId) &&
                !isEmpty(newVATItem.Amount) &&
                newVATItem.Amount !== 0 &&
                !isEmpty(newVATItem.ArticleNumber) &&
                !isEmpty(newVATItem.Description)
        );
    }, [newVATItem]);

    useEffect(() => {
        dispatch(
            updateDialogProperties({
                footerButtons: [
                    {
                        children: <LocalizedString value="Cancel" />,
                        iconType: IconType.CROSS,
                        isDisabled: isLoading || isSaving,
                        onClick: onClose,
                        size: ButtonSize.SMALL,
                        variant: ButtonVariant.TEXT_ONLY,
                    },
                    {
                        children: <LocalizedString value="Save" />,
                        iconType: IconType.PLUS,
                        isDisabled: !isSaveAllowed,
                        isLoading: isLoading || isSaving,
                        onClick: onConfirmEditCallback,
                        size: ButtonSize.SMALL,
                    },
                ],
                isScrollable: false,
                title: <LocalizedString value="ChangeVATItem" />,
            })
        );
    }, [onClose, onConfirmEditCallback, isLoading, isSaveAllowed, isSaving, newVATItem]);

    return (
        <>
            <DialogFormElementWrapper>
                <InputCurrency
                    autoFocus
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
                    maxLength={maxInputWidth.textDefault}
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
                <Input
                    errorMessage={genericErrorMessages.required}
                    isRequired
                    label={<LocalizedString value="ArticleNumber" />}
                    maxLength={maxInputWidth.textDefault}
                    name="articlenumber"
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        setNewVATItem({
                            ...newVATItem,
                            ArticleNumber: event.currentTarget.value,
                        });

                        resetViolations();
                    }}
                    value={newVATItem.ArticleNumber}
                />
            </DialogFormElementWrapper>
            <DialogFormElementWrapper>
                <Dropdown
                    errorMessage={genericErrorMessages.required}
                    isRequired
                    label={<LocalizedString value="Organization" />}
                    name="organizationId"
                    onChange={({ currentTarget }): void => {
                        onChangeOrganizationCallback(currentTarget.value);
                    }}
                    options={selectOptionsFacade(organizationOptions, 'Description', 'Id')}
                    value={selectedOrganization.Id || ''}
                    variant={DropdownVariant.OUTLINE}
                />
            </DialogFormElementWrapper>

            {violations && (
                <ViolationList dangerouslySetInnerHTML={{ __html: getViolationTexts(violations).join() }} isError />
            )}
        </>
    );
};

export default UpdateVATItemDialog;

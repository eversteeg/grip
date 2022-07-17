import {
    ButtonSize,
    ButtonVariant,
    Dialog,
    Dropdown,
    DropdownVariant,
    IconType,
    Locale,
    selectOptionsFacade,
    Status,
} from 'faralley-ui-kit';
import React, { FunctionComponent, useCallback, useEffect, useState } from 'react';
import ConstructVATHtml from './ConstructVATHtml';
import DatePicker from './DatePicker';
import { DialogFormElementWrapper } from '../../../components/atoms/dialogFormat/DialogFormat.sc';
import { getVATType } from '../../maintenance/_state/actions';
import LocalizedString from '../../../components/atoms/localizedString/LocalizedString';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import useSelector from '../../../state/useSelector';
import { VATType } from '../../../../@types/vat/VATType';

export const StyledDialog = styled.div``;

interface DialogPrintProps {
    isVisible: boolean;
    onCancel: () => void;
}

const DialogPrint: FunctionComponent<DialogPrintProps> = ({ isVisible, onCancel }) => {
    const dispatch = useDispatch();
    const locale = useSelector(({ language }) => language.locale);
    const [selectedVATType, setSelectedVATType] = useState<VATType>({} as VATType);
    const { vatType } = useSelector(({ vatMaintenance }) => vatMaintenance);
    const [wrapperElementRef, setWrapperElementRef] = useState<HTMLDivElement | null>(null);
    const isPrinting = false;
    const fileName = locale === Locale.EN ? 'vat-list.pdf' : 'btw-lijst.pdf';

    const openInNewTab = (url: string) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');

        if (newWindow) {
            newWindow.opener = null;
        }
    };

    const onPrintCallback = useCallback(() => {
        console.log('**************** print *', fileName);
        console.log('html', ConstructVATHtml);
        // openInNewTab(ConstructVATHtml);
        openInNewTab('www.google.nl');
    }, []);

    const onChangeVATTypeCallback = useCallback(
        (newVATType: string) => {
            const newItem = vatType.find((item) => item.VATType === newVATType) || ({} as VATType);
            setSelectedVATType(newItem);
        },
        [vatType]
    );

    // Fetch picklist of vats
    useEffect(() => {
        dispatch(getVATType(true));
    }, []);

    return (
        <StyledDialog ref={setWrapperElementRef}>
            <Dialog
                footerButtons={[
                    {
                        children: <LocalizedString value="Cancel" />,
                        iconType: IconType.CROSS,
                        isDisabled: isPrinting,
                        onClick: onCancel,
                        size: ButtonSize.SMALL,
                        variant: ButtonVariant.TEXT_ONLY,
                    },
                    {
                        children: <LocalizedString value="Print" />,
                        iconType: IconType.CHECK,
                        isLoading: isPrinting,
                        onClick: onPrintCallback,
                        size: ButtonSize.SMALL,
                    },
                ]}
                hasButtonClose={false}
                iconType={IconType.FILEDOWNLOAD}
                isVisible={isVisible}
                status={Status.DEFAULT}
                text={<LocalizedString value="PrintVATList" />}
            >
                <DialogFormElementWrapper>
                    <Dropdown
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
                    <DatePicker parentContainer={wrapperElementRef || undefined} />
                </DialogFormElementWrapper>
            </Dialog>
        </StyledDialog>
    );
};

export default DialogPrint;

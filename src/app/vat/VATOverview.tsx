import {
    Button,
    ButtonSize,
    ButtonVariant,
    Dropdown,
    DropdownVariant,
    IconType,
    PanelHeader,
    SelectionControl,
    Status,
} from 'faralley-ui-kit';
import { closeDialog, openDialog } from '../state/dialog/actions';
import { Column, Row } from '../components/atoms/grid/Grid';
import { deleteVATItem, getVATItems } from './_state/actions';
import { EDIT_MODE, NR_OF_TABLE_ROWS_SMALL } from '../globals/constants';
import { PanelHeaderOption, PanelHeaderOptions } from '../components/molecules/panelHeader/PanelHeader.sc';
import React, { ChangeEvent, FunctionComponent, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { shallowEqual, useDispatch } from 'react-redux';
import { VATItem, VATType } from '../../@types/vat/VATItem';
import AddVATItemDialog from './components/addVATItemDialog/AddVATItemDialog';
import { createTable } from '../utils/tableFunctions';
import DialogPrint from './components/dialogPrint/DialogPrint';
import { getTranslation } from '../utils/translationFunctions';
import { HeaderButtonWrapper } from '../components/layouts/pageLayout/header/Header.sc';
import LocalizedString from '../components/atoms/localizedString/LocalizedString';
import { resetAllErrors } from '../state/error/actions';
import { setHeaderContent } from '../state/global/actions';
import Table from '../components/organisms/table/Table';
import { tableColumnsVatItems } from './tableColumnsVatItems';
import { Row as TableRow } from 'react-table';
import { ThemeContext } from 'styled-components';
import { Translations } from '../state/language/types';
import UpdateVATItemDialog from './components/updateVATItemDialog/UpdateVATItemDialog';
import useSelector from '../state/useSelector';

const VATOverview: FunctionComponent = () => {
    const dispatch = useDispatch();
    const [isDialogPrintVisible, setIsDialogPrintVisible] = useState(false);
    const headerContent = useSelector(({ global }) => global.headerContent);
    const theme = useContext(ThemeContext);

    const [dropdownOptions] = useState([
        {
            label: getTranslation(`VATType${VATType.ALL}` as keyof Translations),
            value: VATType.ALL,
        },
        {
            label: getTranslation(`VATType${VATType.CLAIM}` as keyof Translations),
            value: VATType.CLAIM,
        },
        {
            label: getTranslation(`VATType${VATType.CONVEY}` as keyof Translations),
            value: VATType.CONVEY,
        },
    ]);

    const [vats, setVats] = useState([] as Array<VATItem>);
    const [vatType, setVatType] = useState<VATType>(VATType.ALL);
    const [editMode, setEditMode] = useState<EDIT_MODE>(EDIT_MODE.ADD);
    const [isDialogVisible, setIsDialogVisible] = useState(false);
    const [selectedVAT, setSelectedVAT] = useState<VATItem>({} as VATItem);
    const [isShowAll, setIsShowAll] = useState(false);
    const { isAddVATAllowed, isLoading, isVATRefreshRequired, vatItems } = useSelector(({ vat }) => vat, shallowEqual);

    const onAddCallback = useCallback(() => {
        setEditMode(EDIT_MODE.ADD);
        setIsDialogVisible(true);
    }, []);

    const onEditCallback = useCallback((vat: VATItem) => {
        if (vat.IsEditAllowed) {
            setSelectedVAT(vat);
            setEditMode(EDIT_MODE.EDIT);
            setIsDialogVisible(true);
        }
    }, []);

    const onConfirmDeleteCallback = useCallback((vat: VATItem) => {
        dispatch(deleteVATItem(vat.VATItemId));
        dispatch(closeDialog());
    }, []);

    const onDeleteCallback = useCallback((vat: VATItem) => {
        dispatch(
            openDialog({
                footerButtons: [
                    {
                        children: <LocalizedString value="Cancel" />,
                        iconType: IconType.CROSS,
                        onClick: () => dispatch(closeDialog()),
                        size: ButtonSize.SMALL,
                        variant: ButtonVariant.TEXT_ONLY,
                    },
                    {
                        children: <LocalizedString value="Delete" />,
                        iconType: IconType.TRASHCAN,
                        onClick: () => {
                            onConfirmDeleteCallback(vat);
                        },
                        size: ButtonSize.SMALL,
                    },
                ],
                iconType: IconType.TRASHCAN,
                status: Status.ALERT,
                text: <LocalizedString value="DeleteHistoryData" />,
            })
        );
    }, []);

    const onClickRowCallback = useCallback((_, { original }: TableRow<VATItem>) => {
        onEditCallback(original);
    }, []);

    const setSelectedVATTypeCallback = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
        setVatType(event.currentTarget.value as VATType);
    }, []);

    const columnsVatItems = useMemo(
        () => tableColumnsVatItems(theme, onDeleteCallback, onEditCallback),
        [onDeleteCallback, onEditCallback]
    );

    const sortBy = useMemo(
        () => [
            {
                id: 'Description',
            },
        ],
        []
    );

    const tableInstance = createTable<VATItem>(columnsVatItems, vats, {
        sortBy,
    });

    const onCloseDialogCallback = useCallback(() => {
        setIsDialogVisible(false);
        dispatch(closeDialog());
        setSelectedVAT({} as VATItem);
    }, []);

    const openEditVATDialog = useCallback(() => {
        dispatch(
            openDialog({
                children: <UpdateVATItemDialog onClose={onCloseDialogCallback} previousVATItem={selectedVAT} />,
                footerButtons: [
                    {
                        children: <LocalizedString value="Cancel" />,
                        iconType: IconType.CROSS,
                        size: ButtonSize.SMALL,
                        variant: ButtonVariant.TEXT_ONLY,
                    },
                ],
                iconType: IconType.MONEY,
            })
        );
    }, [selectedVAT]);

    const openAddVATDialog = useCallback(() => {
        dispatch(
            openDialog({
                children: <AddVATItemDialog onClose={onCloseDialogCallback} />,
                footerButtons: [
                    {
                        children: <LocalizedString value="Cancel" />,
                        iconType: IconType.CROSS,
                        size: ButtonSize.SMALL,
                        variant: ButtonVariant.TEXT_ONLY,
                    },
                ],
                iconType: IconType.MONEY,
            })
        );
    }, []);

    const closeDialogPrint = useCallback(() => {
        setIsDialogPrintVisible(false);
    }, []);

    const openDialogPrint = useCallback(() => {
        setIsDialogPrintVisible(true);
    }, []);

    useEffect(() => {
        if (headerContent === undefined) {
            dispatch(
                setHeaderContent(
                    <HeaderButtonWrapper>
                        <Button
                            iconType={IconType.FILEDOWNLOAD}
                            isInverted
                            onClick={openDialogPrint}
                            size={ButtonSize.SMALL}
                        >
                            <LocalizedString value="Print" />
                        </Button>
                    </HeaderButtonWrapper>
                )
            );
        }
    }, [headerContent]);

    // Fetch initial data and every time showInactive has changed or a certificate is changed or added
    useEffect(() => {
        dispatch(getVATItems(isShowAll, vatType));
    }, [isShowAll, vatType]);

    // Fetch data again after a certificate is changed, added or deleted
    useEffect(() => {
        if (isVATRefreshRequired) {
            dispatch(getVATItems(isShowAll, vatType));
        }
    }, [isVATRefreshRequired]);

    useEffect(() => {
        if (vatItems) {
            setVats(vatItems);
        }
    }, [vatItems]);

    useEffect(() => {
        if (isDialogVisible) {
            dispatch(resetAllErrors());

            if (editMode === EDIT_MODE.EDIT) {
                openEditVATDialog();
            } else {
                openAddVATDialog();
            }
        }
    }, [isDialogVisible]);

    useEffect(
        () =>
            // Reset the header content when unmounting
            (): void => {
                dispatch(setHeaderContent(undefined));
            },
        []
    );

    return (
        <>
            <Row hasHorizontalCorrection>
                <Column hasMarginBottom>
                    <PanelHeader
                        iconType={IconType.MONEY}
                        isLoading={isLoading}
                        options={
                            <PanelHeaderOptions>
                                <PanelHeaderOption>
                                    <Button
                                        iconType={IconType.PLUS}
                                        isDisabled={isLoading || !isAddVATAllowed}
                                        onClick={isAddVATAllowed ? onAddCallback : undefined}
                                        size={ButtonSize.SMALL}
                                        variant={ButtonVariant.TEXT_ONLY}
                                    >
                                        <LocalizedString value="Add" />
                                    </Button>
                                </PanelHeaderOption>
                                <PanelHeaderOption>
                                    <Dropdown
                                        name="pickListVATType"
                                        onChange={setSelectedVATTypeCallback}
                                        options={dropdownOptions}
                                        placeholder={getTranslation('NothingSelected')}
                                        value={vatType}
                                        variant={DropdownVariant.COMPACT}
                                    />
                                </PanelHeaderOption>
                                <PanelHeaderOption>
                                    <SelectionControl
                                        hasAlternativeTextStyle
                                        isChecked={isShowAll}
                                        isDisabled={isLoading}
                                        label={<LocalizedString value="ShowAll" />}
                                        name="isShowAll"
                                        onChange={() => setIsShowAll(!isShowAll)}
                                        value="isShowAll"
                                    />
                                </PanelHeaderOption>
                            </PanelHeaderOptions>
                        }
                        title={<LocalizedString value="VATs" />}
                    />
                    <Table
                        instance={tableInstance}
                        isLoading={isLoading}
                        numberOfRowsPerTable={NR_OF_TABLE_ROWS_SMALL}
                        onClickRow={onClickRowCallback}
                        showRowsInCard
                    />
                </Column>
            </Row>
            <DialogPrint isVisible={isDialogPrintVisible} onCancel={closeDialogPrint} />
        </>
    );
};

export default VATOverview;

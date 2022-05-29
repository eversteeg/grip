import { Button, ButtonSize, ButtonVariant, IconType, PanelHeader, Status } from 'faralley-ui-kit';
import { closeDialog, openDialog } from '../../state/dialog/actions';
import { Column, Row } from '../../components/atoms/grid/Grid';
import { deleteVAT, getVAT } from './_state/actions';
import { EDIT_MODE, NR_OF_TABLE_ROWS_SMALL } from '../../globals/constants';
import { PanelHeaderOption, PanelHeaderOptions } from '../../components/molecules/panelHeader/PanelHeader.sc';
import React, { FunctionComponent, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { shallowEqual, useDispatch } from 'react-redux';
import AddVATDialog from './components/addVATDialog/AddVATDialog';
import { createTable } from '../../utils/tableFunctions';
import LocalizedString from '../../components/atoms/localizedString/LocalizedString';
import { resetAllErrors } from '../../state/error/actions';
import Table from '../../components/organisms/table/Table';
import { tableColumnsVats } from './tableColumnsVats';
import { Row as TableRow } from 'react-table';
import { ThemeContext } from 'styled-components';
import UpdateVATDialog from './components/updateVATDialog/UpdateVATDialog';
import useSelector from '../../state/useSelector';
import { VAT } from '../../../@types/vat/VAT';

const VATMaintenance: FunctionComponent = () => {
    const dispatch = useDispatch();
    const theme = useContext(ThemeContext);
    const [vats, setVats] = useState([] as Array<VAT>);
    const [editMode, setEditMode] = useState<EDIT_MODE>(EDIT_MODE.ADD);
    const [isDialogVisible, setIsDialogVisible] = useState(false);
    const [selectedVAT, setSelectedVAT] = useState<VAT>({} as VAT);
    const vatValues = useSelector(({ vatMaintenance }) => vatMaintenance.vat);

    const { isAddVATAllowed, isLoading, isVATRefreshRequired } = useSelector(
        ({ vatMaintenance }) => vatMaintenance,
        shallowEqual
    );

    const onAddCallback = useCallback(() => {
        setEditMode(EDIT_MODE.ADD);
        setIsDialogVisible(true);
    }, []);

    const onEditCallback = useCallback((vat: VAT) => {
        if (vat.IsEditAllowed) {
            setSelectedVAT(vat);
            setEditMode(EDIT_MODE.EDIT);
            setIsDialogVisible(true);
        }
    }, []);

    const onConfirmDeleteCallback = useCallback((vat: VAT) => {
        dispatch(deleteVAT(vat.VATId));
        dispatch(closeDialog());
    }, []);

    const onDeleteCallback = useCallback((vat: VAT) => {
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

    const onClickRowCallback = useCallback((_, { original }: TableRow<VAT>) => {
        onEditCallback(original);
    }, []);

    const columnsVats = useMemo(
        () => tableColumnsVats(theme, onDeleteCallback, onEditCallback),
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

    const tableInstance = createTable<VAT>(columnsVats, vats, {
        sortBy,
    });

    const onCloseDialogCallback = useCallback(() => {
        setIsDialogVisible(false);
        dispatch(closeDialog());
        setSelectedVAT({} as VAT);
    }, []);

    const openEditVATDialog = useCallback(() => {
        dispatch(
            openDialog({
                children: <UpdateVATDialog onClose={onCloseDialogCallback} previousVAT={selectedVAT} />,
                footerButtons: [
                    {
                        children: <LocalizedString value="Cancel" />,
                        iconType: IconType.CROSS,
                        size: ButtonSize.SMALL,
                        variant: ButtonVariant.TEXT_ONLY,
                    },
                ],
                iconType: IconType.AWARD,
            })
        );
    }, [selectedVAT]);

    const openAddVATDialog = useCallback(() => {
        dispatch(
            openDialog({
                children: <AddVATDialog onClose={onCloseDialogCallback} />,
                footerButtons: [
                    {
                        children: <LocalizedString value="Cancel" />,
                        iconType: IconType.CROSS,
                        size: ButtonSize.SMALL,
                        variant: ButtonVariant.TEXT_ONLY,
                    },
                ],
                iconType: IconType.AWARD,
            })
        );
    }, []);

    // Fetch initial data and every time showInactive has changed or a certificate is changed or added
    useEffect(() => {
        dispatch(getVAT());
    }, []);

    // Fetch data again after a certificate is changed, added or deleted
    useEffect(() => {
        if (isVATRefreshRequired) {
            dispatch(getVAT());
        }
    }, [isVATRefreshRequired]);

    useEffect(() => {
        if (vatValues) {
            setVats(vatValues);
        }
    }, [vatValues]);

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

    return (
        <>
            <Row hasHorizontalCorrection>
                <Column hasMarginBottom>
                    <PanelHeader
                        iconType={IconType.AWARD}
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
        </>
    );
};

export default VATMaintenance;

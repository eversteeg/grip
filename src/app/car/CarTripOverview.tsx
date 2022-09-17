import {
    Button,
    ButtonSize,
    ButtonVariant,
    createTable,
    formatAsSystemDate,
    IconType,
    PanelHeader,
    Status,
} from 'faralley-ui-kit';
import { closeDialog, openDialog } from '../state/dialog/actions';
import { Column, Row } from '../components/atoms/grid/Grid';
import { deleteCarTripItem, getCarTripItems, setIsCarTripModalVisible } from './_state/actions';
import { PanelHeaderOption, PanelHeaderOptions } from '../components/molecules/panelHeader/PanelHeader.sc';
import React, { FunctionComponent, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { setMaxBodyHeight, setModalChildren } from '../state/modal/actions';
import { shallowEqual, useDispatch } from 'react-redux';
import AddCarTripModal from './modal/add/AddCarTripModal';
import { CarTripItem } from '../../@types/car/CarTripItem';
import DatePicker from './datePicker/DatePicker';
import { EDIT_MODE } from '../globals/constants';
import LocalizedString from '../components/atoms/localizedString/LocalizedString';
import moment from 'moment';
import Table from '../components/organisms/table/Table';
import { tableColumnsCarTripItems } from './tableColumnsCarTripItems';
import { Row as TableRow } from 'react-table';
import { ThemeContext } from 'styled-components';
import UpdateCarTripModal from './modal/update/UpdateCarTripModal';
import useSelector from '../state/useSelector';

const MAX_BODY_HEIGHT_MODAL = '450px';

const CarTripOverview: FunctionComponent = () => {
    const dispatch = useDispatch();
    const [editMode, setEditMode] = useState<EDIT_MODE>(EDIT_MODE.ADD);
    const theme = useContext(ThemeContext);
    const [carTrips, setCarTrips] = useState([] as Array<CarTripItem>);
    const [selectedCarTrip, setSelectedCarTrip] = useState<CarTripItem>({} as CarTripItem);

    const [selectedDateFrom, setSelectedDateFrom] = useState<string>(
        formatAsSystemDate(moment().subtract(4, 'months'))
    );

    const { carTripItems, isAddCarTripAllowed, isLoading, isCarTripModalVisible, isCarTripsRefreshRequired } =
        useSelector(({ car }) => car, shallowEqual);

    const onAddCallback = useCallback(() => {
        setEditMode(EDIT_MODE.ADD);
        dispatch(setIsCarTripModalVisible(true));
    }, []);

    const onEditCallback = useCallback((carTrip: CarTripItem) => {
        if (carTrip.IsEditAllowed) {
            setSelectedCarTrip(carTrip);
            setEditMode(EDIT_MODE.EDIT);
            dispatch(setIsCarTripModalVisible(true));
        }
    }, []);

    const onConfirmDeleteCallback = useCallback((carTrip: CarTripItem) => {
        dispatch(deleteCarTripItem(carTrip.TripId));
        dispatch(closeDialog());
    }, []);

    const onDeleteCallback = useCallback((carTrip: CarTripItem) => {
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
                            onConfirmDeleteCallback(carTrip);
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

    const onClickRowCallback = useCallback((_, { original }: TableRow<CarTripItem>) => {
        onEditCallback(original);
    }, []);

    const columnsCarTripItems = useMemo(
        () => tableColumnsCarTripItems(theme, onDeleteCallback, onEditCallback),
        [onDeleteCallback, onEditCallback]
    );

    const sortBy = useMemo(
        () => [
            {
                desc: true,
                id: 'TripDate',
            },
        ],
        []
    );

    const tableInstance = createTable<CarTripItem>(columnsCarTripItems, carTrips, {
        sortBy,
    });

    // Fetch initial data and every time showInactive has changed or a certificate is changed or added
    useEffect(() => {
        dispatch(getCarTripItems(selectedDateFrom));
    }, [selectedDateFrom]);

    useEffect(() => {
        if (carTripItems) {
            setCarTrips(carTripItems);
        }
    }, [carTripItems]);

    // Fetch data again after a certificate is changed, added or deleted
    useEffect(() => {
        if (isCarTripsRefreshRequired) {
            dispatch(getCarTripItems(selectedDateFrom));
        }
    }, [isCarTripsRefreshRequired]);

    useEffect(() => {
        dispatch(setMaxBodyHeight(MAX_BODY_HEIGHT_MODAL));
        let modal;

        if (isCarTripModalVisible && editMode === EDIT_MODE.ADD) {
            modal = <AddCarTripModal />;
        } else if (isCarTripModalVisible && editMode === EDIT_MODE.EDIT) {
            modal = <UpdateCarTripModal currentCarTrip={selectedCarTrip} />;
        }

        dispatch(setModalChildren(modal));
    }, [editMode, isCarTripModalVisible, selectedCarTrip]);

    return (
        <>
            <Row hasHorizontalCorrection>
                <Column hasMarginBottom>
                    <PanelHeader
                        iconType={IconType.CAR}
                        isLoading={isLoading}
                        options={
                            <PanelHeaderOptions>
                                <PanelHeaderOption>
                                    <Button
                                        iconType={IconType.PLUS}
                                        isDisabled={isLoading || !isAddCarTripAllowed}
                                        onClick={isAddCarTripAllowed ? onAddCallback : undefined}
                                        size={ButtonSize.SMALL}
                                        variant={ButtonVariant.PRIMARY}
                                    >
                                        <LocalizedString value="Add" />
                                    </Button>
                                </PanelHeaderOption>
                                <PanelHeaderOption>
                                    <DatePicker
                                        filterDate={selectedDateFrom}
                                        isLoading={isLoading}
                                        setSelectedDateFrom={setSelectedDateFrom}
                                    />
                                </PanelHeaderOption>
                            </PanelHeaderOptions>
                        }
                        title={<LocalizedString value="CarTrips" />}
                    />
                    <Table
                        instance={tableInstance}
                        isLoading={isLoading}
                        onClickRow={onClickRowCallback}
                        showRowsInCard
                    />
                </Column>
            </Row>
        </>
    );
};

export default CarTripOverview;

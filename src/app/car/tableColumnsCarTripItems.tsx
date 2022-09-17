import { Alignment, IconType, Status, StatusCell, TableColumnActionButtonProps, Theme } from 'faralley-ui-kit';
import { Column, Row } from 'react-table';
import React, { ReactNode } from 'react';
import { CarTripItem } from '../../@types/car/CarTripItem';
import { columnWidths } from '../styles/constants';
import ContentCell from '../components/tableCells/contentCell/ContentCell';
import LocalizedString from '../components/atoms/localizedString/LocalizedString';

export const tableColumnsCarTripItems = (
    theme: Theme,
    onDelete: (carTrip: CarTripItem) => void,
    onEdit: (carTrip: CarTripItem) => void
): Column<CarTripItem>[] => [
    {
        Cell: (): ReactNode => (
            <StatusCell icon={IconType.ROUND_CHECK} iconColor={theme.colorDisabled} status={Status.DISABLED} />
        ),
        accessor: 'TripId',
        disableSortBy: true,
        hasCellPadding: false,
        width: columnWidths.status,
    },
    {
        Cell: ({ value }): ReactNode => <ContentCell value={value} />,
        Header: <LocalizedString value="TripDate" />,
        accessor: 'TripDate',
        width: columnWidths.date,
    },
    {
        Cell: ({ value }): ReactNode => <ContentCell value={value} />,
        Header: <LocalizedString value="Departure" />,
        accessor: 'Departure',
    },
    {
        Cell: ({ value }): ReactNode => <ContentCell value={value} />,
        Header: <LocalizedString value="Destination" />,
        accessor: 'Destination',
    },
    {
        Cell: ({ value }): ReactNode => <ContentCell value={value} />,
        Header: <LocalizedString value="TripGoal" />,
        accessor: 'TripGoal',
    },
    {
        Cell: ({ value }): ReactNode => <ContentCell value={value} />,
        Header: <LocalizedString value="Distance" />,
        accessor: 'Distance',
        width: columnWidths.size120,
    },
    {
        Cell: ({ value }): ReactNode => <ContentCell value={value} />,
        Header: <LocalizedString value="LicensePlate" />,
        accessor: 'LicensePlate',
        width: columnWidths.size120,
    },
    {
        Cell: ({ value }): ReactNode => <ContentCell value={value} />,
        Header: <LocalizedString value="MilageStart" />,
        accessor: 'MilageStart',
        width: columnWidths.size120,
    },
    {
        Cell: (): ReactNode => <div />,
        accessor: 'IsDeleteAllowed',
        actionButtons: ({ original }: Row<CarTripItem>) => {
            const buttonIconProps = [] as TableColumnActionButtonProps<CarTripItem>[];

            if (original.IsEditAllowed) {
                buttonIconProps.push({
                    icon: { iconType: IconType.PENCIL },
                    onClickAction: (event) => {
                        event.stopPropagation();
                        onEdit(original);
                    },
                });
            }

            if (original.IsDeleteAllowed) {
                buttonIconProps.push({
                    icon: { iconType: IconType.TRASHCAN },
                    isRowAction: false,
                    onClickAction: (event) => {
                        event.stopPropagation();
                        onDelete(original);
                    },
                });
            }

            return buttonIconProps;
        },
        align: Alignment.RIGHT,
        disableSortBy: true,
        hasCellPadding: false,
        maxWidth: columnWidths.icon * 2,
    },
];

export default tableColumnsCarTripItems;

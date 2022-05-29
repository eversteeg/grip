import { Alignment, ButtonIcon, IconType, Status, StatusCell, Theme } from 'faralley-ui-kit';
import React, { ReactNode } from 'react';
import { Column } from 'react-table';
import { columnWidths } from '../styles/constants';
import ContentCell from '../components/tableCells/contentCell/ContentCell';
import LocalizedString from '../components/atoms/localizedString/LocalizedString';
import { VATItem } from '../../@types/vat/VATItem';

export const tableColumnsVatItems = (
    theme: Theme,
    onDelete: (vat: VATItem) => void,
    onEdit: (vat: VATItem) => void
): Column<VATItem>[] => [
    {
        Cell: (): ReactNode => (
            <StatusCell icon={IconType.ROUND_CHECK} iconColor={theme.colorDisabled} status={Status.DISABLED} />
        ),
        accessor: 'VATId',
        disableSortBy: true,
        hasCellPadding: false,
        width: columnWidths.status,
    },
    {
        Cell: ({ value }): ReactNode => <ContentCell value={value} />,
        Header: <LocalizedString value="VATDate" />,
        accessor: 'VATDate',
        width: columnWidths.date,
    },
    {
        Cell: ({ value }): ReactNode => <ContentCell value={value} />,
        Header: <LocalizedString value="Type" />,
        accessor: 'VATTypeDescription',
    },
    {
        Cell: ({ value }): ReactNode => <ContentCell value={value} />,
        Header: <LocalizedString value="Description" />,
        accessor: 'Description',
    },
    {
        Cell: ({ value }): ReactNode => <ContentCell isCurrency value={value} />,
        Header: <LocalizedString value="Amount" />,
        accessor: 'Amount',
        width: columnWidths.amount,
    },
    {
        Cell: ({ value }): ReactNode => <ContentCell isCurrency value={value} />,
        Header: <LocalizedString value="AmountVAT" />,
        accessor: 'AmountVAT',
        width: columnWidths.amount,
    },
    {
        Cell: ({ value }): ReactNode => <ContentCell value={value} />,
        Header: <LocalizedString value="Percentage" />,
        accessor: 'VATDescription',
    },
    {
        Cell: ({ value }): ReactNode => <ContentCell value={value} />,
        Header: <LocalizedString value="Organization" />,
        accessor: 'OrganizationName',
    },
    {
        Cell: ({ row }): ReactNode => {
            const buttons = [];

            if (row.original.IsEditAllowed) {
                buttons.push(
                    <ButtonIcon
                        iconType={IconType.PENCIL}
                        key={1}
                        onClick={(event) => {
                            event.stopPropagation();
                            onEdit(row.original);
                        }}
                    />
                );
            }

            if (row.original.IsDeleteAllowed) {
                buttons.push(
                    <ButtonIcon
                        iconType={IconType.TRASHCAN}
                        key={2}
                        onClick={(event) => {
                            event.stopPropagation();
                            onDelete(row.original);
                        }}
                    />
                );
            }

            return buttons;
        },
        accessor: 'IsDeleteAllowed',
        align: Alignment.RIGHT,
        disableSortBy: true,
        hasCellPadding: false,
        maxWidth: columnWidths.icon * 2,
    },
];

export default tableColumnsVatItems;

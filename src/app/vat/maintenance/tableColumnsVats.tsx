import { Alignment, ButtonIcon, IconType, Status, StatusCell, Theme } from 'faralley-ui-kit';
import React, { ReactNode } from 'react';
import { Column } from 'react-table';
import { columnWidths } from '../../styles/constants';
import ContentCell from '../../components/tableCells/contentCell/ContentCell';
import LocalizedString from '../../components/atoms/localizedString/LocalizedString';
import { VAT } from '../../../@types/vat/VAT';

export const tableColumnsVats = (
    theme: Theme,
    onDelete: (vat: VAT) => void,
    onEdit: (vat: VAT) => void
): Column<VAT>[] => [
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
        Header: <LocalizedString value="Percentage" />,
        accessor: 'Percentage',
    },
    {
        Cell: ({ value }): ReactNode => <ContentCell value={value} />,
        Header: <LocalizedString value="Description" />,
        accessor: 'Description',
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

export default tableColumnsVats;

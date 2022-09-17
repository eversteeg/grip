import { Alignment, IconType, Status, StatusCell, TableColumnActionButtonProps, Theme } from 'faralley-ui-kit';
import { Column, Row } from 'react-table';
import React, { ReactNode } from 'react';
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
        Cell: (): ReactNode => <div />,
        accessor: 'IsDeleteAllowed',
        actionButtons: ({ original }: Row<VAT>) => {
            const buttonIconProps = [] as TableColumnActionButtonProps<VAT>[];

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

export default tableColumnsVats;

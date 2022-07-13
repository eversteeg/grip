import { createLocalizedPagingTexts, createLocalizedTableTexts } from '../../../utils/tableFunctions';
import { Table as KTable, Paginator, TableSkeleton } from 'faralley-ui-kit';
import React, { FunctionComponent, ReactNode, SyntheticEvent } from 'react';
import { Row, TableInstance, TableState } from 'react-table';
import { TABLE_DEFAULT_PAGE_SIZE, TABLE_NR_OF_ROWS_SMALL } from '../../../globals/constants';
import { getTranslation } from '../../../utils/translationFunctions';

interface TableProps {
    footer?: ReactNode;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    instance: TableInstance<any>;
    isDisabled?: boolean;
    isLoading?: boolean;
    noResultMessage?: ReactNode;
    numberOfRowsPerTable?: number;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onClickRow?: (event: SyntheticEvent, row: Row<any>, tableState: TableState<any>) => void;
    paginator?: ReactNode;
    showRowsInCard?: boolean;
}

const Table: FunctionComponent<TableProps> = ({
    footer,
    instance,
    isDisabled = false,
    isLoading = false,
    noResultMessage = null,
    numberOfRowsPerTable = TABLE_NR_OF_ROWS_SMALL,
    onClickRow,
    paginator = undefined,
    showRowsInCard = false,
}) => {
    const noResultMessageText = noResultMessage || getTranslation('NoDataKnown');
    const tableTexts = createLocalizedTableTexts();
    const paginatorTexts = createLocalizedPagingTexts();
    const defaultPaginator = <Paginator hasPageSizeSelector={false} instance={instance} texts={paginatorTexts} />;
    const tablePaginator = paginator || (instance.data.length > TABLE_DEFAULT_PAGE_SIZE ? defaultPaginator : undefined);

    return isLoading ? (
        <TableSkeleton numberOfRowsPerTable={numberOfRowsPerTable} showRowsInCard={showRowsInCard} />
    ) : (
        <KTable
            footer={footer}
            instance={instance}
            isDisabled={isDisabled}
            noResults={noResultMessageText}
            onClickRow={onClickRow}
            paginator={tablePaginator}
            texts={tableTexts}
        />
    );
};

export default Table;

import { Table as KTable, TableSkeleton } from 'faralley-ui-kit';
import React, { FunctionComponent, ReactNode, SyntheticEvent } from 'react';
import { Row, TableInstance, TableState } from 'react-table';
import { createLocalizedTableTexts } from '../../../utils/tableFunctions';
import { getTranslation } from '../../../utils/translationFunctions';
import { NR_OF_TABLE_ROWS_SMALL } from '../../../globals/constants';

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
    numberOfRowsPerTable = NR_OF_TABLE_ROWS_SMALL,
    onClickRow,
    paginator = undefined,
    showRowsInCard = false,
}) => {
    const noResultMessageText = noResultMessage || getTranslation('NoDataKnown');
    const tableTexts = createLocalizedTableTexts();

    return isLoading ? (
        <TableSkeleton numberOfRowsPerTable={numberOfRowsPerTable} showRowsInCard={showRowsInCard} />
    ) : (
        <KTable
            footer={footer}
            instance={instance}
            isDisabled={isDisabled}
            noResults={noResultMessageText}
            onClickRow={onClickRow}
            paginator={paginator}
            texts={tableTexts}
        />
    );
};

export default Table;

import { Column, TableInstance, TableState } from 'react-table';
import {
    createTable as createTableFunction,
    Locale,
    PaginatorTexts,
    TableMultiSelectProps,
    TableTexts,
} from 'faralley-ui-kit';
import { getTranslation } from './translationFunctions';
import useSelector from '../state/useSelector';

export const createLocalizedTableTexts = (): TableTexts => ({
    sortByTooltip: getTranslation('Sort'),
});

export const createLocalizedPagingTexts = (): PaginatorTexts => ({
    page: getTranslation('Page'),
    pageGoto: getTranslation('GoToPage'),
    pageOf: getTranslation('Of'),
    resultsOf: getTranslation('ResultsOf'),
    rowsPerPage: getTranslation('RowsPerPage'),
    show: getTranslation('Show'),
});

// eslint-disable-next-line @typescript-eslint/ban-types
export const createTable = <T extends object>(
    columns: Column<T>[],
    data: T[],
    initialState?: Partial<TableState<T>>,
    defaultColumn?: Partial<Column<T>>,
    isMultiSelect = false
): TableInstance<T> => {
    const locale = useSelector(({ language }) => language.locale);

    return createTableFunction<T>(
        columns,
        data,
        initialState,
        defaultColumn,
        locale as Locale,
        {
            isMultiSelect,
            propNameRowSelectAllowed: 'IsRowSelectAllowed',
        } as TableMultiSelectProps
    );
};

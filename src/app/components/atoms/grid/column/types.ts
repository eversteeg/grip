export type ColumnWidth = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface BaseColumnProps {
    hasFullheightContent?: boolean;
    hasGutter?: boolean;
    hasMarginBottom?: boolean;
    huge?: ColumnWidth;
    large?: ColumnWidth;
    medium?: ColumnWidth;
    offsetHuge?: ColumnWidth;
    offsetLarge?: ColumnWidth;
    offsetMedium?: ColumnWidth;
    offsetRoot?: ColumnWidth;
    offsetSmall?: ColumnWidth;
    root?: ColumnWidth;
    small?: ColumnWidth;
}

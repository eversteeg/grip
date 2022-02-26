import React, { FunctionComponent, ReactNode } from 'react';
import { BaseColumnProps } from './types';
import { StyledColumn } from './Column.sc';

interface ColumnProps extends BaseColumnProps {
    children?: ReactNode;
}

const Column: FunctionComponent<ColumnProps> = ({
    children,
    hasFullheightContent,
    hasGutter = true,
    hasMarginBottom = true,
    huge,
    large,
    medium,
    offsetHuge,
    offsetLarge,
    offsetMedium,
    offsetRoot,
    offsetSmall,
    root = 12,
    small,
}) => (
    <StyledColumn
        hasFullheightContent={hasFullheightContent}
        hasGutter={hasGutter}
        hasMarginBottom={hasMarginBottom}
        huge={huge}
        large={large}
        medium={medium}
        offsetHuge={offsetHuge}
        offsetLarge={offsetLarge}
        offsetMedium={offsetMedium}
        offsetRoot={offsetRoot}
        offsetSmall={offsetSmall}
        root={root}
        small={small}
    >
        {children}
    </StyledColumn>
);

export default Column;

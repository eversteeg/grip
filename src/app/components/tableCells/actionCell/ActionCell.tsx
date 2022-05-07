import React, { FunctionComponent, ReactNode } from 'react';
import { StyledCell } from './ActionCell.sc';

interface ActionCellProps {
    children: ReactNode;
}

const ActionCell: FunctionComponent<ActionCellProps> = ({ children }) => <StyledCell>{children}</StyledCell>;

export default ActionCell;

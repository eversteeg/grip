import { AlignItems, JustifyContent } from './types';
import React, { Children, cloneElement, FunctionComponent, isValidElement, ReactNode } from 'react';
import { StyledRow } from './Row.sc';

interface RowProps {
    alignItems?: AlignItems;
    children: ReactNode;
    hasGutter?: boolean;
    hasHorizontalCorrection?: boolean;
    hasMaxWidth?: boolean;
    justifyContent?: JustifyContent;
}

const Row: FunctionComponent<RowProps> = ({
    alignItems = AlignItems['flex-start'],
    children,
    hasGutter = true,
    hasHorizontalCorrection = false,
    hasMaxWidth = false,
    justifyContent = JustifyContent['flex-start'],
}) => (
    <StyledRow
        alignItems={alignItems}
        hasGutter={hasHorizontalCorrection ? false : hasGutter}
        hasHorizontalCorrection={hasHorizontalCorrection}
        hasMaxWidth={hasMaxWidth}
        justifyContent={justifyContent}
    >
        {Children.map(children, (child) =>
            isValidElement(child)
                ? cloneElement(child, {
                      hasFullheightContent: alignItems === AlignItems.stretch,
                  })
                : child
        )}
    </StyledRow>
);

export default Row;

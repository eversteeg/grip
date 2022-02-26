import { AlignItems, JustifyContent } from './types';
import styled, { css, SimpleInterpolation } from 'styled-components';
import { maxWidthDetail } from '../../../../styles/constants';

interface StyledRowProps {
    alignItems: AlignItems;
    hasGutter: boolean;
    hasHorizontalCorrection: boolean;
    hasMaxWidth: boolean;
    justifyContent: JustifyContent;
}

export const StyledRow = styled.div<StyledRowProps>`
    display: flex;
    flex-wrap: wrap;
    align-items: ${({ alignItems }): string => alignItems};
    justify-content: ${({ justifyContent }): string => justifyContent};
    width: 100%;

    ${({ hasGutter }): SimpleInterpolation =>
        hasGutter &&
        css`
            padding: 0 8px;
        `}

    ${({ hasHorizontalCorrection }): SimpleInterpolation =>
        hasHorizontalCorrection &&
        css`
            margin: 0 -8px;
            width: calc(100% + 16px);
        `}

    ${({ hasMaxWidth }): SimpleInterpolation =>
        hasMaxWidth &&
        css`
            max-width: ${maxWidthDetail}px;
        `}
`;

export default StyledRow;

import { BaseColumnProps, ColumnWidth } from './types';
import styled, { css, FlattenSimpleInterpolation, SimpleInterpolation } from 'styled-components';
import { customMedia } from '../../../../styles/constants';

const getColumnWidth = (ratio: ColumnWidth): FlattenSimpleInterpolation => css`
    width: ${(100 / 12) * ratio}%;
`;

const getColumnOffset = (offset: ColumnWidth): FlattenSimpleInterpolation => css`
    margin-left: ${(100 / 12) * offset}%;
`;

interface StyledColumnProps extends BaseColumnProps {
    hasGutter: boolean;
    hasMarginBottom: boolean;
    root: ColumnWidth;
}

export const StyledColumn = styled.div<StyledColumnProps>`
    ${({ root }): ReturnType<typeof getColumnWidth> => getColumnWidth(root)}
    ${({ offsetRoot }): SimpleInterpolation => offsetRoot && getColumnOffset(offsetRoot)}
    flex: 0 1 auto;

    ${({ hasFullheightContent }): SimpleInterpolation =>
        hasFullheightContent &&
        css`
            display: flex;
            align-items: stretch;
        `}

    ${({ hasGutter }): SimpleInterpolation =>
        hasGutter &&
        css`
            padding: 0 8px;
        `}

    ${({ hasMarginBottom }): SimpleInterpolation =>
        hasMarginBottom &&
        css`
            margin: 0 0 24px;
        `}

    ${customMedia.greaterThan<StyledColumnProps>('small')`
        ${({ small }): SimpleInterpolation => small && getColumnWidth(small)}
        ${({ offsetSmall }): SimpleInterpolation => offsetSmall && getColumnOffset(offsetSmall)}
    `}

    ${customMedia.greaterThan<StyledColumnProps>('medium')`
        ${({ medium }): SimpleInterpolation => medium && getColumnWidth(medium)}
        ${({ offsetMedium }): SimpleInterpolation => offsetMedium && getColumnOffset(offsetMedium)}
    `}

    ${customMedia.greaterThan<StyledColumnProps>('large')`
        ${({ large }): SimpleInterpolation => large && getColumnWidth(large)}
        ${({ offsetLarge }): SimpleInterpolation => offsetLarge && getColumnOffset(offsetLarge)}
    `}

    ${customMedia.greaterThan<StyledColumnProps>('huge')`
        ${({ huge }): SimpleInterpolation => huge && getColumnWidth(huge)}
        ${({ offsetHuge }): SimpleInterpolation => offsetHuge && getColumnOffset(offsetHuge)}
    `}
`;

export default StyledColumn;

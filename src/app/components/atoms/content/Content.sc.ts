/* eslint-disable import/prefer-default-export */
import { maxWidth, maxWidthDetail } from '../../../styles/constants';
import { ContentWidth } from '../../../../@types/Route';
import styled from 'styled-components';

interface StyledContentProps {
    contentWidth: ContentWidth;
}

export const StyledContent = styled.div<StyledContentProps>`
    margin: auto;
    max-width: ${({ contentWidth }): string =>
        contentWidth === ContentWidth.DETAIL ? `${maxWidthDetail}px` : `${maxWidth}px`};
`;

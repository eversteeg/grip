import { customMedia, ZIndex } from '../../../../styles/constants';
import { getGenericHeaderCss } from '../../../../styles/mixins/getGenericHeaderCss';
import styled from 'styled-components';

interface StyledHeaderProps {
    isSidePanel?: boolean;
    isSidebarVisible: boolean;
}

export const StyledHeader = styled.div<StyledHeaderProps>`
    ${({ isSidebarVisible, isSidePanel }) => getGenericHeaderCss(isSidebarVisible, isSidePanel, 0, ZIndex.header)}

    ${customMedia.greaterThan<StyledHeaderProps>('large')`
        > div > div:first-child button:first-child {
            display: ${({ isSidebarVisible }): string => (isSidebarVisible ? 'none' : 'flex')};
        }
    `}
`;

export const HeaderButtonWrapper = styled.div`
    margin: 0 8px;
`;

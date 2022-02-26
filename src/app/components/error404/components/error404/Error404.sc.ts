import { filterBarHeight } from '../../../../styles/constants';
import styled from 'styled-components';

interface StyledError404Props {
    isLoggedIn: boolean;
}

export const StyledError404 = styled.div<StyledError404Props>`
    display: flex;
    align-items: center;
    margin: ${({ isLoggedIn }): number => (isLoggedIn ? filterBarHeight * 2 : filterBarHeight)}px auto 0;
    max-width: 304px;
`;

export default StyledError404;

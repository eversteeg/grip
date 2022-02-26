import { Elevation, getElevation } from 'faralley-ui-kit';
import { sideBarWidth, ZIndex } from '../../../styles/constants';
import styled from 'styled-components';

interface SidebarProps {
    isVisible: boolean;
}

export const StyledSidebar = styled.div<SidebarProps>`
    ${getElevation(Elevation.LEVEL_1)}
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    flex-direction: column;
    flex-wrap: nowrap;
    transform: ${({ isVisible }): string => `translate3d(${isVisible ? 0 : '-100%'}, 0, 0)`};
    transition: transform 300ms ease;
    z-index: ${ZIndex.sidebar};
    background-color: ${({ theme }): string => theme.background.secondary};
    width: ${sideBarWidth}px;
    height: 100vh;
`;

export const ButtonClose = styled.div`
    position: absolute;
    top: 8px;
    left: 16px;
`;

export const Logo = styled.div`
    display: flex;
    flex: 0 1 auto;
    align-items: center;
    margin: 32px auto 24px;
    width: 120px;
    min-height: 120px;

    img {
        display: block;
        width: 100%;
    }

    button {
        display: block;
        cursor: pointer;
        color: ${({ theme }): string => theme.colorSecondary};
        font-size: 120px;
    }

    button > span {
        font-size: 120px;
    }
`;

export const MenuWrapper = styled.div`
    flex: 1 1 auto;
    overflow: auto;
`;

export const LogoWrapper = styled.div`
    border-top: 1px solid ${({ theme }): string => theme.shades.seven};
    padding: 16px 0;

    svg {
        margin: 0 auto;
        width: 196px;
    }
`;

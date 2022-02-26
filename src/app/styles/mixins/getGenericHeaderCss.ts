import { css, FlattenSimpleInterpolation } from 'styled-components';
import { customMedia, menuBarHeight, sideBarWidth, ZIndex } from '../constants';

export const getPosition = (isSidePanel: boolean): string => {
    if (isSidePanel) {
        return 'static';
    }

    return 'fixed';
};

export const getGenericHeaderCss = (
    isSidebarVisible: boolean,
    isSidePanel = false,
    topCorrection = menuBarHeight,
    zIndex = ZIndex.filterBar
): FlattenSimpleInterpolation => css`
    position: ${getPosition(isSidePanel)};
    top: ${topCorrection || 0}px;
    right: 0;
    left: 0;
    transition: all 300ms ease-out;
    z-index: ${zIndex};
    width: 100%;

    ${customMedia.greaterThan('large')`
        left: ${!isSidePanel && isSidebarVisible ? sideBarWidth : 0}px;
        width: ${!isSidePanel && isSidebarVisible ? `calc(100% - ${sideBarWidth}px)` : '100%'};
    `}
`;

export default getGenericHeaderCss;

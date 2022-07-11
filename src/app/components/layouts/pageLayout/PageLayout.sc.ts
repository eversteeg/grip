/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { customMedia, menuBarHeight, pageLayout, sideBarWidth, ZIndex } from '../../../styles/constants';
import styled, { css, SimpleInterpolation } from 'styled-components';
import { isEmpty } from 'faralley-ui-kit';

interface StyledPageLayoutProps {
    blockScrolling: boolean;
    hasRightCorrection: boolean;
    top: number;
}

export const StyledPageLayout = styled.div<StyledPageLayoutProps>`
    box-sizing: border-box;
    ${({ blockScrolling, top }): SimpleInterpolation =>
        blockScrolling &&
        css`
            position: fixed;
            top: -${top}px;

            width: 100%;
            overflow-y: hidden;
        `}

    /* correction when the scrollbar disappears */
    ${({ hasRightCorrection }): SimpleInterpolation =>
        hasRightCorrection &&
        css`
            padding-right: 17px;
        `}
`;

interface OverlayWrapperProps {
    isSidePanelType: boolean;
}

export const OverlayWrapper = styled.div<OverlayWrapperProps>`
    position: relative;
    z-index: ${ZIndex.overlayWrapper};
    ${customMedia.greaterThan('large')`
        display: none;
    `}
`;

interface ContentWrapperProps {
    isSidebarVisible: boolean;
    topCorrection: number;
}

export const ContentWrapper = styled.div<ContentWrapperProps>`
    position: relative;
    transition: margin 300ms ease;
    z-index: ${ZIndex.content};
    /* stylelint-disable */
    padding: ${({ topCorrection }): string =>
        `${topCorrection + menuBarHeight + pageLayout.topPadding}px ${pageLayout.sidePaddingSmall}px ${
            pageLayout.bottomPadding
        }px ${pageLayout.sidePaddingSmall}px`};
    /* stylelint-enable */
    line-height: 1.25;

    /* @TODO add correction when scrollbar disapear on dialog open */
    ${customMedia.greaterThan('small')`
        padding-right: ${pageLayout.sidePaddingMedium}px;
        padding-left: ${pageLayout.sidePaddingMedium}px;
    `}

    ${customMedia.greaterThan<ContentWrapperProps>('large')`
        margin-left: ${({ isSidebarVisible }): string => (isSidebarVisible ? `${sideBarWidth}px` : '0px')};
        padding-right:${pageLayout.sidePaddingLarge}px;
        padding-left: ${pageLayout.sidePaddingLarge}px;
    `}
`;

interface ModalWrapperProps {
    maxBodyHeight: string | undefined;
}

export const ModalWrapper = styled.div<ModalWrapperProps>`
    ${({ maxBodyHeight }): SimpleInterpolation =>
        !isEmpty(maxBodyHeight) &&
        css`
            div:nth-child(2) {
                max-height: ${maxBodyHeight};
            }
        `}
`;

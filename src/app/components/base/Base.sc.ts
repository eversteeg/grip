import styled, { css, SimpleInterpolation } from 'styled-components';

interface ContentProps {
    hasPaddingBottom: boolean;
    hasPaddingSide: boolean;
    hasPaddingTop: boolean;
    hasSmallPadding: boolean;
}

export const Content = styled.div<ContentProps>`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 100%;

    ${({ hasPaddingSide, hasSmallPadding }): SimpleInterpolation =>
        hasPaddingSide &&
        css`
            padding: 0 ${hasSmallPadding ? '12px' : '24px'};
        `}

    ${({ hasPaddingBottom, hasSmallPadding }): SimpleInterpolation =>
        hasPaddingBottom &&
        css`
            padding-bottom: ${hasSmallPadding ? '12px' : '24px'};
        `}

    ${({ hasPaddingTop, hasSmallPadding }): SimpleInterpolation =>
        hasPaddingTop &&
        css`
            padding-top: ${hasSmallPadding ? '12px' : '24px'};
        `}
`;

export const Buttons = styled.div`
    display: flex;
    justify-content: center;
    margin: auto 0 24px;
`;

interface ButtonWrapperProps {
    isFullWidth: boolean;
    isLoading: boolean;
}

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
    margin: auto 6px;
    padding: 0 6px;
    text-align: center;

    ${({ isFullWidth }): SimpleInterpolation =>
        isFullWidth &&
        css`
            margin: auto;
            padding: 0;
            width: 100%;
        `}

    ${({ isLoading }): SimpleInterpolation =>
        isLoading &&
        css`
            border-radius: 24px;
            min-width: 120px;
            overflow: hidden;
            font-size: 48px;
        `}
`;

export const LinkWrapper = styled.div`
    margin: 0 0 24px;
    text-align: center;
`;

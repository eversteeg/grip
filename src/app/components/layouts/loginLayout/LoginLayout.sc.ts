import styled, { css, SimpleInterpolation } from 'styled-components';
import { ContentWidth } from '../../../../@types/Route';

interface StyledLoginLayoutProps {
    variant: number;
}

export const StyledLoginLayout = styled.div<StyledLoginLayoutProps>`
    display: flex;
    flex-direction: column;
    background-attachment: fixed;
    background-position: top left, bottom right;
    background-repeat: no-repeat;
    background-size: 40%;
    min-height: 100vh;

    ${({ variant }): SimpleInterpolation =>
        variant &&
        css`
            background-image: url('/assets/images/backgrounds/${variant}.1.svg'),
                url('/assets/images/backgrounds/${variant}.2.svg');
        `}
`;

export const Header = styled.div`
    display: flex;
    flex: 0 1 auto;
    flex-wrap: nowrap;
    align-items: center;
    margin: 0 0 80px;
    padding: 16px 24px 0;
`;

export const TextLinkWrapper = styled.div`
    flex: 0 0 auto;
    margin: 0 auto 0 0;
`;

export const LogoWrapper = styled.div`
    display: flex;
    flex: 0 1 auto;
    justify-content: center;
    margin: 0 auto 80px;
    width: 280px;
`;

interface ContentProps {
    contentWidth?: ContentWidth;
}

export const Content = styled.div<ContentProps>`
    flex: 0 1 auto;
    margin: 0 auto;
    padding: 0 0 80px;
    width: ${({ contentWidth }): string => (contentWidth && contentWidth === ContentWidth.FULL ? '100%' : '304px')};
`;

export const Info = styled.div`
    ${({ theme }): string => theme.textStyling(theme.availableTextStyles().caption)}
    display: flex;
    justify-content: space-between;
    margin: auto 24px 24px;
    color: ${({ theme }): string => theme.colorText.primary};
`;

export const ReCaptchaText = styled.p`
    a {
        color: ${({ theme }): string => theme.colorText.secondary};
    }
`;

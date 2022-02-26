import styled, { css } from 'styled-components';
import { menuBarHeight } from '../../../../styles/constants';

export const StyledButtonBar = styled.div`
    display: flex;
    flex: 0 0 auto;
    flex-wrap: nowrap;
    border-top: 1px solid ${({ theme }): string => theme.shades.seven};
`;

const ButtonStyles = css`
    ${({ theme }): string => theme.textStyling(theme.availableTextStyles().caption)}
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 4px;
    width: calc(100% / 3);
    min-height: ${menuBarHeight}px;
    text-align: center;
    color: ${({ theme }): string => theme.colorText.primary};

    &:hover {
        background-color: ${({ theme }): string => theme.background.primary};
    }
`;

export const Button = styled.button`
    ${ButtonStyles}
    border-right: 1px solid ${({ theme }): string => theme.shades.seven};
`;

export const ButtonLink = styled.a`
    ${ButtonStyles}
`;

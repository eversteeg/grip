import styled, { css, SimpleInterpolation } from 'styled-components';

interface StyledTitleProps {
    hasNoMargin: boolean;
    isDisabled: boolean;
}

export const StyledTitle = styled.p<StyledTitleProps>`
    ${({ theme }): string => theme.textStyling(theme.availableTextStyles().h2)}
    min-width: 74%;
    text-align: center;
    color: ${({ isDisabled, theme }): SimpleInterpolation => (isDisabled ? theme.colorDisabled : theme.shades.three)};

    ${({ hasNoMargin }): SimpleInterpolation =>
        !hasNoMargin &&
        css`
            margin: 0 0 8px;
        `}
`;

export default StyledTitle;

import styled, { css, SimpleInterpolation } from 'styled-components';

export interface ViolationListProps {
    isError: boolean;
}

export const ViolationList = styled.div<ViolationListProps>`
    ul {
        margin: 14px 0;
        list-style-type: none;

        &:last-child {
            margin-bottom: 0;
        }

        li {
            position: relative;
            margin: 10px 0;
            padding-left: 10px;

            &::before {
                position: absolute;
                left: 0;
                content: '- ';
            }
        }
    }

    ${({ isError, theme }): SimpleInterpolation =>
        isError &&
        css`
            ${theme.textStyling('caption')}
            color: ${theme.colorInvalid};
        `}
`;

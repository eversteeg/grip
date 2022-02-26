import styled from 'styled-components';

export const StyledTermsOfUse = styled.div`
    ${({ theme }): string => theme.textStyling('body2')}
    margin: 0 0 16px;
    text-align: center;
    color: ${({ theme }): string => theme.colorTextBody.primary};

    a {
        text-decoration: underline;

        &:hover {
            color: ${({ theme }): string => theme.colorSecondary};
        }
    }
`;

export default StyledTermsOfUse;

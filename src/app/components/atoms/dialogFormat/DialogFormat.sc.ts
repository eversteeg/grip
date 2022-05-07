import styled from 'styled-components';

export const DialogFormElementWrapper = styled.div`
    margin: 0 0 16px;
`;

export const SelectionControlWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 16px 0;
`;

export const DialogInfoText = styled.div`
    ${({ theme }): string => theme.textStyling(theme.availableTextStyles().body2)}
    color: ${({ theme }): string => theme.shades.three};
`;

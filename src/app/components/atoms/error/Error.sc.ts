import { getStatusIndicator, Status } from 'faralley-ui-kit';
import styled from 'styled-components';

export const StyledError = styled.div`
    ${({ theme }): string =>
        getStatusIndicator({
            status: Status.INVALID,
            theme,
        })}
    ${({ theme }): string => theme.textStyling('caption')}
    padding: 8px 16px;
    color: ${({ theme }): string => theme.colorInvalid};
`;

export default StyledError;

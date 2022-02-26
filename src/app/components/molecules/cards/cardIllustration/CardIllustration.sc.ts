import styled from 'styled-components';
import Text from '../../../text/Text';
import Title from '../../../title/Title';

export const StyledText = styled(Text)`
    color: ${({ theme }): string => theme.shades.one};
`;

export const StyledTitle = styled(Title)`
    color: ${({ theme }): string => theme.colorPrimary};
`;

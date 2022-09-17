import React, { FunctionComponent } from 'react';
import { getTranslation } from '../../../utils/translationFunctions';
import styled from 'styled-components';
import Text from '../../../components/text/Text';
import Title from '../../../components/title/Title';
import useSelector from '../../../state/useSelector';

export const StyledText = styled(Text)`
    color: ${({ theme }): string => theme.shades.one};
`;

export const StyledTitle = styled(Title)`
    color: ${({ theme }): string => theme.colorPrimary};
`;

const ConstructVATHtml: FunctionComponent = () => {
    const locale = useSelector(({ language }) => language.locale);
    // eslint-disable-next-line no-console
    console.log('locale', locale);

    return (
        <>
            <StyledTitle value={getTranslation('Add')} />
        </>
    );
};

export default ConstructVATHtml;

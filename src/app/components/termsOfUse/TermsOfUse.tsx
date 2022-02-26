import React, { FunctionComponent } from 'react';
import LocalizedString from '../atoms/localizedString/LocalizedString';
import { Skeleton } from 'faralley-ui-kit';
import { StyledTermsOfUse } from './TermsOfUse.sc';
import useSelector from '../../state/useSelector';

export interface TermsOfUseProps {
    isLoading: boolean;
}

const TermsOfUse: FunctionComponent<TermsOfUseProps> = ({ isLoading }) => {
    const locale = useSelector(({ language }) => language.locale);

    return (
        <StyledTermsOfUse>
            {isLoading ? (
                <Skeleton count={2} />
            ) : (
                <LocalizedString
                    value="TermsOfUse"
                    variables={{
                        url: `https://purl.sportlink.nl/${locale.toLocaleLowerCase()}/voorwaarden/club`,
                    }}
                />
            )}
        </StyledTermsOfUse>
    );
};

export default TermsOfUse;

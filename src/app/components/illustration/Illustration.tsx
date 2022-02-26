import React, { FunctionComponent } from 'react';
import { SkeletonWrapper, StyledIllustration } from './Illustration.sc';
import SVG, { SVGProps } from '../atoms/svg/SVG';
import { Skeleton } from 'faralley-ui-kit';

export interface IllustrationProps {
    isLoading?: boolean;
    type: SVGProps['type'];
}

const Illustration: FunctionComponent<IllustrationProps> = ({ isLoading, type }) => (
    <StyledIllustration>
        {isLoading ? (
            <SkeletonWrapper>
                <Skeleton />
            </SkeletonWrapper>
        ) : (
            <SVG type={type} />
        )}
    </StyledIllustration>
);

export default Illustration;

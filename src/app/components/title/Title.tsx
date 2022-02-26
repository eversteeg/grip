import React, { FunctionComponent, ReactNode } from 'react';
import { Skeleton } from 'faralley-ui-kit';
import { StyledTitle } from './Title.sc';

export interface TitleProps {
    className?: string;
    hasNoMargin?: boolean;
    isDisabled?: boolean;
    isLoading?: boolean;
    value: ReactNode;
}

const Title: FunctionComponent<TitleProps> = ({
    className,
    hasNoMargin = false,
    isDisabled = false,
    isLoading = false,
    value,
}) => (
    <StyledTitle className={className} hasNoMargin={hasNoMargin} isDisabled={isDisabled}>
        {isLoading ? <Skeleton /> : value}
    </StyledTitle>
);

export default Title;

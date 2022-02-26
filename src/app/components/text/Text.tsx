import React, { FunctionComponent, ReactNode } from 'react';
import { Skeleton } from 'faralley-ui-kit';
import { StyledText } from './Text.sc';

export interface TextProps {
    className?: string;
    isLoading?: boolean;
    value: ReactNode;
}

const Text: FunctionComponent<TextProps> = ({ className, isLoading = false, value }) => (
    <StyledText className={className}>{isLoading ? <Skeleton count={3} /> : value}</StyledText>
);

export default Text;

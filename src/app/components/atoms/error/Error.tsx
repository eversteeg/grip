import React, { FunctionComponent, ReactNode } from 'react';
import { StyledError } from './Error.sc';

export interface ErrorProps {
    children: ReactNode;
}

const Error: FunctionComponent<ErrorProps> = ({ children }) => <StyledError>{children}</StyledError>;

export default Error;

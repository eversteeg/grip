import React, { FunctionComponent, ReactNode } from 'react';
import { ContentWidth } from '../../../../@types/Route';
import { StyledContent } from './Content.sc';

interface ContentProps {
    children?: ReactNode;
    contentWidth?: ContentWidth;
    id?: string;
}

const Content: FunctionComponent<ContentProps> = ({
    children,
    contentWidth = ContentWidth.DEFAULT,
    id = 'content',
}) => (
    <StyledContent contentWidth={contentWidth} id={id}>
        {children}
    </StyledContent>
);

export default Content;

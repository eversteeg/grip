import React, { FunctionComponent, useContext } from 'react';
import { IconType } from 'faralley-ui-kit';
import { ThemeContext } from 'styled-components';

interface HtmlForPDFRendererProps {
    columns: unknown[];
    data: unknown[];
    icon: IconType;
    title: string;
}

const HtmlForPDFRenderer: FunctionComponent<HtmlForPDFRendererProps> = ({ columns, data, icon, title }) => {
    const theme = useContext(ThemeContext);

    console.log(theme);
    console.log(columns, data, icon, title);

    return <div />;
};

export default HtmlForPDFRenderer;

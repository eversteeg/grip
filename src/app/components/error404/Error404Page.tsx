import { Column, Row } from '../atoms/grid/Grid';
import React, { FunctionComponent } from 'react';
import Error404 from './components/error404/Error404';

const Error404Page: FunctionComponent = () => (
    <Row>
        <Column>
            <Error404 />
        </Column>
    </Row>
);

export default Error404Page;

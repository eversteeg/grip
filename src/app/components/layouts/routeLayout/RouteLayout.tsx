/* eslint-disable react/jsx-props-no-spreading */
import React, { FunctionComponent, ReactNode } from 'react';
import { isPathFound } from '../../../routing/helpers';
import LoginLayout from '../loginLayout/LoginLayout';
import PageLayout from '../pageLayout/PageLayout';
import { PrivateRoute } from '../../../../@types/PrivateRoute';
import { Route } from '../../../../@types/Route';

interface RouteLayoutProps {
    activeRoute: PrivateRoute | Route | undefined;
    children: ReactNode;
    isLoggedIn: boolean;
    pathname: string;
    privatePaths: string[];
}

const RouteLayout: FunctionComponent<RouteLayoutProps> = ({
    activeRoute,
    children,
    isLoggedIn,
    pathname,
    privatePaths,
}) => {
    let Layout;
    let props: Route['layoutProps'] = {};

    if (activeRoute) {
        if (isPathFound(privatePaths, pathname)) {
            Layout = PageLayout;
        } else {
            Layout = LoginLayout;
        }

        if ('layoutProps' in activeRoute) {
            props = {
                ...activeRoute.layoutProps,
            };
        }
    } else if (isLoggedIn) {
        Layout = PageLayout;
    } else {
        Layout = LoginLayout;
    }

    return <Layout {...props}>{children}</Layout>;
};

export default RouteLayout;

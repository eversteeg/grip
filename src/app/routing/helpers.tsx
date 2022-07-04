import { Route as BrowserRoute, useLocation } from 'react-router-dom';
import { ContentWidth, Route } from '../../@types/Route';
import LocalizedString, { LocalizedStringProps } from '../components/atoms/localizedString/LocalizedString';
import { NestedPrivateRouteChild, PrivateRoute } from '../../@types/PrivateRoute';
import React, { ReactNode } from 'react';
import CarTripOverview from '../car/CarTripOverview';
import { IconType } from 'faralley-ui-kit';
import { isNestedPrivateRoute } from '../utils/typeGuards/isNestedPrivateRoute';
import LoginPage from '../user/login/LoginPage';
import OrganizationDetailsPage from '../organization/organizationDetails/OrganizationDetailsPage';
import PasswordRequestPage from '../user/passwordRequest/PasswordRequestPage';
import PasswordResetPage from '../user/passwordReset/PasswordResetPage';
import { ROUTES } from './routeDefinitions';
import SettingsPage from '../user/settings/SettingsPage';
import { Translations } from '../state/language/types';
import UnsupportedAlert from '../user/login/unsupportedAlert/UnsupportedAlert';
import VATMaintenance from '../vat/maintenance/VATMaintenance';
import VATOverview from '../vat/VATOverview';

export const getPrivateRoutes = (): {
    privatePaths: string[];
    privateRoutes: PrivateRoute[];
} => {
    const carRoutes: PrivateRoute[] = [
        {
            component: <CarTripOverview />,
            exact: true,
            iconType: IconType.CAR,
            layoutProps: { contentWidth: ContentWidth.DETAIL },
            path: ROUTES.car.tripOverview,
            text: 'CarTripOverview',
        },
    ];

    const maintenanceRoutes: PrivateRoute[] = [
        {
            children: [
                {
                    component: <VATMaintenance />,
                    exact: true,
                    layoutProps: { contentWidth: ContentWidth.DETAIL },
                    metaDescription: 'VAT',
                    path: ROUTES.maintenance.vatMaintenance,
                    text: 'VAT',
                },
            ],
            exact: true,
            iconType: IconType.GEAR,
            path: ROUTES.maintenance.root,
            text: 'Maintenance',
        },
    ];

    const organizationRoutes: PrivateRoute[] = [
        {
            component: <OrganizationDetailsPage />,
            exact: true,
            iconType: IconType.OFFICE, // This is required by the interface (and makes sense), so this is here to satisfy that
            isVisibleInMenu: false,
            layoutProps: { contentWidth: ContentWidth.DETAIL },
            path: ROUTES.organization.organizationDetails,
            text: 'OrganizationDetails',
        },
    ];

    const vatRoutes: PrivateRoute[] = [
        {
            component: <VATOverview />,
            exact: true,
            iconType: IconType.MONEY,
            layoutProps: { contentWidth: ContentWidth.DETAIL },
            path: ROUTES.vat.vatOverview,
            text: 'VAT',
        },
    ];

    // Construct the actual routes in correct order
    const privateRoutes: PrivateRoute[] = [
        {
            component: <SettingsPage />,
            exact: true,
            iconType: IconType.GEAR,
            isVisibleInMenu: false,
            layoutProps: { contentWidth: ContentWidth.DETAIL },
            path: ROUTES.global.settings,
            text: 'Settings',
        },
        ...carRoutes,
        ...vatRoutes,
        ...organizationRoutes,
        ...maintenanceRoutes,
    ];

    const privatePaths: string[] = [];

    privateRoutes.forEach((privateRoute) => {
        privatePaths.push(privateRoute.path);

        if (isNestedPrivateRoute(privateRoute)) {
            privateRoute.children.forEach(({ path }) => {
                privatePaths.push(path);
            });
        }
    });

    return {
        privatePaths,
        privateRoutes,
    };
};

export const getNonPrivateRoutes = (): {
    publicPaths: string[];
    publicRoutes: Route[];
} => {
    const publicRoutes: Route[] = [
        {
            component: <LoginPage />,
            exact: true,
            path: ROUTES.login.root,
        },
        {
            component: <PasswordRequestPage />,
            exact: true,
            path: ROUTES.login.passwordRequest,
        },
        {
            component: <PasswordResetPage />,
            exact: true,
            path: ROUTES.login.passwordReset,
        },
        {
            component: <UnsupportedAlert />,
            exact: true,
            path: ROUTES.login.unsupportedAlert,
        },
    ];

    const publicPaths = publicRoutes.map(({ path }) => path);

    return {
        publicPaths,
        publicRoutes,
    };
};

export const getRouteText = (isOnOrganizationDetailsRoute: boolean): ReactNode => {
    let { pathname } = useLocation();

    const organizationName = '';
    // const organizationName = useSelector(({ organizationDetails }) => organizationDetails.organizationHeader.Name);
    const flattenedPrivateRoutes: (NestedPrivateRouteChild | PrivateRoute)[] = [];
    let value: keyof Translations = 'Error404';
    const variables: LocalizedStringProps['variables'] = {};

    if (pathname.endsWith('/')) {
        pathname = pathname.slice(0, -1);
    }

    getPrivateRoutes().privateRoutes.forEach((privateRoute) => {
        flattenedPrivateRoutes.push(privateRoute);

        if (isNestedPrivateRoute(privateRoute)) {
            flattenedPrivateRoutes.push(...privateRoute.children);
        }
    });

    const activeRoute = flattenedPrivateRoutes.find((privateRoute) => privateRoute.path === pathname);

    if (activeRoute) {
        value = activeRoute.text;
    }

    if (isOnOrganizationDetailsRoute) {
        value = 'OrganizationDetails';
        variables.name = organizationName || '';
    }

    return <LocalizedString value={value} variables={variables} />;
};

export const renderRoutes = (routes: PrivateRoute[] | Route[]): JSX.Element[] => {
    const routesArray: JSX.Element[] = [];

    routes.forEach((route: PrivateRoute | Route) => {
        if (isNestedPrivateRoute(route)) {
            route.children.forEach(({ component, exact, path }) => {
                routesArray.push(
                    <BrowserRoute exact={exact} key={path} path={path}>
                        {component}
                    </BrowserRoute>
                );
            });
        } else {
            routesArray.push(
                <BrowserRoute exact={route.exact} key={route.path} path={route.path}>
                    {route.component}
                </BrowserRoute>
            );
        }
    });

    return routesArray;
};

export const isPathMatching = (path: string, currentPath: string): boolean =>
    path.includes('/:') && currentPath.includes(path.split('/:')[0]);

export const getActiveRoute = (
    routes: Array<PrivateRoute | Route>,
    pathname: string
): PrivateRoute | Route | undefined => {
    let activeRoute;

    // break loop when active route is found.
    // eslint-disable-next-line consistent-return
    routes.forEach((route) => {
        if (route.path === pathname) {
            activeRoute = route;

            return false;
        }

        // if not exact route AND it has layoutProps, check route with parameters
        // Necessary for contentWidth passing. Only usecase so far is for Generic where menu item Teams is clickable and has a hidden details url
        // That hidden url never shows up without this part and than the layoutProps are lost
        // So for now, making this very specific with the least change of breaking things
        if (route.layoutProps && isPathMatching(route.path, pathname)) {
            activeRoute = route;

            return false;
        }

        if ('children' in route) {
            // first check exact route
            let foundRoute = route.children.find(({ path }) => path === pathname);

            if (foundRoute !== undefined) {
                activeRoute = foundRoute;

                return false;
            }

            // if not exact route, check route with parameters
            foundRoute = route.children.find(({ path }) => isPathMatching(path, pathname));

            if (foundRoute !== undefined) {
                activeRoute = foundRoute;

                return false;
            }
        }
    });

    return activeRoute;
};

export const isPathFound = (paths: Array<string>, pathname: string): boolean =>
    paths.some((path) => path === pathname || isPathMatching(path, pathname));

import { Route as BrowserRoute, Prompt, Redirect, Switch, useLocation } from 'react-router-dom';
import { getActiveRoute, getNonPrivateRoutes, getPrivateRoutes, renderRoutes } from './helpers';
import React, { FunctionComponent, useCallback, useEffect, useMemo, useState } from 'react';
import { shallowEqual, useDispatch } from 'react-redux';
import { ActiveRoute } from '../state/global/types';
import DialogUnsavedChanges from '../components/molecules/dialogs/dialogUnsavedChanges/DialogUnsavedChanges';
import Error404Page from '../components/error404/Error404Page';
import RouteLayout from '../components/layouts/routeLayout/RouteLayout';
import { ROUTES } from './routeDefinitions';
import { setActiveRoute } from '../state/global/actions';
import { unsupportedWidth } from '../styles/constants';
import useSelector from '../state/useSelector';

const Routes: FunctionComponent = () => {
    const dispatch = useDispatch();
    const { isAuthenticated, isLoggedIn } = useSelector(({ user }) => user, shallowEqual);
    const { pathname } = useLocation();

    const { privatePaths, privateRoutes } = useMemo(() => getPrivateRoutes(), []);

    const isUnsupported = window.innerWidth < unsupportedWidth;
    const hasUnsavedChanges = useSelector(({ sharedNavigationInfo }) => sharedNavigationInfo.hasUnsavedChanges);
    const [isUnsavedChangesDialogVisible, setIsUnsavedChangesDialogVisible] = useState(false);
    const [nextPage, setNextPage] = useState('');

    const { publicPaths, publicRoutes } = useMemo(() => getNonPrivateRoutes(), []);

    const onHasUnsavedChangesCallback = useCallback(
        (location: unknown): string | boolean => {
            setNextPage((location as Location).pathname);
            setIsUnsavedChangesDialogVisible(hasUnsavedChanges);

            return false;
        },
        [hasUnsavedChanges]
    );

    const onHasUnsavedChangesDialogConfirmCallback = useCallback(() => {
        setIsUnsavedChangesDialogVisible(false);
    }, []);

    const onHasUnsavedChangesDialogCancelCallback = useCallback(() => {
        setIsUnsavedChangesDialogVisible(false);
    }, []);

    useEffect(() => {
        if (pathname === '/login' || pathname === '/login/club-selection') {
            dispatch(
                setActiveRoute({
                    metaDescription: 'Login',
                    title: 'Login',
                } as ActiveRoute)
            );
        }

        if (pathname === '/login/password-request') {
            dispatch(
                setActiveRoute({
                    metaDescription: 'ForgotPassword',
                    title: 'ForgotPassword',
                } as ActiveRoute)
            );
        }

        // This is the default page, hence this condition as well (nothing clicked yet)
        if (pathname === '/vat/vat-overview') {
            dispatch(
                setActiveRoute({
                    metaDescription: 'VAT',
                    title: 'VAT',
                } as ActiveRoute)
            );
        }
    }, [pathname]);

    return (
        <>
            <RouteLayout
                activeRoute={getActiveRoute([...privateRoutes, ...publicRoutes], pathname)}
                isLoggedIn={isLoggedIn}
                pathname={pathname}
                privatePaths={privatePaths}
            >
                <Switch>
                    {isLoggedIn && renderRoutes(privateRoutes)}
                    {renderRoutes(publicRoutes)}
                    {!isAuthenticated && !isLoggedIn && !publicPaths.includes(pathname) && isUnsupported && (
                        <Redirect to={ROUTES.login.unsupportedAlert} />
                    )}
                    {((!isLoggedIn && privatePaths.includes(pathname)) ||
                        (!isAuthenticated && !isLoggedIn && !publicPaths.includes(pathname) && !isUnsupported)) && (
                        <Redirect to={ROUTES.login.root} />
                    )}
                    {isLoggedIn && pathname === '/' && <Redirect to={ROUTES.vat.vatOverview} />}
                    <BrowserRoute path={['*', ROUTES.error[404]]}>
                        <Error404Page />
                    </BrowserRoute>
                </Switch>
            </RouteLayout>
            <Prompt message={onHasUnsavedChangesCallback} when={hasUnsavedChanges} />
            <DialogUnsavedChanges
                isVisible={isUnsavedChangesDialogVisible}
                location={nextPage}
                onCancel={onHasUnsavedChangesDialogCancelCallback}
                onConfirm={onHasUnsavedChangesDialogConfirmCallback}
            />
        </>
    );
};

export default Routes;

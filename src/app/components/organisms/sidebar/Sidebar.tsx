import { ButtonClose, Logo, LogoWrapper, MenuWrapper, StyledSidebar } from './Sidebar.sc';
import { ButtonIcon, IconType, Link, Menu } from 'faralley-ui-kit';
import { NestedPrivateRouteChild, PrivateRoute } from '../../../../@types/PrivateRoute';
import React, { FunctionComponent, useCallback, useMemo } from 'react';
import { setActiveRoute, setIsResetScrollingRequired, setIsSidebarVisible } from '../../../state/global/actions';
import { ActiveRoute } from '../../../state/global/types';
import ButtonBar from './buttonBar/ButtonBar';
import { getPrivateRoutes } from '../../../routing/helpers';
import { getTranslation } from '../../../utils/translationFunctions';
import { isNestedPrivateRoute } from '../../../utils/typeGuards/isNestedPrivateRoute';
import LocalizedString from '../../atoms/localizedString/LocalizedString';
import { logoutUser } from '../../../state/user/actions';
import { resetNavigationInfo } from '../../../state/shared/navigationInfo/actions';
import { ROUTES } from '../../../routing/routeDefinitions';
import SVG from '../../atoms/svg/SVG';
import { useDispatch } from 'react-redux';
import useSelector from '../../../state/useSelector';

const isPrivateRouteVisible = (isVisibleInMenu = true): boolean => isVisibleInMenu;

const Sidebar: FunctionComponent = () => {
    const dispatch = useDispatch();
    const isSidebarVisible = useSelector(({ global }) => global.isSidebarVisible);

    const closeSidebarCallback = useCallback(() => {
        dispatch(setIsSidebarVisible(false));
    }, []);

    const logoutCallback = useCallback(() => {
        dispatch(logoutUser());
    }, []);

    const getOnClickCallback = (privateRoute: PrivateRoute | NestedPrivateRouteChild) => () => {
        dispatch(setIsResetScrollingRequired(true));

        dispatch(
            setActiveRoute({
                metaDescription: privateRoute.metaDescription,
                title: privateRoute.text,
            } as ActiveRoute)
        );

        if (privateRoute.onClick) {
            dispatch(privateRoute.onClick());
        }

        if (privateRoute.isResetNavigationRequired) {
            dispatch(resetNavigationInfo());
        }
    };

    const menuItems = useMemo(
        () =>
            getPrivateRoutes()
                .privateRoutes.filter(({ isVisibleInMenu }) => isPrivateRouteVisible(isVisibleInMenu))
                .map((privateRoute) => {
                    if (isNestedPrivateRoute(privateRoute)) {
                        const privateRouteChildren = privateRoute.children
                            .filter(({ isVisibleInMenu }) => isPrivateRouteVisible(isVisibleInMenu))
                            .map((privateRouteChild) => ({
                                ...privateRouteChild,
                                isDisabled: false,
                                isVisible: true,
                                onClick: getOnClickCallback(privateRouteChild),
                                text: <LocalizedString value={privateRouteChild.text} />,
                            }));

                        return {
                            ...privateRoute,
                            children: privateRouteChildren,
                            isDisabled: privateRouteChildren.every(({ isDisabled }) => isDisabled),
                            isVisible: privateRouteChildren.some(({ isVisible }) => isVisible),
                            onClick: getOnClickCallback(privateRoute),
                            text: <LocalizedString value={privateRoute.text} />,
                        };
                    }

                    return {
                        ...privateRoute,
                        isDisabled: false,
                        isVisible: true,
                        onClick: getOnClickCallback(privateRoute),
                        text: <LocalizedString value={privateRoute.text} />,
                    };
                }),
        []
    );

    return (
        <StyledSidebar isVisible={isSidebarVisible}>
            <ButtonClose>
                <ButtonIcon iconType={IconType.CROSS} onClick={closeSidebarCallback} />
            </ButtonClose>
            <Logo>
                <Link to={ROUTES.vat.vatOverview}>
                    <LogoWrapper
                        data-tooltip-component={
                            process.env.version
                                ? `${getTranslation('Version')} ${process.env.version || getTranslation('Unknown')}`
                                : undefined
                        }
                        data-tooltip-delay
                    >
                        <SVG type="logo_small" />
                    </LogoWrapper>
                </Link>
            </Logo>
            <MenuWrapper>
                <Menu items={menuItems} />
            </MenuWrapper>
            <ButtonBar onLogout={logoutCallback} />
        </StyledSidebar>
    );
};

export default Sidebar;

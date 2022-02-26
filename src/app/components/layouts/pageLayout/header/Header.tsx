import { IconType, Header as UIKitHeader, HeaderProps as UIKitHeaderProps } from 'faralley-ui-kit';
import React, { FunctionComponent, ReactNode } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { getRouteText } from '../../../../routing/helpers';
import { ROUTES } from '../../../../routing/routeDefinitions';
import { StyledHeader } from './Header.sc';
import useSelector from '../../../../state/useSelector';

export interface HeaderProps {
    isSidebarVisible: boolean;
    onClickButtonMenu: () => void;
    userMessage?: ReactNode;
}

const Header: FunctionComponent<HeaderProps> = ({ isSidebarVisible, onClickButtonMenu, userMessage }) => {
    const history = useHistory();
    const content = useSelector(({ global }) => global.headerContent);
    // const isHeaderLoading = useSelector(({ memberDetails }) => memberDetails.isHeaderLoading);
    const isHeaderLoading = false;

    const isOnOrganizationDetailsRoute = useRouteMatch<{ publicOrganizationId: string }>(
        ROUTES.organization.organizationDetails
    );

    const buttons: UIKitHeaderProps['buttons'] = [
        {
            iconType: IconType.MENU,
            onClick: onClickButtonMenu,
        },
    ];

    if (isOnOrganizationDetailsRoute) {
        buttons.push({
            iconType: IconType.CHEVRONLEFT,
            isDisabled: isHeaderLoading,
            onClick: () => history.goBack(),
        });
    }

    return (
        <StyledHeader isSidebarVisible={isSidebarVisible}>
            {userMessage && userMessage}
            <UIKitHeader buttons={buttons} title={getRouteText(Boolean(isOnOrganizationDetailsRoute))}>
                {content}
            </UIKitHeader>
        </StyledHeader>
    );
};

export default Header;

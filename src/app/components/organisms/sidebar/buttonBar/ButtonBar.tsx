import { Button, StyledButtonBar } from './ButtonBar.sc';
import { EXTERNAL_ROUTES, ROUTES } from '../../../../routing/routeDefinitions';
import { IconCustomizable, IconCustomizableSize, IconType, openUrl } from 'faralley-ui-kit';
import React, { FunctionComponent, useCallback } from 'react';
import LocalizedString from '../../../atoms/localizedString/LocalizedString';
import { useHistory } from 'react-router-dom';

interface ButtonBarProps {
    onLogout: () => void;
}

const ButtonBar: FunctionComponent<ButtonBarProps> = ({ onLogout }) => {
    const history = useHistory();

    const goToSettings = useCallback(() => {
        history.push(ROUTES.global.settings);
    }, []);

    return (
        <StyledButtonBar>
            <Button onClick={onLogout}>
                <IconCustomizable iconSize={IconCustomizableSize.SIZE24} iconType={IconType.LOGOUT} />
                <LocalizedString value="Logout" />
            </Button>
            <Button onClick={goToSettings}>
                <IconCustomizable iconSize={IconCustomizableSize.SIZE24} iconType={IconType.GEAR} />
                <LocalizedString value="Settings" />
            </Button>
            <Button onClick={() => openUrl(EXTERNAL_ROUTES.support)}>
                <IconCustomizable iconSize={IconCustomizableSize.SIZE24} iconType={IconType.ROUND_HELP} />
                <LocalizedString value="Support" />
            </Button>
        </StyledButtonBar>
    );
};

export default ButtonBar;

import { ButtonVariant, IconType } from 'faralley-ui-kit';
import React, { FunctionComponent } from 'react';
import CardIllustration from '../../../components/molecules/cards/cardIllustration/CardIllustration';
import LocalizedString from '../../../components/atoms/localizedString/LocalizedString';
import { ROUTES } from '../../../routing/routeDefinitions';
import { useHistory } from 'react-router-dom';

const UnsupportedAlert: FunctionComponent = () => {
    const history = useHistory();

    const goToLoginCallback = () => {
        history.push(ROUTES.login.root);
    };

    return (
        <CardIllustration
            buttons={[
                {
                    children: <LocalizedString value="ContinueAnyway" />,
                    iconType: IconType.CHEVRONRIGHT,
                    onClick: goToLoginCallback,
                    variant: ButtonVariant.PRIMARY,
                },
            ]}
            illustration="club-on-mobile"
            text={<LocalizedString value="UnsupportedAlertText" />}
            title={<LocalizedString value="UnsupportedAlert" />}
        />
    );
};

export default UnsupportedAlert;

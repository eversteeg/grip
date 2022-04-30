import { IconType, Status } from 'faralley-ui-kit';
import React, { FunctionComponent, useCallback } from 'react';
import CardIllustration from '../../../molecules/cards/cardIllustration/CardIllustration';
import LocalizedString from '../../../atoms/localizedString/LocalizedString';
import { ROUTES } from '../../../../routing/routeDefinitions';
import { StyledError404 } from './Error404.sc';
import { useHistory } from 'react-router-dom';
import useSelector from '../../../../state/useSelector';

const Error404: FunctionComponent = () => {
    const history = useHistory();
    const isLoggedIn = useSelector(({ user }) => user.isLoggedIn);

    const onClickCallback = useCallback(() => {
        history.push(isLoggedIn ? ROUTES.vat.vatOverview : ROUTES.login.root);
    }, [isLoggedIn]);

    return (
        <StyledError404 isLoggedIn={isLoggedIn}>
            <CardIllustration
                buttons={[
                    {
                        children: <LocalizedString value={isLoggedIn ? 'BackToHome' : 'GoToLoginPage'} />,
                        iconType: IconType.CHEVRONRIGHT,
                        onClick: onClickCallback,
                    },
                ]}
                illustration="error"
                status={Status.INVALID}
                text={<LocalizedString value="Error404Text" />}
                title={<LocalizedString value="Error404" />}
            />
        </StyledError404>
    );
};

export default Error404;

import { ButtonVariant, IconType, Input, InputType } from 'faralley-ui-kit';
import { InputWrapper, Username } from './PasswordRequestForm.sc';
import React, { ChangeEvent, FunctionComponent, useCallback, useState } from 'react';
import CardIllustration from '../../../components/molecules/cards/cardIllustration/CardIllustration';
import { EXTERNAL_ROUTES } from '../../../routing/routeDefinitions';
import LocalizedString from '../../../components/atoms/localizedString/LocalizedString';
import { requestPassword } from '../../../state/user/actions';
import { useDispatch } from 'react-redux';
import useSelector from '../../../state/useSelector';

const LoginForm: FunctionComponent = () => {
    const dispatch = useDispatch();
    const { isLoading, isPasswordRequested } = useSelector(({ user }) => user);
    const [username, setUsername] = useState('');
    const requestPasswordCallback = useCallback(() => dispatch(requestPassword(username)), [username]);

    const setUsernameCallback = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => setUsername(event.currentTarget.value),
        []
    );

    if (isPasswordRequested) {
        return (
            <CardIllustration
                illustration="message-send"
                link={{
                    children: <LocalizedString value="NoEmailReceived" />,
                    href: EXTERNAL_ROUTES.support,
                    iconType: IconType.ROUND_HELP,
                    rel: 'noreferrer noopener',
                    target: '_blank',
                }}
                text={
                    <LocalizedString
                        value="ResetYourPasswordText"
                        variables={{
                            username: <Username>{username}</Username>,
                        }}
                    />
                }
                title={<LocalizedString value="ResetYourPassword" />}
            />
        );
    }

    return (
        <CardIllustration
            buttons={[
                {
                    children: <LocalizedString value="SendInstructions" />,
                    iconType: IconType.PLANE,
                    isDisabled: !username,
                    isFullWidth: true,
                    isLoading,
                    onClick: requestPasswordCallback,
                    variant: ButtonVariant.PRIMARY,
                },
            ]}
            illustration="password-request"
            text={<LocalizedString value="ForgotPasswordText" />}
            title={<LocalizedString value="ForgotPassword" />}
        >
            <InputWrapper>
                <Input
                    label={<LocalizedString value="Email" />}
                    name="username"
                    onChange={setUsernameCallback}
                    type={InputType.EMAIL}
                    value={username}
                />
            </InputWrapper>
        </CardIllustration>
    );
};

export default LoginForm;

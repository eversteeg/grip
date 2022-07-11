import { authenticateUser, verifyReCaptchaToken } from '../../../state/user/actions';
import { ButtonVariant, IconType, Input, InputPassword, InputType, SelectionControl, Status } from 'faralley-ui-kit';
import React, { ChangeEvent, FunctionComponent, KeyboardEvent, useCallback, useEffect, useState } from 'react';
import { shallowEqual, useDispatch } from 'react-redux';
import CardBase from '../../../components/base/Base';
import { FormElementWrapper } from './LoginForm.sc';
import { isEnterKey } from '../../../utils/keyboardFunctions';
import { LOCAL_STORAGE } from '../../../globals/storage';
import LocalizedString from '../../../components/atoms/localizedString/LocalizedString';
import { Redirect } from 'react-router-dom';
import { ROUTES } from '../../../routing/routeDefinitions';
import { Translations } from '../../../state/language/types';
import useSelector from '../../../state/useSelector';

const reCaptchaSiteKey = '6Lc6544gAAAAAHKnpiS7XhsDIli_09NwZSvURa1m'; // See index.html as well

const LoginForm: FunctionComponent = () => {
    const dispatch = useDispatch();

    const [isRememberMeChecked, setIsRememberMeChecked] = useState(
        Boolean(localStorage.getItem(LOCAL_STORAGE.rememberMe))
    );

    const [password, setPassword] = useState('');
    const [username, setUsername] = useState(localStorage.getItem(LOCAL_STORAGE.username) || '');
    const hasServerError = useSelector(({ error }) => error.hasServerError);

    const { isVerifyingReCaptchaToken, isReCaptchaTokenVerified, isReCaptchaTokenValid } = useSelector(
        ({ user }) => user,
        shallowEqual
    );

    const getErrorMessageKey = (): keyof Translations => {
        if (hasServerError) {
            return 'ErrorServerFailure';
        }

        if (isReCaptchaTokenVerified && !isReCaptchaTokenValid) {
            return 'ErrorReCaptchaVerifying';
        }

        return 'ErrorOAuthFailed';
    };

    const { hasLoginError, isLoggedIn, isAuthenticating } = useSelector(({ user }) => user, shallowEqual);

    const isLoginPossible = password.length >= 8 && username;

    const authenticateUserCallback = useCallback(() => {
        dispatch(authenticateUser(username, password));

        if (isRememberMeChecked) {
            localStorage.setItem(LOCAL_STORAGE.rememberMe, 'true');
            localStorage.setItem(LOCAL_STORAGE.username, username);
        } else {
            localStorage.removeItem(LOCAL_STORAGE.rememberMe);
            localStorage.removeItem(LOCAL_STORAGE.username);
        }
    }, [isRememberMeChecked, password, username]);

    const verifyRecaptchaCallback = useCallback(() => {
        /* eslint-disable */
        // @ts-ignore
        grecaptcha.ready(() => {
            // @ts-ignore
            grecaptcha.execute(reCaptchaSiteKey, { action: 'submit' }).then((token: string) => {
                dispatch(verifyReCaptchaToken(token));
            });
        });
        /* eslint-enable */
    }, [reCaptchaSiteKey]);

    const setIsRememberMeCheckedCallback = useCallback(() => {
        setIsRememberMeChecked(!isRememberMeChecked);
    }, [isRememberMeChecked]);

    const setPasswordCallback = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => setPassword(event.currentTarget.value),
        []
    );

    const setUsernameCallback = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => setUsername(event.currentTarget.value),
        []
    );

    const handleOnKeyDown = useCallback(
        (event: KeyboardEvent<HTMLInputElement>): void => {
            if (isEnterKey(event) && isLoginPossible) {
                verifyRecaptchaCallback();
            }
        },
        [isLoginPossible]
    );

    // Proceed when recaptcha token is valid and verified
    useEffect(() => {
        if (isReCaptchaTokenVerified && isReCaptchaTokenValid) {
            authenticateUserCallback();
        }
    }, [isReCaptchaTokenValid, isReCaptchaTokenVerified]);

    // Make sure this item is removed on loading
    useEffect(() => {
        localStorage.removeItem(LOCAL_STORAGE.resendActivationMail);
    }, []);

    return (
        <>
            <CardBase
                buttons={[
                    {
                        children: <LocalizedString value="Login" />,
                        iconType: isLoginPossible ? IconType.LOCKOFF : IconType.LOCKON,
                        isDisabled: !isLoginPossible,
                        isFullWidth: true,
                        isLoading: isAuthenticating || isVerifyingReCaptchaToken,
                        onClick: verifyRecaptchaCallback,
                        variant: ButtonVariant.FILLED,
                    },
                ]}
                hasTermsOfUse
                link={{
                    children: <LocalizedString value="ForgotPassword" />,
                    iconType: IconType.ROUND_HELP,
                    to: ROUTES.login.passwordRequest,
                }}
                status={
                    hasLoginError || (isReCaptchaTokenVerified && !isReCaptchaTokenValid)
                        ? Status.INVALID
                        : Status.DEFAULT
                }
            >
                <FormElementWrapper>
                    <Input
                        hasError={hasLoginError}
                        label={<LocalizedString value="Email" />}
                        name="username"
                        onChange={setUsernameCallback}
                        onKeyDown={handleOnKeyDown}
                        type={InputType.EMAIL}
                        value={username}
                    />
                </FormElementWrapper>
                <FormElementWrapper>
                    <InputPassword
                        errorMessage={<LocalizedString value={getErrorMessageKey()} />}
                        hasError={
                            hasLoginError || hasServerError || (isReCaptchaTokenVerified && !isReCaptchaTokenValid)
                        }
                        label={<LocalizedString value="Password" />}
                        name="password"
                        onChange={setPasswordCallback}
                        onKeyDown={handleOnKeyDown}
                        value={password}
                    />
                </FormElementWrapper>
                <FormElementWrapper>
                    <SelectionControl
                        hasVerticalCorrection
                        isChecked={isRememberMeChecked}
                        label={<LocalizedString value="RememberLoginData" />}
                        name="remember-me"
                        onChange={setIsRememberMeCheckedCallback}
                        value="remember-me"
                    />
                </FormElementWrapper>
            </CardBase>
            {isLoggedIn && <Redirect to={ROUTES.car.tripOverview} />}
        </>
    );
};

export default LoginForm;

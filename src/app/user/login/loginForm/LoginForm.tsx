import { ButtonVariant, IconType, Input, InputPassword, InputType, SelectionControl, Status } from 'faralley-ui-kit';
import React, { ChangeEvent, FunctionComponent, KeyboardEvent, useCallback, useEffect, useRef, useState } from 'react';
import { shallowEqual, useDispatch } from 'react-redux';
import { authenticateUser } from '../../../state/user/actions';
import CardBase from '../../../components/base/Base';
import { FormElementWrapper } from './LoginForm.sc';
import { isEnterKey } from '../../../utils/keyboardFunctions';
import { LOCAL_STORAGE } from '../../../globals/storage';
import LocalizedString from '../../../components/atoms/localizedString/LocalizedString';
import ReCAPTCHA from 'react-google-recaptcha';
import { Redirect } from 'react-router-dom';
import { ROUTES } from '../../../routing/routeDefinitions';
import { Translations } from '../../../state/language/types';
import useSelector from '../../../state/useSelector';
// import { ValidationError } from '../../../../@types/generated/definition/error/ValidationError';

const LoginForm: FunctionComponent = () => {
    const dispatch = useDispatch();

    const [isRememberMeChecked, setIsRememberMeChecked] = useState(
        Boolean(localStorage.getItem(LOCAL_STORAGE.rememberMe))
    );

    const locale = useSelector(({ language }) => language.locale);
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState(localStorage.getItem(LOCAL_STORAGE.username) || '');
    const reCaptchaRef = useRef<ReCAPTCHA>(null);
    const reCaptchaSiteKey = useSelector(({ config }) => config.reCaptchaSiteKey);
    const [reCaptchaToken, setReCaptchaToken] = useState(null);
    // const hasServerError = useSelector(({ error }) => error.hasServerError);
    // const validationErrors: ValidationError[] = useSelector(({ user }) => user.oauthValidationErrors);

    const getErrorMessageKey = (): keyof Translations =>
        // if (validationErrors.length !== 0) {
        //     if (validationErrors.some((validationError) => validationError.Id === 'USER_IS_NOT_ACTIVATED')) {
        //         return 'Error_UserNotActivated';
        //     }

        //     return 'Error_OAuthFailed';
        // }

        // if (hasServerError) {
        //     return 'Error_ServerFailure';
        // }

        // return 'Error_OAuthFailed';
        'Login';

    const { hasLoginError, isAuthenticated, isAuthenticating } = useSelector(({ user }) => user, shallowEqual);

    const isLoginPossible = password.length >= 8 && username;

    const authenticateUserCallback = useCallback(() => {
        if (reCaptchaRef.current) {
            reCaptchaRef.current.execute();
        }

        if (process.env.development === 'true' || reCaptchaToken) {
            dispatch(authenticateUser(username, password));

            if (isRememberMeChecked) {
                localStorage.setItem(LOCAL_STORAGE.rememberMe, 'true');
                localStorage.setItem(LOCAL_STORAGE.username, username);
            } else {
                localStorage.removeItem(LOCAL_STORAGE.rememberMe);
                localStorage.removeItem(LOCAL_STORAGE.username);
            }
        }
    }, [isRememberMeChecked, password, reCaptchaToken, username]);

    const setIsRememberMeCheckedCallback = useCallback(() => {
        setIsRememberMeChecked(!isRememberMeChecked);
    }, [isRememberMeChecked]);

    const setPasswordCallback = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => setPassword(event.currentTarget.value),
        []
    );

    const setReCaptchaTokenCallback = useCallback((token) => setReCaptchaToken(token), []);

    const setUsernameCallback = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => setUsername(event.currentTarget.value),
        []
    );

    const handleOnKeyDown = useCallback(
        (event: KeyboardEvent<HTMLInputElement>): void => {
            if (isEnterKey(event) && isLoginPossible) {
                authenticateUserCallback();
            }
        },
        [isLoginPossible]
    );

    useEffect(() => {
        if (reCaptchaToken) {
            authenticateUserCallback();
        }
    }, [reCaptchaToken]);

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
                        isLoading: isAuthenticating,
                        onClick: authenticateUserCallback,
                        variant: ButtonVariant.FILLED,
                    },
                ]}
                hasTermsOfUse
                link={{
                    children: <LocalizedString value="ForgotPassword" />,
                    iconType: IconType.ROUND_HELP,
                    to: ROUTES.login.passwordRequest,
                }}
                status={hasLoginError ? Status.INVALID : Status.DEFAULT}
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
                        hasError={hasLoginError}
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
                {process.env.development !== 'true' && (
                    <ReCAPTCHA
                        hl={locale}
                        onChange={setReCaptchaTokenCallback}
                        ref={reCaptchaRef}
                        sitekey={reCaptchaSiteKey}
                        size="invisible"
                        type="image"
                    />
                )}
            </CardBase>
            {isAuthenticated && <Redirect to={ROUTES.vat.vatOverview} />}
        </>
    );
};

export default LoginForm;

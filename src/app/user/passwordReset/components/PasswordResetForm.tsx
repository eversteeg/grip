import { ButtonVariant, IconType, InputPassword, Status } from 'faralley-ui-kit';
import React, { ChangeEvent, FunctionComponent, useCallback, useState } from 'react';
import CardIllustration from '../../../components/molecules/cards/cardIllustration/CardIllustration';
import { changePassword } from '../../../state/user/actions';
import { InputWrapper } from './PasswordResetForm.sc';
import LocalizedString from '../../../components/atoms/localizedString/LocalizedString';
import { ROUTES } from '../../../routing/routeDefinitions';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import useSelector from '../../../state/useSelector';

const PasswordResetForm: FunctionComponent = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { isLoading, isPasswordReset } = useSelector(({ user }) => user);
    const [errorMessage, setErrorMessage] = useState(<span />);
    const [hasError, setHasError] = useState(false);
    const [repeatedPassword, setRepeatedPassword] = useState('');
    const [password, setPassword] = useState('');

    const changePasswordCallback = useCallback(() => {
        if (password !== repeatedPassword) {
            setHasError(true);
            setErrorMessage(<LocalizedString value="ErrorUpdatePasswordNotEqual" />);
        } else {
            setHasError(false);
            dispatch(changePassword(password, new URL(window.location.href).searchParams.get('token') || ''));
        }
    }, [repeatedPassword, password]);

    const onClickButtonLoginCallback = useCallback(() => history.push(ROUTES.login.root), []);

    const setPasswordCallback = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => setPassword(event.currentTarget.value),
        []
    );

    const setRepeatedPasswordCallback = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => setRepeatedPassword(event.currentTarget.value),
        []
    );

    return isPasswordReset ? (
        <CardIllustration
            buttons={[
                {
                    children: <LocalizedString value="Login" />,
                    iconType: IconType.LOCKOFF,
                    isFullWidth: true,
                    onClick: onClickButtonLoginCallback,
                    variant: ButtonVariant.FILLED,
                },
            ]}
            illustration="password-reset-succes"
            text={<LocalizedString value="PasswordResetText" />}
            title={<LocalizedString value="PasswordReset" />}
        />
    ) : (
        <CardIllustration
            buttons={[
                {
                    children: <LocalizedString value="ChangePassword" />,
                    iconType: IconType.LOCKON,
                    isDisabled: password.length < 8 || repeatedPassword.length < 8,
                    isFullWidth: true,
                    isLoading,
                    onClick: changePasswordCallback,
                    variant: ButtonVariant.FILLED,
                },
            ]}
            status={hasError ? Status.INVALID : Status.DEFAULT}
            text={<LocalizedString value="NewPasswordText" />}
            title={<LocalizedString value="NewPassword" />}
        >
            <InputWrapper>
                <InputPassword
                    hasError={hasError}
                    label={<LocalizedString value="NewPassword" />}
                    name="new-password"
                    onChange={setPasswordCallback}
                    value={password}
                />
            </InputWrapper>
            <InputWrapper>
                <InputPassword
                    errorMessage={errorMessage}
                    hasError={hasError}
                    label={<LocalizedString value="NewPasswordRepeat" />}
                    name="new-password-repeat"
                    onChange={setRepeatedPasswordCallback}
                    value={repeatedPassword}
                />
            </InputWrapper>
        </CardIllustration>
    );
};

export default PasswordResetForm;

/* eslint-disable react/no-danger */
import {
    Content,
    Header,
    Info,
    LogoWrapper,
    ReCaptchaText,
    StyledLoginLayout,
    TextLinkWrapper,
} from './LoginLayout.sc';
import React, { FunctionComponent, ReactNode } from 'react';
import { ContentWidth } from '../../../../@types/Route';
import DropdownLanguage from '../../organisms/dropdownLanguage/DropdownLanguage';
import { EXTERNAL_ROUTES } from '../../../routing/routeDefinitions';
import { getTranslation } from '../../../utils/translationFunctions';
import { IconType } from 'faralley-ui-kit';
import LocalizedString from '../../atoms/localizedString/LocalizedString';
import { SESSION_STORAGE } from '../../../globals/storage';
import SVG from '../../atoms/svg/SVG';
import TextLink from '../../molecules/textLink/TextLink';

interface LoginLayoutProps {
    children: ReactNode;
    contentWidth?: ContentWidth;
    hasLogo?: boolean;
    info?: ReactNode;
}

const getLoginLayoutVariant = (): number => {
    const loginLayoutVariant = sessionStorage.getItem(SESSION_STORAGE.loginLayoutVariant);

    if (loginLayoutVariant) {
        return parseInt(loginLayoutVariant, 10);
    }

    const newLoginLayoutVariant = Math.floor(Math.random() * 8) + 1;
    sessionStorage.setItem(SESSION_STORAGE.loginLayoutVariant, newLoginLayoutVariant.toString());

    return newLoginLayoutVariant;
};

const LoginLayout: FunctionComponent<LoginLayoutProps> = ({ children, hasLogo = true, info, contentWidth }) => {
    // @TODO; I've implemented this for our own reference, but might be either removed or made into some thing better looking ;-)
    const versionInfo = `${getTranslation('Version')} ${process.env.version || getTranslation('Unknown')}`;

    return (
        <>
            <StyledLoginLayout variant={getLoginLayoutVariant()}>
                <Header>
                    <TextLinkWrapper>
                        <TextLink href={EXTERNAL_ROUTES.support} iconType={IconType.ROUND_HELP}>
                            <LocalizedString value="Support" />
                        </TextLink>
                    </TextLinkWrapper>
                    <DropdownLanguage />
                </Header>
                {hasLogo && (
                    // eslint-disable-next-line no-alert
                    <LogoWrapper onClick={() => alert(versionInfo)}>
                        <SVG type="logo_small" />
                    </LogoWrapper>
                )}
                <Content contentWidth={contentWidth}>{children}</Content>
                <Info>
                    {info}
                    <ReCaptchaText
                        dangerouslySetInnerHTML={{
                            __html: `This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy">Privacy Policy</a> and
                    <a href="https://policies.google.com/terms">Terms of Service</a> apply.`,
                        }}
                    />
                    <div>{process.env.version ? versionInfo : undefined}</div>
                </Info>
            </StyledLoginLayout>
        </>
    );
};

export default LoginLayout;

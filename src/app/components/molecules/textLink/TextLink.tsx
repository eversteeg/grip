import { Button, ButtonProps, ButtonVariant, Link, NativeLinkProps, RouterLinkProps } from 'faralley-ui-kit';
import React, { FunctionComponent } from 'react';

export type TextLinkProps = (NativeLinkProps | RouterLinkProps) & {
    iconType?: ButtonProps['iconType'];
    onClick?: () => void;
};

const TextLink: FunctionComponent<TextLinkProps> = (props) => {
    const { children, iconType, onClick } = props;

    const TextLinkContent = (
        <Button as="div" hasNoPadding iconType={iconType} isFullWidth variant={ButtonVariant.TEXT_ONLY}>
            {children}
        </Button>
    );

    if ('to' in props) {
        const { to } = props;

        return (
            <Link onClick={onClick} to={to}>
                {TextLinkContent}
            </Link>
        );
    }

    const { href, rel, target } = props;

    return (
        <Link as="a" href={href} rel={rel} target={target}>
            {TextLinkContent}
        </Link>
    );
};

export default TextLink;

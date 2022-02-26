import { Button, ButtonProps, CardStatus, Skeleton, Status } from 'faralley-ui-kit';
import { Buttons, ButtonWrapper, Content, LinkWrapper } from './Base.sc';
import React, { FunctionComponent, ReactNode, ReactNodeArray } from 'react';
import TextLink, { TextLinkProps } from '../molecules/textLink/TextLink';
import Error from '../atoms/error/Error';
import TermsOfUse from '../termsOfUse/TermsOfUse';

export interface BaseProps {
    buttons?: ButtonProps[];
    children?: ReactNode;
    className?: string;
    errors?: ReactNodeArray;
    hasFullheightContent?: boolean;
    hasPaddingBottom?: boolean;
    hasPaddingSide?: boolean;
    hasPaddingTop?: boolean;
    hasSmallPadding?: boolean;
    hasTermsOfUse?: boolean;
    isDisabled?: boolean;
    isLoading?: boolean;
    isUnassigned?: boolean;
    link?: TextLinkProps;
    status?: Status;
}

const getStatus = (isDisabled: boolean, isLoading: boolean, isUnassigned: boolean, status?: Status): Status => {
    if (isDisabled || isLoading) {
        return Status.DISABLED;
    }

    if (isUnassigned) {
        return Status.ALERT;
    }

    return status || Status.DEFAULT;
};

const Base: FunctionComponent<BaseProps> = ({
    buttons,
    children,
    className,
    errors = [],
    hasFullheightContent,
    hasPaddingBottom = false,
    hasPaddingSide = true,
    hasPaddingTop = true,
    hasSmallPadding = false,
    hasTermsOfUse = false,
    isDisabled = false,
    isLoading = false,
    isUnassigned = false,
    link,
    status,
}) => (
    <CardStatus
        className={className}
        hasFullheightContent={hasFullheightContent}
        status={getStatus(isDisabled, isLoading, isUnassigned, status)}
    >
        <Content
            hasPaddingBottom={hasPaddingBottom}
            hasPaddingSide={hasPaddingSide}
            hasPaddingTop={hasPaddingTop}
            hasSmallPadding={hasSmallPadding}
        >
            {children}
            {buttons && (
                <Buttons>
                    {buttons.map(
                        (button, index) =>
                            Object.keys(button).length > 0 && (
                                <ButtonWrapper
                                    isFullWidth={button.isFullWidth || false}
                                    isLoading={isLoading}
                                    // eslint-disable-next-line react/no-array-index-key
                                    key={index}
                                >
                                    {isLoading ? (
                                        <Skeleton />
                                    ) : (
                                        // eslint-disable-next-line react/jsx-props-no-spreading
                                        <Button {...button} isDisabled={isDisabled || button.isDisabled}>
                                            {button.children}
                                        </Button>
                                    )}
                                </ButtonWrapper>
                            )
                    )}
                </Buttons>
            )}
            {hasTermsOfUse && <TermsOfUse isLoading={isLoading} />}
            {link && (
                <LinkWrapper>
                    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                    <TextLink {...link} />
                </LinkWrapper>
            )}
        </Content>
        {errors.map((error, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Error key={index}>{error}</Error>
        ))}
    </CardStatus>
);

export default Base;

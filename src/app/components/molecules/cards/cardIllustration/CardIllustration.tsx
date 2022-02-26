import Base, { BaseProps } from '../../../base/Base';
import Illustration, { IllustrationProps } from '../../../illustration/Illustration';
import React, { FunctionComponent } from 'react';
import { StyledText, StyledTitle } from './CardIllustration.sc';
import { TextProps } from '../../../text/Text';
import { TitleProps } from '../../../title/Title';

interface CardIllustrationProps
    extends Pick<BaseProps, 'buttons' | 'hasPaddingBottom' | 'isLoading' | 'link' | 'status'> {
    illustration?: IllustrationProps['type'];
    text?: TextProps['value'];
    title: TitleProps['value'];
}

const CardIllustration: FunctionComponent<CardIllustrationProps> = ({
    buttons,
    children,
    hasPaddingBottom,
    illustration,
    isLoading,
    link,
    status,
    title,
    text,
}) => (
    <Base buttons={buttons} hasPaddingBottom={hasPaddingBottom} isLoading={isLoading} link={link} status={status}>
        {illustration && <Illustration isLoading={isLoading} type={illustration} />}
        <StyledTitle isLoading={isLoading} value={title} />
        {text && <StyledText isLoading={isLoading} value={text} />}
        {children}
    </Base>
);

export default CardIllustration;

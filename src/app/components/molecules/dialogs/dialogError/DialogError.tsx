import { ButtonProps, ButtonSize, ButtonVariant, Dialog, DialogProps, IconType, Status } from 'faralley-ui-kit';
import React, { FunctionComponent } from 'react';
import LocalizedString from '../../../atoms/localizedString/LocalizedString';

interface DialogErrorProps {
    hasUnauthorizedCall?: boolean;
    isVisible: DialogProps['isVisible'];
    onConfirm: ButtonProps['onClick'];
    text?: DialogProps['text'];
}

const DialogError: FunctionComponent<DialogErrorProps> = ({ hasUnauthorizedCall, isVisible, onConfirm, text }) => (
    <Dialog
        footerButtons={[
            {
                children: <LocalizedString value="CloseWindow" />,
                iconType: IconType.CROSS,
                onClick: onConfirm,
                size: ButtonSize.SMALL,
                variant: ButtonVariant.PRIMARY,
            },
        ]}
        hasButtonClose={false}
        iconType={IconType.DANGER}
        isVisible={isVisible}
        status={Status.INVALID}
        text={text || <LocalizedString value={hasUnauthorizedCall ? 'ErrorUnauthorizedCall' : 'ErrorServerFailure'} />}
    />
);

export default DialogError;

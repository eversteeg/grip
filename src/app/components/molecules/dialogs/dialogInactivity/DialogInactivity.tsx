import { ButtonProps, ButtonSize, Dialog, DialogProps, IconType, Status } from 'faralley-ui-kit';
import React, { FunctionComponent } from 'react';
import LocalizedString from '../../../atoms/localizedString/LocalizedString';

interface DialogInactivityProps {
    isVisible: DialogProps['isVisible'];
    onConfirm: ButtonProps['onClick'];
}

const DialogInactivity: FunctionComponent<DialogInactivityProps> = ({ isVisible, onConfirm }) => (
    <Dialog
        footerButtons={[
            {
                children: <LocalizedString value="CloseWindow" />,
                iconType: IconType.CROSS,
                onClick: onConfirm,
                size: ButtonSize.SMALL,
            },
        ]}
        hasButtonClose={false}
        iconType={IconType.ROUND_ALERT}
        isVisible={isVisible}
        status={Status.INVALID}
        text={<LocalizedString value="ErrorInactivity" />}
    />
);

export default DialogInactivity;

import { ButtonSize, Dialog, IconType, Status } from 'faralley-ui-kit';
import React, { FunctionComponent, useCallback, useEffect, useState } from 'react';
import LocalizedString from '../../../atoms/localizedString/LocalizedString';
import { setHasUnsavedChanges } from '../../../../state/shared/navigationInfo/actions';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

interface DialogUnsavedChangesProps {
    isVisible: boolean;
    location?: string;
    onCancel: () => void;
    onConfirm: () => void;
}

const DialogUnsavedChanges: FunctionComponent<DialogUnsavedChangesProps> = ({
    isVisible,
    location,
    onCancel,
    onConfirm,
}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [pushLocation, setPushLocation] = useState(false);

    const onContinueCallback = useCallback(() => {
        dispatch(setHasUnsavedChanges(false));

        if (location) {
            setPushLocation(true);
        }

        onConfirm();
    }, [location]);

    useEffect(() => {
        if (pushLocation && location) {
            setPushLocation(false); // This needs to be reset, because the component doesn't get unmounted and therefor the value will not be reset
            history.push(location);
        }
    }, [pushLocation, location]);

    return (
        <Dialog
            footerButtons={[
                {
                    children: <LocalizedString value="ContinueAnyway" />,
                    iconType: IconType.ARROWRIGHT,
                    onClick: onContinueCallback,
                    size: ButtonSize.SMALL,
                },
                {
                    children: <LocalizedString value="GoBack" />,
                    iconType: IconType.ARROWLEFT,
                    onClick: onCancel,
                    size: ButtonSize.SMALL,
                },
            ]}
            hasButtonClose={false}
            iconType={IconType.ROUND_ALERT}
            isVisible={isVisible}
            status={Status.INVALID}
            text={<LocalizedString value="UnsavedChangesAlert" />}
        />
    );
};

export default DialogUnsavedChanges;

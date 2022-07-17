import {
    Alignment,
    ButtonSize,
    ButtonVariant,
    Dialog,
    DialogFooterButtonProps,
    FileAlertType,
    FileUploadDialog,
    IconType,
    isEmpty,
} from 'faralley-ui-kit';
import React, { FunctionComponent, ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import { DialogFileUploadProps } from '../../../../state/dialog/types';
import { DocumentToUpload } from '../../../../../@types/document/DocumentToUpload';
import { getTranslation } from '../../../../utils/translationFunctions';
import LocalizedString from '../../../atoms/localizedString/LocalizedString';
import { maxInputWidth } from '../../../../globals/constants';
import useSelector from '../../../../state/useSelector';

const toBase64 = (file: File): Promise<string> =>
    new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
    });

interface UploadAlert {
    fileSize?: number;
    type: FileAlertType;
}

export const DialogFileUpload: FunctionComponent<DialogFileUploadProps> = ({
    isVisible = false,
    onConfirm,
    onClose,
    maxFileSize = 5,
    maxFiles,
    fileTypes,
    fileNameLength,
    maxLengthDescription = maxInputWidth.long,
    maxLengthName = 100,
    onDelete,
    onPreviousVersion,
    previewContent,
    title,
    confirmButtonText,
    iconType,
    isDescriptionRequired = false,
    isNameRequired = false,
    withDescription = true,
    inputText = <LocalizedString value="AddDescriptionOptional" />,
    withName = false,
    inputName = <LocalizedString value="AddNameOptional" />,
}) => {
    const isLoading = useSelector(({ dialog }) => dialog.isLoading);
    const [alert, setAlert] = useState<UploadAlert>();
    const [droppedFiles, setDroppedFiles] = useState([] as File[]);
    const [selectedFiles, setSelectedFiles] = useState([] as DocumentToUpload[]);
    const [isEditing, setIsEditing] = useState(!previewContent);
    const [alertMessage, setAlertMessage] = useState<ReactNode>();
    const textCancel = getTranslation('CloseWindow');
    const textSave = confirmButtonText || getTranslation('UploadFile');

    const onAlertCallback = useCallback((type: FileAlertType, fileSize?: number) => {
        setAlert({
            fileSize,
            type,
        });
    }, []);

    const onDropCallback = useCallback((files: File[]) => {
        setAlert(undefined);
        setDroppedFiles(files);
    }, []);

    const onUploadCallback = useCallback(
        (files: File[], name?: string, description?: string) => {
            if (selectedFiles) {
                const selectedFilesWithDescription: DocumentToUpload[] = selectedFiles.map((file) => ({
                    ...file,
                    Description: description || file.Description,
                    Name: name || file.Name,
                }));

                if (onConfirm) {
                    onConfirm(selectedFilesWithDescription);
                }
            }
        },
        [selectedFiles]
    );

    // this button array is only used for the dialog in a !isEditing state
    const footerButtons = useMemo((): DialogFooterButtonProps[] => {
        const buttons = [];

        if (previewContent) {
            buttons.push({
                alignment: Alignment.LEFT,
                iconType: IconType.TRASHCAN,
                isDisabled: isEditing || !onDelete,
                onClick: onDelete,
                size: ButtonSize.SMALL,
                variant: ButtonVariant.TEXT_ONLY,
            });

            if (onPreviousVersion) {
                buttons.push({
                    alignment: Alignment.LEFT,
                    iconType: IconType.UNDO,
                    isDisabled: isEditing,
                    onClick: onPreviousVersion,
                    size: ButtonSize.SMALL,
                    variant: ButtonVariant.TEXT_ONLY,
                });
            }
        }

        buttons.push(
            {
                children: <LocalizedString value="CloseWindow" />,
                iconType: IconType.CROSS,
                isDisabled: isLoading,
                onClick: onClose,
                size: ButtonSize.SMALL,
                variant: ButtonVariant.TEXT_ONLY,
            },
            {
                children: confirmButtonText || <LocalizedString value="AddFile" />,
                iconType: IconType.PENCIL,
                isDisabled: !onConfirm,
                onClick: () => setIsEditing(true),
                size: ButtonSize.SMALL,
            }
        );

        return buttons as DialogFooterButtonProps[];
    }, [isEditing, isLoading, onClose, onConfirm, onDelete, onPreviousVersion, previewContent]);

    useEffect(() => {
        if (alert && !isEmpty(alert)) {
            let message;

            switch (alert.type) {
                case FileAlertType.SIZE:
                    message = (
                        <LocalizedString
                            value="TooBigToUpload"
                            variables={{ fileSize: ((alert.fileSize || 0) / 100000).toFixed(2) }}
                        />
                    );

                    break;

                case FileAlertType.TYPE:
                    message = <LocalizedString value="WrongExtension" />;
                    break;

                case FileAlertType.NAME:
                    message = <LocalizedString value="TooLongFileName" />;
                    break;

                default:
                    message = undefined;
            }

            setAlertMessage(message);
        }
    }, [alert]);

    // converting files from File[] to DocumentToUpload[]
    useEffect(() => {
        const promises: Promise<string>[] = [];

        droppedFiles.forEach((file) => {
            promises.push(toBase64(file));
        });

        void Promise.all(promises).then((results) => {
            setSelectedFiles(
                droppedFiles.map((file, index) => ({
                    Base64String: results[index],
                    Description: file.name,
                    MimeType: file.type,
                    Name: file.name,
                }))
            );
        });
    }, [droppedFiles]);

    return isEditing ? (
        <FileUploadDialog
            errors={alertMessage}
            fileNameLength={fileNameLength}
            fileTypes={fileTypes}
            fileUploaderData={{
                buttonText: <LocalizedString value="ChooseFile" />,
                topText: <LocalizedString value="DragFile" />,
            }}
            iconCancel={IconType.CROSS}
            iconSave={IconType.CHECK}
            iconType={iconType}
            isDescriptionRequired={isDescriptionRequired}
            isLoading={isLoading}
            isNameRequired={isNameRequired}
            isVisible={isVisible}
            labelInputDescription={withDescription ? inputText : undefined}
            labelInputName={withName ? inputName : undefined}
            maxFileSize={maxFileSize}
            maxFiles={maxFiles}
            maxLengthDescription={maxLengthDescription}
            maxLengthName={maxLengthName}
            onAlert={onAlertCallback}
            onClose={onClose}
            onDrop={onDropCallback}
            onUpload={onUploadCallback}
            textCancel={textCancel}
            textSave={textSave}
            title={title || <LocalizedString value="UploadFile" />}
        />
    ) : (
        <Dialog
            footerButtons={footerButtons}
            hasButtonClose={false}
            iconType={iconType || IconType.FILEPLUS}
            isVisible={isVisible}
            title={title || <LocalizedString value="UploadFile" />}
        >
            {previewContent}
        </Dialog>
    );
};

export default DialogFileUpload;

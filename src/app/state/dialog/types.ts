import { DialogProps, FileTypes, IconType } from 'faralley-ui-kit';
import { DocumentToUpload } from '../../../@types/document/DocumentToUpload';
import { LogoutAction } from '../user/types';
import { ReactNode } from 'react';

export interface DialogFileUploadProps {
    confirmButtonText?: string;
    dossierId?: number;
    entity?: string;
    errors?: string[];
    fileNameLength?: number;
    fileTypes: FileTypes[];
    iconType?: IconType;
    inputName?: ReactNode;
    inputText?: ReactNode;
    isConfirmDisabled?: boolean;
    isDescriptionRequired?: boolean;
    isLoading?: boolean;
    isNameRequired?: boolean;
    isSaving?: boolean;
    isUploaded?: boolean;
    isVisible: boolean;
    maxFileSize?: number;
    maxFiles: number;
    maxLengthDescription?: number;
    maxLengthName?: number;
    onClose(): void;
    onConfirm?(documents: DocumentToUpload[]): void;
    onDelete?(): void;
    onPreviousVersion?(): void;
    previewContent?: ReactNode;
    title?: ReactNode;
    withDescription?: boolean;
    withName?: boolean;
}

export interface Dialog extends Omit<DialogProps, 'hasButtonClose' | 'isVisible'> {}

export interface UpdateDialogProps extends Partial<Dialog> {}

export interface DialogState {
    dialogFileUploadProps: DialogFileUploadProps;
    dialogProps: DialogProps;
    isLoading: boolean;
}

export const CLOSE_DIALOG = 'dialog.CLOSE_DIALOG';

interface CloseDialogAction {
    type: typeof CLOSE_DIALOG;
}

export const OPEN_DIALOG = 'dialog.OPEN_DIALOG';

interface OpenDialogAction {
    payload: Dialog;
    type: typeof OPEN_DIALOG;
}

export const SET_IS_LOADING = 'dialog.SET_IS_LOADING';

interface SetIsLoadingAction {
    payload: boolean;
    type: typeof SET_IS_LOADING;
}

export const UPDATE_DIALOG_PROPERTIES = 'dialog.UPDATE_DIALOG_PROPERTIES';

interface UpdateDialogPropertiesAction {
    payload: UpdateDialogProps;
    type: typeof UPDATE_DIALOG_PROPERTIES;
}

export const UPDATE_DIALOG_FILE_UPLOAD_PROPERTIES = 'dialog.UPDATE_DIALOG_FILE_UPLOAD_PROPERTIES';

interface UpdateDialogFileUploadPropertiesAction {
    payload: DialogFileUploadProps;
    type: typeof UPDATE_DIALOG_FILE_UPLOAD_PROPERTIES;
}

export type DialogActionTypes =
    | CloseDialogAction
    | LogoutAction
    | OpenDialogAction
    | UpdateDialogPropertiesAction
    | UpdateDialogFileUploadPropertiesAction
    | SetIsLoadingAction;

export const CLOSE_DIALOG_FILE_UPLOAD = 'dialog.CLOSE_DIALOG_FILE_UPLOAD';

interface CloseDialogFileUploadAction {
    type: typeof CLOSE_DIALOG_FILE_UPLOAD;
}

export const OPEN_DIALOG_FILE_UPLOAD = 'dialog.OPEN_DIALOG_FILE_UPLOAD';

interface OpenDialogFileUploadAction {
    payload: DialogFileUploadProps;
    type: typeof OPEN_DIALOG_FILE_UPLOAD;
}

export const SET_DOCUMENT_IS_UPLOADING = 'dialog.SET_DOCUMENT_IS_UPLOADING';

interface SetDocumentIsUploadingAction {
    payload: DialogFileUploadProps;
    type: typeof SET_DOCUMENT_IS_UPLOADING;
}

export const UPLOAD_DOCUMENT = 'dialog.UPLOAD_DOCUMENT';

interface OpenDialogFileUploadAction {
    payload: DialogFileUploadProps;
    type: typeof OPEN_DIALOG_FILE_UPLOAD;
}

export const SET_DOCUMENT_IS_UPLOADED = 'dialog.SET_DOCUMENT_IS_UPLOADED';

interface SetDocumentIsUploadedAction {
    payload: DialogFileUploadProps;
    type: typeof SET_DOCUMENT_IS_UPLOADED;
}

export type DialogFileUploadActionTypes =
    | CloseDialogFileUploadAction
    | OpenDialogFileUploadAction
    | SetDocumentIsUploadingAction
    | SetDocumentIsUploadedAction;

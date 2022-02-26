/* eslint-disable no-use-before-define */
import {
    CLOSE_DIALOG,
    CLOSE_DIALOG_FILE_UPLOAD,
    Dialog,
    DialogActionTypes,
    DialogFileUploadActionTypes,
    DialogFileUploadProps,
    OPEN_DIALOG,
    OPEN_DIALOG_FILE_UPLOAD,
    SET_DOCUMENT_IS_UPLOADED,
    SET_DOCUMENT_IS_UPLOADING,
    SET_IS_LOADING,
    UPDATE_DIALOG_FILE_UPLOAD_PROPERTIES,
    UPDATE_DIALOG_PROPERTIES,
    UpdateDialogProps,
} from './types';
import { DocumentToUpload } from '../../../@types/document/DocumentToUpload';
// import { entityRequest } from '../entity/actions';
import { ThunkResult } from '../store';

// Add other types if required
export type TypeOfUploadDocument = DocumentToUpload;

export const closeDialog = (): DialogActionTypes => ({
    type: CLOSE_DIALOG,
});

export const openDialog = (dialog: Dialog): DialogActionTypes => ({
    payload: dialog,
    type: OPEN_DIALOG,
});

export const setIsLoading = (isLoading: boolean): DialogActionTypes => ({
    payload: isLoading,
    type: SET_IS_LOADING,
});

export const openDialogFileUpload = (dialog: DialogFileUploadProps): DialogFileUploadActionTypes => ({
    payload: dialog,
    type: OPEN_DIALOG_FILE_UPLOAD,
});

export const setDocumentIsUploaded = (dialog: DialogFileUploadProps): DialogFileUploadActionTypes => ({
    payload: dialog,
    type: SET_DOCUMENT_IS_UPLOADED,
});

export const setDocumentIsUploading = (dialog: DialogFileUploadProps): DialogFileUploadActionTypes => ({
    payload: dialog,
    type: SET_DOCUMENT_IS_UPLOADING,
});

export const closeDialogFileUpload = (): DialogFileUploadActionTypes => ({
    type: CLOSE_DIALOG_FILE_UPLOAD,
});

export const uploadDocuments =
    ({ Documents }: { Documents: TypeOfUploadDocument[] }): ThunkResult =>
    (dispatch, getState): void => {
        const state = getState().dialog.dialogFileUploadProps;
        // const { entity } = state;

        dispatch(
            setDocumentIsUploading({
                ...state,
                isLoading: true,
            })
        );

        Documents.forEach((Document: TypeOfUploadDocument) => {
            // eslint-disable-next-line no-console
            console.log(Document);
            void null;
            //     void dispatch(
            //         entityRequest({
            //             body: Document,
            //             callbackError: (error) => {
            //                 dispatch(
            //                     setDocumentIsUploading({
            //                         ...state,
            //                         isLoading: false,
            //                     })
            //                 );

            //                 // eslint-disable-next-line no-console
            //                 console.log('Error callback:', error);
            //             },
            //             callbackSuccess: () => {
            //                 dispatch(
            //                     setDocumentIsUploaded({
            //                         ...state,
            //                         isLoading: false,
            //                         isUploaded: true,
            //                     })
            //                 );
            //             },
            //             entity: entity || 'document/ClubDocumentAdd',
            //             method: 'POST',
            //         })
            //     );
        });
    };

export const updateDialogProperties = (dialogProperties: UpdateDialogProps): DialogActionTypes => ({
    payload: dialogProperties,
    type: UPDATE_DIALOG_PROPERTIES,
});

export const updateDialogFileUploadProperties = (dialogProperties: DialogFileUploadProps): DialogActionTypes => ({
    payload: dialogProperties,
    type: UPDATE_DIALOG_FILE_UPLOAD_PROPERTIES,
});

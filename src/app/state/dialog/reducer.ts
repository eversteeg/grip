import {
    CLOSE_DIALOG,
    CLOSE_DIALOG_FILE_UPLOAD,
    DialogActionTypes,
    DialogFileUploadActionTypes,
    DialogState,
    OPEN_DIALOG,
    OPEN_DIALOG_FILE_UPLOAD,
    SET_DOCUMENT_IS_UPLOADED,
    SET_DOCUMENT_IS_UPLOADING,
    SET_IS_LOADING,
    UPDATE_DIALOG_FILE_UPLOAD_PROPERTIES,
    UPDATE_DIALOG_PROPERTIES,
} from './types';
import { LOG_OUT } from '../user/types';

const initialState: DialogState = {
    dialogFileUploadProps: { isVisible: false } as DialogState['dialogFileUploadProps'],
    dialogProps: { isVisible: false } as DialogState['dialogProps'],
    isLoading: false,
};

export default (state = initialState, action: DialogActionTypes | DialogFileUploadActionTypes): DialogState => {
    switch (action.type) {
        case LOG_OUT:
            return {
                ...initialState,
            };

        case CLOSE_DIALOG:
            return {
                ...state,
                dialogProps: { isVisible: false } as DialogState['dialogProps'],
            };

        case OPEN_DIALOG:
            return {
                ...state,
                dialogProps: {
                    ...action.payload,
                    isVisible: true,
                },
            };

        case SET_IS_LOADING:
            return {
                ...state,
                dialogProps: {
                    ...state.dialogProps,
                    footerButtons: state.dialogProps.footerButtons?.map((footerButton, index) => {
                        if (state.dialogProps.footerButtons?.length === index + 1) {
                            return {
                                ...footerButton,
                                isLoading: action.payload,
                            };
                        }

                        return {
                            ...footerButton,
                            isDisabled: action.payload,
                        };
                    }),
                },
                isLoading: action.payload,
            };

        case SET_DOCUMENT_IS_UPLOADED:
            return {
                ...state,
                dialogFileUploadProps: {
                    ...state.dialogFileUploadProps,
                    isLoading: false,
                    isUploaded: true,
                },
            };

        case SET_DOCUMENT_IS_UPLOADING:
            return {
                ...state,
                dialogFileUploadProps: {
                    ...state.dialogFileUploadProps,
                    isLoading: true,
                },
            };

        case CLOSE_DIALOG_FILE_UPLOAD:
            return {
                ...state,
                dialogFileUploadProps: {
                    isVisible: false,
                } as DialogState['dialogFileUploadProps'],
            };

        case OPEN_DIALOG_FILE_UPLOAD:
            return {
                ...state,
                dialogFileUploadProps: {
                    ...action.payload,
                    isVisible: true,
                },
            };

        case UPDATE_DIALOG_PROPERTIES:
            return {
                ...state,
                dialogProps: {
                    ...state.dialogProps,
                    ...action.payload,
                },
            };

        case UPDATE_DIALOG_FILE_UPLOAD_PROPERTIES:
            return {
                ...state,
                dialogFileUploadProps: {
                    ...state.dialogFileUploadProps,
                    ...action.payload,
                },
            };

        default:
            return state;
    }
};

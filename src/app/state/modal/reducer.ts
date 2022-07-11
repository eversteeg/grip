import {
    CLOSE_MODAL,
    MAX_BODY_HEIGHT,
    ModalActionTypes,
    ModalState,
    OPEN_MODAL,
    SET_MODAL_CHILDREN,
    SET_MODAL_OPTIONS,
} from './types';

const initialState: ModalState = {
    maxBodyHeight: undefined,
    modalChildren: null,
    modalProps: { isVisible: false } as ModalState['modalProps'],
};

export default (state = initialState, action: ModalActionTypes): ModalState => {
    switch (action.type) {
        case CLOSE_MODAL:
            return {
                ...initialState,
                maxBodyHeight: undefined,
                modalProps: { isVisible: false } as ModalState['modalProps'],
            };

        case MAX_BODY_HEIGHT:
            return {
                ...state,
                maxBodyHeight: action.payload,
            };

        case OPEN_MODAL:
            return {
                ...state,
                modalProps: {
                    ...action.payload,
                    isVisible: true,
                },
            };

        case SET_MODAL_CHILDREN:
            return {
                ...state,
                modalChildren: action.payload,
            };

        case SET_MODAL_OPTIONS:
            return {
                ...state,
                modalProps: {
                    ...state.modalProps,
                    options: action.payload,
                },
            };

        default:
            return state;
    }
};

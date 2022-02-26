import { CLOSE_MODAL, ModalActionTypes, ModalState, OPEN_MODAL, SET_MODAL_CHILDREN, SET_MODAL_OPTIONS } from './types';

const initialState: ModalState = {
    modalChildren: null,
    modalProps: { isVisible: false } as ModalState['modalProps'],
};

export default (state = initialState, action: ModalActionTypes): ModalState => {
    switch (action.type) {
        case CLOSE_MODAL:
            return {
                ...initialState,
                modalProps: { isVisible: false } as ModalState['modalProps'],
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

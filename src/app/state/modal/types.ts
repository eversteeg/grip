import { ModalProps } from 'faralley-ui-kit'; // For now, we can reuse the sidepanel props
import { ReactNode } from 'react';

export interface Modal extends Omit<ModalProps, 'isVisible'> {}

export interface ModalState {
    modalChildren: ReactNode;
    modalProps: ModalProps;
}

export const CLOSE_MODAL = 'modal.CLOSE_MODAL';

interface CloseModalAction {
    type: typeof CLOSE_MODAL;
}

export const OPEN_MODAL = 'modal.OPEN_MODAL';

interface OpenModalAction {
    payload: Modal;
    type: typeof OPEN_MODAL;
}

export const SET_MODAL_OPTIONS = 'modal.SET_MODAL_OPTIONS';

interface SetModalOptionsAction {
    payload: ReactNode;
    type: typeof SET_MODAL_OPTIONS;
}

export const SET_MODAL_CHILDREN = 'modal.SET_MODAL_CHILDREN';

interface SetModalChildrenAction {
    payload: ReactNode;
    type: typeof SET_MODAL_CHILDREN;
}

export type ModalActionTypes = OpenModalAction | CloseModalAction | SetModalOptionsAction | SetModalChildrenAction;

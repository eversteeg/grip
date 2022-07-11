/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-use-before-define */
import {
    CLOSE_MODAL,
    MAX_BODY_HEIGHT,
    Modal,
    ModalActionTypes,
    OPEN_MODAL,
    SET_MODAL_CHILDREN,
    SET_MODAL_OPTIONS,
} from './types';
import { ReactNode } from 'react';

export const closeModal = (): ModalActionTypes => ({
    type: CLOSE_MODAL,
});

export const openModal = (modal: Modal): ModalActionTypes => ({
    payload: modal,
    type: OPEN_MODAL,
});

export const setMaxBodyHeight = (maxBodyHeight: string): ModalActionTypes => ({
    payload: maxBodyHeight,
    type: MAX_BODY_HEIGHT,
});

export const setModalOptions = (options: ReactNode): ModalActionTypes => ({
    payload: options,
    type: SET_MODAL_OPTIONS,
});

export const setModalChildren = (children: ReactNode): ModalActionTypes => ({
    payload: children,
    type: SET_MODAL_CHILDREN,
});

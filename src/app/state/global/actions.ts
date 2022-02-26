/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-use-before-define */
import {
    GlobalActionTypes,
    GlobalState,
    SET_ACTIVE_ROUTE,
    SET_CALCULATED_MESSAGEBAR_HEIGHT,
    SET_CALCULATED_TOPBAR_HEIGHT,
    SET_HEADER_CONTENT,
    SET_IS_LOADING,
    SET_IS_RESET_SCROLLING_REQUIRED,
    SET_IS_SIDEBAR_VISIBLE,
} from './types';
import { filterBarHeight } from '../../styles/constants';
import { ReactNode } from 'react';

export const setActiveRoute = (activeRoute: GlobalState['activeRoute']): GlobalActionTypes => ({
    payload: activeRoute,
    type: SET_ACTIVE_ROUTE,
});

export const setCalculatedMessageBarHeight = (calculatedMessageBarHeight: number): GlobalActionTypes => ({
    payload: calculatedMessageBarHeight,
    type: SET_CALCULATED_MESSAGEBAR_HEIGHT,
});

export const resetCalculatedTopBarHeight = (): GlobalActionTypes => ({
    payload: filterBarHeight,
    type: SET_CALCULATED_TOPBAR_HEIGHT,
});

export const setCalculatedTopBarHeight = (calculatedTopBarHeight: number): GlobalActionTypes => ({
    payload: calculatedTopBarHeight,
    type: SET_CALCULATED_TOPBAR_HEIGHT,
});

export const setHeaderContent = (content: ReactNode): GlobalActionTypes => ({
    payload: content,
    type: SET_HEADER_CONTENT,
});

export const setIsLoading = (isLoading: boolean): GlobalActionTypes => ({
    payload: isLoading,
    type: SET_IS_LOADING,
});

export const setIsResetScrollingRequired = (isResetRequired: boolean): GlobalActionTypes => ({
    payload: isResetRequired,
    type: SET_IS_RESET_SCROLLING_REQUIRED,
});

export const setIsSidebarVisible = (isVisible: boolean): GlobalActionTypes => ({
    payload: isVisible,
    type: SET_IS_SIDEBAR_VISIBLE,
});

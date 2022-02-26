import { DialogProps } from 'faralley-ui-kit';
import { ReactNode } from 'react';
import { Translations } from '../language/types';

export interface Dialog extends Omit<DialogProps, 'isVisible'> {}
export interface ActiveRoute {
    metaDescription?: keyof Translations;
    title?: keyof Translations | string;
}

export interface GlobalState {
    activeRoute: ActiveRoute;
    calculatedMessageBarHeight: number;
    calculatedTopBarHeight: number;
    headerContent: ReactNode;
    isLoading: boolean;
    isResetScrollingRequired: boolean;
    isSidebarVisible: boolean;
}

export const SET_ACTIVE_ROUTE = 'global.SET_ACTIVE_ROUTE';

interface SetActiveRouteAction {
    payload: GlobalState['activeRoute'];
    type: typeof SET_ACTIVE_ROUTE;
}

export const SET_CALCULATED_MESSAGEBAR_HEIGHT = 'global.SET_CALCULATED_MESSAGEBAR_HEIGHT';

interface SetCalculatedMessageBarHeightAction {
    payload: GlobalState['calculatedMessageBarHeight'];
    type: typeof SET_CALCULATED_MESSAGEBAR_HEIGHT;
}

export const SET_CALCULATED_TOPBAR_HEIGHT = 'global.SET_CALCULATED_TOPBAR_HEIGHT';

interface SetCalculatedTopBarHeightAction {
    payload: GlobalState['calculatedTopBarHeight'];
    type: typeof SET_CALCULATED_TOPBAR_HEIGHT;
}

export const SET_HEADER_CONTENT = 'global.SET_HEADER_CONTENT';

interface SetHeaderContentAction {
    payload: GlobalState['headerContent'];
    type: typeof SET_HEADER_CONTENT;
}

export const SET_IS_LOADING = 'global.SET_IS_LOADING';

interface SetIsLoadingAction {
    payload: GlobalState['isLoading'];
    type: typeof SET_IS_LOADING;
}

export const SET_IS_RESET_SCROLLING_REQUIRED = 'global.SET_IS_RESET_SCROLLING_REQUIRED';

interface SetIsResetScrollingRequiredAction {
    payload: GlobalState['isResetScrollingRequired'];
    type: typeof SET_IS_RESET_SCROLLING_REQUIRED;
}
export const SET_IS_SIDEBAR_VISIBLE = 'global.SET_IS_SIDEBAR_VISIBLE';

interface SetIsSidebarVisibleAction {
    payload: GlobalState['isSidebarVisible'];
    type: typeof SET_IS_SIDEBAR_VISIBLE;
}

export type GlobalActionTypes =
    | SetActiveRouteAction
    | SetCalculatedMessageBarHeightAction
    | SetCalculatedTopBarHeightAction
    | SetHeaderContentAction
    | SetIsLoadingAction
    | SetIsResetScrollingRequiredAction
    | SetIsSidebarVisibleAction;

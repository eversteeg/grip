/* eslint-disable no-use-before-define */
import {
    CLOSE_SIDE_PANEL,
    OPEN_SIDE_PANEL,
    SET_SIDE_PANEL_CHILDREN,
    SET_SIDE_PANEL_OPTIONS,
    SidePanel,
    SidePanelActionTypes,
} from './types';
import { ReactNode } from 'react';

export const closeSidePanel = (): SidePanelActionTypes => ({
    type: CLOSE_SIDE_PANEL,
});

export const openSidePanel = (sidePanel: SidePanel): SidePanelActionTypes => ({
    payload: sidePanel,
    type: OPEN_SIDE_PANEL,
});

export const setSidePanelOptions = (options: ReactNode): SidePanelActionTypes => ({
    payload: options,
    type: SET_SIDE_PANEL_OPTIONS,
});

export const setSidePanelChildren = (children: ReactNode): SidePanelActionTypes => ({
    payload: children,
    type: SET_SIDE_PANEL_CHILDREN,
});

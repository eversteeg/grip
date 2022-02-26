import { ReactNode } from 'react';
import { SidePanelProps } from 'faralley-ui-kit';

export interface SidePanel extends Omit<SidePanelProps, 'isVisible'> {}

export interface SidePanelState {
    sidePanelChildren: ReactNode;
    sidePanelProps: SidePanelProps;
}

export const CLOSE_SIDE_PANEL = 'sidepanel.CLOSE_SIDE_PANEL';

interface CloseSidePanelAction {
    type: typeof CLOSE_SIDE_PANEL;
}

export const OPEN_SIDE_PANEL = 'sidepanel.OPEN_SIDE_PANEL';

interface OpenSidePanelAction {
    payload: SidePanel;
    type: typeof OPEN_SIDE_PANEL;
}

export const SET_SIDE_PANEL_OPTIONS = 'sidepanel.SET_SIDE_PANEL_OPTIONS';

interface SetSidePanelOptionsAction {
    payload: ReactNode;
    type: typeof SET_SIDE_PANEL_OPTIONS;
}

export const SET_SIDE_PANEL_CHILDREN = 'sidepanel.SET_SIDE_PANEL_CHILDREN';

interface SetSidePanelChildrenAction {
    payload: ReactNode;
    type: typeof SET_SIDE_PANEL_CHILDREN;
}

export type SidePanelActionTypes =
    | OpenSidePanelAction
    | CloseSidePanelAction
    | SetSidePanelOptionsAction
    | SetSidePanelChildrenAction;

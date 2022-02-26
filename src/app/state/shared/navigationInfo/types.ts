// import {
//     DisciplineCase,
//     DisciplineTabIndex,
// } from '../../../competition/discipline/cases/components/tabs/tabsContent/types';
// import { MembersType, SearchTabIndex } from '../../../members/search/components/searchTabs/types';
// import { FreeFieldsTabIndex } from '../../../maintenance/freeFields/components/dropdownFreeFieldsPanel/types';
// import { MemberDetailsTabIndex } from '../../../members/memberDetails/components/types';
// import { TableState } from 'react-table';

export enum NavigationItem {
    DISCIPLINE = 'DISCIPLINE',
    FREEFIELDS = 'FREEFIELDS',
    MEMBER = 'MEMBER',
    SEARCH = 'SEARCH',
}

// export type TableStateType = TableState<MembersType> | TableState<DisciplineCase>;
export type TableStateType = unknown;

export interface NavigationInfoState {
    // activeTab: DisciplineTabIndex | SearchTabIndex | MemberDetailsTabIndex | FreeFieldsTabIndex | null;
    activeTab: null;
    hasUnsavedChanges: boolean;
    isUnsavedChangesDialogVisible: boolean;
    navigationItem: NavigationItem | null;
    tableState: TableStateType | null;
}

export type NavigationInfoProps = Omit<NavigationInfoState, 'hasUnsavedChanges' | 'isUnsavedChangesDialogVisible'>;

export const RESET_NAVIGATION_INFO = 'shared.navigationInfo.RESET_NAVIGATION_INFO';

interface ResetNavigationInfoAction {
    type: typeof RESET_NAVIGATION_INFO;
}

export const SET_NAVIGATION_INFO = 'shared.navigationInfo.SET_NAVIGATION_INFO';

interface SetNavigationInfoAction {
    payload: NavigationInfoProps;
    type: typeof SET_NAVIGATION_INFO;
}

export const SET_HAS_UNSAVED_CHANGES = 'shared.navigationInfo.SET_HAS_UNSAVED_CHANGES';

interface SetHasUnsavedChangesAction {
    payload: boolean;
    type: typeof SET_HAS_UNSAVED_CHANGES;
}

export const SET_IS_UNSAVED_CHANGES_DIALOG_VISIBLE = 'shared.navigationInfo.SET_IS_UNSAVED_CHANGES_DIALOG_VISIBLE';

interface SetIsUnsavedChangesDialogVisibleAction {
    payload: boolean;
    type: typeof SET_IS_UNSAVED_CHANGES_DIALOG_VISIBLE;
}

export type NavigationInfoActionTypes =
    | ResetNavigationInfoAction
    | SetHasUnsavedChangesAction
    | SetIsUnsavedChangesDialogVisibleAction
    | SetNavigationInfoAction;

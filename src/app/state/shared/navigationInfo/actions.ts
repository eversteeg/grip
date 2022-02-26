import {
    NavigationInfoActionTypes,
    NavigationInfoProps,
    RESET_NAVIGATION_INFO,
    SET_HAS_UNSAVED_CHANGES,
    SET_IS_UNSAVED_CHANGES_DIALOG_VISIBLE,
    SET_NAVIGATION_INFO,
} from './types';

export const resetNavigationInfo = (): NavigationInfoActionTypes => ({
    type: RESET_NAVIGATION_INFO,
});

export const setHasUnsavedChanges = (hasUnsavedchanges: boolean): NavigationInfoActionTypes => ({
    payload: hasUnsavedchanges,
    type: SET_HAS_UNSAVED_CHANGES,
});

export const setIsUnsavedChangesDialogVisible = (isVisible: boolean): NavigationInfoActionTypes => ({
    payload: isVisible,
    type: SET_IS_UNSAVED_CHANGES_DIALOG_VISIBLE,
});

export const setNavigationInfo = (navigationInfo: NavigationInfoProps): NavigationInfoActionTypes => ({
    payload: navigationInfo,
    type: SET_NAVIGATION_INFO,
});

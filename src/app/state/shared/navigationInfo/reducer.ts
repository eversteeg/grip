import {
    NavigationInfoActionTypes,
    NavigationInfoState,
    RESET_NAVIGATION_INFO,
    SET_HAS_UNSAVED_CHANGES,
    SET_IS_UNSAVED_CHANGES_DIALOG_VISIBLE,
    SET_NAVIGATION_INFO,
} from './types';

const initialState: NavigationInfoState = {
    activeTab: null,
    hasUnsavedChanges: false,
    isUnsavedChangesDialogVisible: false,
    navigationItem: null,
    tableState: {} as NavigationInfoState['tableState'],
};

export default (state = initialState, action: NavigationInfoActionTypes): NavigationInfoState => {
    switch (action.type) {
        case RESET_NAVIGATION_INFO:
            return initialState;

        case SET_HAS_UNSAVED_CHANGES:
            return { ...state, hasUnsavedChanges: action.payload };

        case SET_IS_UNSAVED_CHANGES_DIALOG_VISIBLE:
            return { ...state, isUnsavedChangesDialogVisible: action.payload };

        case SET_NAVIGATION_INFO:
            return { ...state, ...action.payload };

        default:
            return state;
    }
};

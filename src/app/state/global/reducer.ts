import { filterBarHeight, sidebarVisibleMinWidth } from '../../styles/constants';
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

const initialState: GlobalState = {
    activeRoute: {} as GlobalState['activeRoute'],
    calculatedMessageBarHeight: 0,
    calculatedTopBarHeight: filterBarHeight,
    headerContent: undefined,
    isLoading: false,
    isResetScrollingRequired: false,
    isSidebarVisible: window.innerWidth > sidebarVisibleMinWidth,
};

export default (state = initialState, action: GlobalActionTypes): GlobalState => {
    switch (action.type) {
        case SET_ACTIVE_ROUTE:
            return {
                ...state,
                activeRoute: action.payload,
            };

        case SET_CALCULATED_MESSAGEBAR_HEIGHT:
            return {
                ...state,
                calculatedMessageBarHeight: action.payload,
            };

        case SET_CALCULATED_TOPBAR_HEIGHT:
            return {
                ...state,
                calculatedTopBarHeight: action.payload,
            };

        case SET_HEADER_CONTENT:
            return {
                ...state,
                headerContent: action.payload,
            };

        case SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload,
            };

        case SET_IS_RESET_SCROLLING_REQUIRED:
            return {
                ...state,
                isResetScrollingRequired: action.payload,
            };

        case SET_IS_SIDEBAR_VISIBLE:
            return {
                ...state,
                isSidebarVisible: action.payload,
            };

        default:
            return state;
    }
};

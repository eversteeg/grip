import {
    CLOSE_SIDE_PANEL,
    OPEN_SIDE_PANEL,
    SET_SIDE_PANEL_CHILDREN,
    SET_SIDE_PANEL_OPTIONS,
    SidePanelActionTypes,
    SidePanelState,
} from './types';

const initialState: SidePanelState = {
    sidePanelChildren: null,
    sidePanelProps: {} as SidePanelState['sidePanelProps'],
};

export default (state = initialState, action: SidePanelActionTypes): SidePanelState => {
    switch (action.type) {
        case CLOSE_SIDE_PANEL:
            return initialState;

        case OPEN_SIDE_PANEL:
            return {
                ...state,
                sidePanelProps: {
                    ...action.payload,
                    isVisible: true,
                },
            };

        case SET_SIDE_PANEL_CHILDREN:
            return {
                ...state,
                sidePanelChildren: action.payload,
            };

        case SET_SIDE_PANEL_OPTIONS:
            return {
                ...state,
                sidePanelProps: {
                    ...state.sidePanelProps,
                    options: action.payload,
                },
            };

        default:
            return state;
    }
};

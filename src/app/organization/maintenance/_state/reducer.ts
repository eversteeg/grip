import {
    OrganizationMaintenanceActionTypes,
    OrganizationMaintenanceState,
    RESET_ORGANIZATION,
    SET_IS_LOADING,
    SET_ORGANIZATION_OPTIONS,
} from './types';

const initialState: OrganizationMaintenanceState = {
    isLoading: false,
    organizationOptions: [] as OrganizationMaintenanceState['organizationOptions'],
};

export default (state = initialState, action: OrganizationMaintenanceActionTypes): OrganizationMaintenanceState => {
    switch (action.type) {
        case RESET_ORGANIZATION:
            return initialState;

        case SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload,
            };

        case SET_ORGANIZATION_OPTIONS:
            return {
                ...state,
                organizationOptions: action.payload,
            };

        default:
            return state;
    }
};

import {
    RESET_VAT,
    SET_IS_ADD_VAT_ALLOWED,
    SET_IS_LOADING,
    SET_IS_SAVING,
    SET_IS_VAT_REFRESH_REQUIRED,
    SET_VAT,
    SET_VATTYPE,
    VATMaintenanceActionTypes,
    VATMaintenanceState,
} from './types';

const initialState: VATMaintenanceState = {
    isAddVATAllowed: false,
    isLoading: false,
    isSaving: false,
    isVATRefreshRequired: false,
    vat: [] as VATMaintenanceState['vat'],
    vatType: [] as VATMaintenanceState['vatType'],
};

export default (state = initialState, action: VATMaintenanceActionTypes): VATMaintenanceState => {
    switch (action.type) {
        case RESET_VAT:
            return initialState;

        case SET_IS_ADD_VAT_ALLOWED:
            return {
                ...state,
                isAddVATAllowed: action.payload,
            };

        case SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload,
            };

        case SET_IS_SAVING:
            return {
                ...state,
                isSaving: action.payload,
            };

        case SET_IS_VAT_REFRESH_REQUIRED:
            return {
                ...state,
                isVATRefreshRequired: action.payload,
            };

        case SET_VAT:
            return {
                ...state,
                vat: action.payload,
            };

        case SET_VATTYPE:
            return {
                ...state,
                vatType: action.payload,
            };

        default:
            return state;
    }
};

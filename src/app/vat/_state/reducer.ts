import {
    RESET_VAT,
    SET_IS_ADD_VAT_ALLOWED,
    SET_IS_LOADING,
    SET_IS_SAVING,
    SET_IS_VAT_REFRESH_REQUIRED,
    SET_VAT,
    VATActionTypes,
    VATState,
} from './types';

const initialState: VATState = {
    isAddVATAllowed: false,
    isLoading: false,
    isSaving: false,
    isVATRefreshRequired: false,
    vat: [] as VATState['vat'],
};

export default (state = initialState, action: VATActionTypes): VATState => {
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

        default:
            return state;
    }
};

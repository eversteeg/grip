import {
    RESET_VAT_ITEMS,
    SET_IS_ADD_VAT_ITEM_ALLOWED,
    SET_IS_LOADING,
    SET_IS_SAVING,
    SET_IS_VAT_ITEMS_REFRESH_REQUIRED,
    SET_VAT_ITEMS,
    VATActionTypes,
    VATState,
} from './types';

const initialState: VATState = {
    isAddVATAllowed: false,
    isLoading: false,
    isSaving: false,
    isVATRefreshRequired: false,
    vatItems: [] as VATState['vatItems'],
};

export default (state = initialState, action: VATActionTypes): VATState => {
    switch (action.type) {
        case RESET_VAT_ITEMS:
            return initialState;

        case SET_IS_ADD_VAT_ITEM_ALLOWED:
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

        case SET_IS_VAT_ITEMS_REFRESH_REQUIRED:
            return {
                ...state,
                isVATRefreshRequired: action.payload,
            };

        case SET_VAT_ITEMS:
            return {
                ...state,
                vatItems: action.payload,
            };

        default:
            return state;
    }
};

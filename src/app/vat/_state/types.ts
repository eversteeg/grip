import { VATItem } from '../../../@types/vat/VATItem';

export interface VATState {
    isAddVATAllowed: boolean;
    isLoading: boolean;
    isSaving: boolean;
    isVATRefreshRequired: boolean;
    vatItems: VATItem[];
}

export const RESET_VAT_ITEMS = 'vat.RESET_VAT_ITEMS';

interface ResetVATItemsAction {
    type: typeof RESET_VAT_ITEMS;
}

export const SET_VAT_ITEMS = 'vat.SET_VAT_ITEMS';

interface SetVATItemsAction {
    payload: VATItem[];
    type: typeof SET_VAT_ITEMS;
}

export const SET_IS_ADD_VAT_ITEM_ALLOWED = 'vat.SET_IS_ADD_VAT_ITEM_ALLOWED';

interface SetIsAddVATItemAllowedAction {
    payload: boolean;
    type: typeof SET_IS_ADD_VAT_ITEM_ALLOWED;
}

export const SET_IS_LOADING = 'vat.SET_IS_LOADING';

interface SetIsLoadingAction {
    payload: boolean;
    type: typeof SET_IS_LOADING;
}

export const SET_IS_SAVING = 'vat.SET_IS_SAVING';

interface SetIsSavingAction {
    payload: boolean;
    type: typeof SET_IS_SAVING;
}

export const SET_IS_VAT_ITEMS_REFRESH_REQUIRED = 'vat.SET_IS_VAT_ITEMS_REFRESH_REQUIRED';

interface SetIsVATItemsRefreshRequiredAction {
    payload: boolean;
    type: typeof SET_IS_VAT_ITEMS_REFRESH_REQUIRED;
}

export type VATActionTypes =
    | ResetVATItemsAction
    | SetIsAddVATItemAllowedAction
    | SetIsLoadingAction
    | SetIsSavingAction
    | SetIsVATItemsRefreshRequiredAction
    | SetVATItemsAction;

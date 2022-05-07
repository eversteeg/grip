import { VAT } from '../../../@types/vat/VAT';

export interface VATState {
    isAddVATAllowed: boolean;
    isLoading: boolean;
    isVATRefreshRequired: boolean;
    vat: VAT[];
}

export const RESET_VAT = 'vat.RESET_VAT';

interface ResetVATAction {
    type: typeof RESET_VAT;
}

export const SET_VAT = 'vat.SET_VAT';

interface SetVATAction {
    payload: VAT[];
    type: typeof SET_VAT;
}

export const SET_IS_ADD_VAT_ALLOWED = 'vat.SET_IS_ADD_VAT_ALLOWED';

interface SetIsAddVATAllowedAction {
    payload: boolean;
    type: typeof SET_IS_ADD_VAT_ALLOWED;
}

export const SET_IS_LOADING = 'vat.SET_IS_LOADING';

interface SetIsLoadingAction {
    payload: boolean;
    type: typeof SET_IS_LOADING;
}

export const SET_IS_VAT_REFRESH_REQUIRED = 'vat.SET_IS_VAT_REFRESH_REQUIRED';

interface SetIsVATRefreshRequiredAction {
    payload: boolean;
    type: typeof SET_IS_VAT_REFRESH_REQUIRED;
}

export type VATActionTypes =
    | ResetVATAction
    | SetIsAddVATAllowedAction
    | SetIsLoadingAction
    | SetIsVATRefreshRequiredAction
    | SetVATAction;

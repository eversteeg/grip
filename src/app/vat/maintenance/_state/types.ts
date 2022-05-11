import { VAT } from '../../../../@types/vat/VAT';

export interface VATMaintenanceState {
    isAddVATAllowed: boolean;
    isLoading: boolean;
    isSaving: boolean;
    isVATRefreshRequired: boolean;
    vat: VAT[];
}

export const RESET_VAT = 'vatMaintenance.RESET_VAT';

interface ResetVATAction {
    type: typeof RESET_VAT;
}

export const SET_VAT = 'vatMaintenance.SET_VAT';

interface SetVATAction {
    payload: VAT[];
    type: typeof SET_VAT;
}

export const SET_IS_ADD_VAT_ALLOWED = 'vatMaintenance.SET_IS_ADD_VAT_ALLOWED';

interface SetIsAddVATAllowedAction {
    payload: boolean;
    type: typeof SET_IS_ADD_VAT_ALLOWED;
}

export const SET_IS_LOADING = 'vatMaintenance.SET_IS_LOADING';

interface SetIsLoadingAction {
    payload: boolean;
    type: typeof SET_IS_LOADING;
}

export const SET_IS_SAVING = 'vatMaintenance.SET_IS_SAVING';

interface SetIsSavingAction {
    payload: boolean;
    type: typeof SET_IS_SAVING;
}

export const SET_IS_VAT_REFRESH_REQUIRED = 'vatMaintenance.SET_IS_VAT_REFRESH_REQUIRED';

interface SetIsVATRefreshRequiredAction {
    payload: boolean;
    type: typeof SET_IS_VAT_REFRESH_REQUIRED;
}

export type VATMaintenanceActionTypes =
    | ResetVATAction
    | SetIsAddVATAllowedAction
    | SetIsLoadingAction
    | SetIsSavingAction
    | SetIsVATRefreshRequiredAction
    | SetVATAction;

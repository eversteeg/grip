import { OrganizationOption } from '../../../../@types/organization/OrganizationOption';

export interface OrganizationMaintenanceState {
    isLoading: boolean;
    organizationOptions: OrganizationOption[];
}

export const RESET_ORGANIZATION = 'organizationMaintenance.RESET_VAT';

interface ResetOrganizationAction {
    type: typeof RESET_ORGANIZATION;
}

export const SET_IS_LOADING = 'organizationMaintenance.SET_IS_LOADING';

interface SetIsLoadingAction {
    payload: boolean;
    type: typeof SET_IS_LOADING;
}

export const SET_ORGANIZATION_OPTIONS = 'organizationMaintenance.SET_ORGANIZATION_OPTIONS';

interface SetOrganizationOptionsAction {
    payload: OrganizationOption[];
    type: typeof SET_ORGANIZATION_OPTIONS;
}

export type OrganizationMaintenanceActionTypes =
    | ResetOrganizationAction
    | SetIsLoadingAction
    | SetOrganizationOptionsAction;

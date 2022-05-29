/* eslint-disable @typescript-eslint/no-use-before-define */
import {
    SET_IS_ADD_VAT_ALLOWED,
    SET_IS_LOADING,
    SET_IS_SAVING,
    SET_IS_VAT_REFRESH_REQUIRED,
    SET_VAT,
    VATMaintenanceActionTypes,
} from './types';
import { APIResult } from '../../../../@types/APIResult';
import { backendRequest } from '../../../state/entity/actions';
import { ThunkResult } from '../../../state/store';
import { VAT } from '../../../../@types/vat/VAT';

interface APIDelete {
    data: { vatId: number };
    isSuccess: boolean;
}

export const addVAT =
    (percentage: number, description: string): ThunkResult =>
    (dispatch): void => {
        dispatch(setIsSaving(true));

        dispatch(
            backendRequest({
                body: { description, percentage },
                callbackError: (): void => {
                    dispatch(setIsSaving(false));
                },
                callbackSuccess: ({ hasError }: APIResult): void => {
                    dispatch(setIsVATRefreshRequired(!hasError));
                    dispatch(setIsSaving(false));
                },
                entity: 'vat/maintenance/AddVAT',
                method: 'POST',
            })
        );
    };

export const deleteVAT =
    (VATId: number): ThunkResult =>
    (dispatch): void => {
        dispatch(setIsSaving(true));

        dispatch(
            backendRequest({
                callbackError: (): void => {
                    dispatch(setIsSaving(false));
                },
                callbackSuccess: ({ result }: APIResult): void => {
                    const apiResult: APIDelete = result as APIDelete;
                    dispatch(setIsVATRefreshRequired(apiResult.isSuccess));
                    dispatch(setIsSaving(false));
                },
                entity: 'vat/maintenance/DeleteVAT',
                method: 'DELETE',
                parameters: { vatid: VATId },
            })
        );
    };

export const getVAT =
    (): ThunkResult =>
    (dispatch): void => {
        dispatch(setIsLoading(true));
        dispatch(setIsAddVATAllowed(false));
        dispatch(setIsVATRefreshRequired(false));

        dispatch(
            backendRequest({
                callbackError: (): void => {
                    dispatch(setIsLoading(false));
                },
                callbackSuccess: ({ result }: APIResult): void => {
                    const apiResult: VAT[] = result.data as VAT[];
                    dispatch(setVAT(apiResult));
                    dispatch(setIsAddVATAllowed(result.IsAddAllowed || false));
                    dispatch(setIsLoading(false));
                },
                entity: 'vat/maintenance/VAT',
            })
        );
    };

export const updateVAT =
    (vatid: number, percentage: number, description: string): ThunkResult =>
    (dispatch): void => {
        dispatch(setIsSaving(true));

        dispatch(
            backendRequest({
                body: { description, percentage, vatid },
                callbackError: (): void => {
                    dispatch(setIsSaving(false));
                },
                callbackSuccess: ({ hasError }: APIResult): void => {
                    dispatch(setIsVATRefreshRequired(!hasError));
                    dispatch(setIsSaving(false));
                },
                entity: 'vat/maintenance/UpdateVAT',
                method: 'PUT',
            })
        );
    };

export const setIsAddVATAllowed = (isAllowed: boolean): VATMaintenanceActionTypes => ({
    payload: isAllowed,
    type: SET_IS_ADD_VAT_ALLOWED,
});

export const setIsLoading = (isLoading: boolean): VATMaintenanceActionTypes => ({
    payload: isLoading,
    type: SET_IS_LOADING,
});

export const setIsSaving = (isSaving: boolean): VATMaintenanceActionTypes => ({
    payload: isSaving,
    type: SET_IS_SAVING,
});

export const setIsVATRefreshRequired = (isRefreshRequired: boolean): VATMaintenanceActionTypes => ({
    payload: isRefreshRequired,
    type: SET_IS_VAT_REFRESH_REQUIRED,
});

export const setVAT = (vat: VAT[]): VATMaintenanceActionTypes => ({
    payload: vat,
    type: SET_VAT,
});

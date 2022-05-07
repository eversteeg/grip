/* eslint-disable @typescript-eslint/no-use-before-define */
import { SET_IS_ADD_VAT_ALLOWED, SET_IS_LOADING, SET_IS_VAT_REFRESH_REQUIRED, SET_VAT, VATActionTypes } from './types';
import { APIResult } from '../../../@types/APIResult';
import { entityRequest } from '../../state/entity/actions';
import { setHasError } from '../../state/error/actions';
import { ThunkResult } from '../../state/store';
import { VAT } from '../../../@types/vat/VAT';

interface APIDelete {
    data: { vatId: number };
    isSuccess: boolean;
}

export const addVAT =
    (percentage: number, description: string): ThunkResult =>
    (dispatch): void => {
        dispatch(setIsLoading(true));

        dispatch(
            entityRequest({
                body: { description, percentage },
                callbackError: (): void => {
                    dispatch(setIsLoading(false));
                },
                callbackSuccess: ({ hasError, error }: APIResult): void => {
                    console.log('error', error, hasError);
                    dispatch(setHasError(hasError));
                    dispatch(setIsVATRefreshRequired(!hasError));
                    dispatch(setIsLoading(false));
                },
                entity: 'vat/AddVAT',
                method: 'POST',
            })
        );
    };

export const deleteVAT =
    (VATId: number): ThunkResult =>
    (dispatch): void => {
        dispatch(setIsLoading(true));

        dispatch(
            entityRequest({
                callbackError: (): void => {
                    dispatch(setIsLoading(false));
                },
                callbackSuccess: ({ hasError, result }: APIResult): void => {
                    const apiResult: APIDelete = result as APIDelete;
                    dispatch(setHasError(hasError));
                    dispatch(setIsVATRefreshRequired(apiResult.isSuccess));
                    dispatch(setIsLoading(false));
                },
                entity: 'vat/DeleteVAT',
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
            entityRequest({
                callbackError: (): void => {
                    dispatch(setIsLoading(false));
                },
                callbackSuccess: ({ hasError, result }: APIResult): void => {
                    const apiResult: VAT[] = result.data as VAT[];
                    dispatch(setHasError(hasError));
                    dispatch(setVAT(apiResult));
                    dispatch(setIsAddVATAllowed(result.IsAddAllowed || false));
                    dispatch(setIsLoading(false));
                },
                entity: 'vat/VAT',
            })
        );
    };

export const updateVAT =
    (vatid: number, percentage: number, description: string): ThunkResult =>
    (dispatch): void => {
        dispatch(setIsLoading(true));

        dispatch(
            entityRequest({
                body: { description, percentage, vatid },
                callbackError: (): void => {
                    dispatch(setIsLoading(false));
                },
                callbackSuccess: ({ hasError }: APIResult): void => {
                    dispatch(setHasError(hasError));
                    dispatch(setIsVATRefreshRequired(!hasError));
                    dispatch(setIsLoading(false));
                },
                entity: 'vat/UpdateVAT',
                method: 'PUT',
            })
        );
    };

export const setIsAddVATAllowed = (isAllowed: boolean): VATActionTypes => ({
    payload: isAllowed,
    type: SET_IS_ADD_VAT_ALLOWED,
});

export const setIsLoading = (isLoading: boolean): VATActionTypes => ({
    payload: isLoading,
    type: SET_IS_LOADING,
});

export const setIsVATRefreshRequired = (isRefreshRequired: boolean): VATActionTypes => ({
    payload: isRefreshRequired,
    type: SET_IS_VAT_REFRESH_REQUIRED,
});

export const setVAT = (vat: VAT[]): VATActionTypes => ({
    payload: vat,
    type: SET_VAT,
});

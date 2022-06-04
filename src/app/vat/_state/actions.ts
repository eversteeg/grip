/* eslint-disable @typescript-eslint/no-use-before-define */
import {
    SET_IS_ADD_VAT_ITEM_ALLOWED,
    SET_IS_LOADING,
    SET_IS_SAVING,
    SET_IS_VAT_ITEMS_REFRESH_REQUIRED,
    SET_VAT_ITEMS,
    VATActionTypes,
} from './types';
import { VATItem, VATType } from '../../../@types/vat/VATItem';
import { APIResult } from '../../../@types/APIResult';
import { backendRequest } from '../../state/entity/actions';
import { ThunkResult } from '../../state/store';

interface APIDelete {
    data: { vatId: number };
    isSuccess: boolean;
}

export const addVATItem =
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
                    dispatch(setIsVATItemsRefreshRequired(!hasError));
                    dispatch(setIsSaving(false));
                },
                entity: 'vat/AddVATItem',
                method: 'POST',
            })
        );
    };

export const deleteVATItem =
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
                    dispatch(setIsVATItemsRefreshRequired(apiResult.isSuccess));
                    dispatch(setIsSaving(false));
                },
                entity: 'vat/DeleteVATItem',
                method: 'DELETE',
                parameters: { vatid: VATId },
            })
        );
    };

// export const getVATItem =
//     (): ThunkResult =>
//     (dispatch): void => {
//         dispatch(setIsLoading(true));
//         dispatch(setIsAddVATItemAllowed(false));
//         dispatch(setIsVATItemsRefreshRequired(false));

//         dispatch(
//             backendRequest({
//                 callbackError: (): void => {
//                     dispatch(setIsLoading(false));
//                 },
//                 callbackSuccess: ({ result }: APIResult): void => {
//                     const apiResult: VATItem = result.data as VATItem;
//                     dispatch(setVATItem(apiResult));
//                     dispatch(setIsAddVATItemAllowed(result.IsAddAllowed || false));
//                     dispatch(setIsLoading(false));
//                 },
//                 entity: 'vat/VATItem',
//             })
//         );
//     };

export const getVATItems =
    (isShowAll = false, vatType = VATType.ALL): ThunkResult =>
    (dispatch): void => {
        dispatch(setIsLoading(true));
        dispatch(setIsAddVATItemAllowed(false));
        dispatch(setIsVATItemsRefreshRequired(false));

        dispatch(
            backendRequest({
                callbackError: (): void => {
                    dispatch(setIsLoading(false));
                },
                callbackSuccess: ({ result }: APIResult): void => {
                    const apiResult: VATItem[] = result.data as VATItem[];
                    dispatch(setVATItems(apiResult));
                    dispatch(setIsAddVATItemAllowed(result.IsAddAllowed || false));
                    dispatch(setIsLoading(false));
                },
                entity: 'vat/VATItems',
                parameters: {
                    datefrom: isShowAll ? '1900-01-01' : '', // when absent, falls back to backend default
                    fetchclaim: (vatType === VATType.ALL || vatType === VATType.CLAIM).toString(),
                    fetchconvey: (vatType === VATType.ALL || vatType === VATType.CONVEY).toString(),
                },
            })
        );
    };

export const updateVATItem =
    (vatItem: VATItem): ThunkResult =>
    (dispatch): void => {
        dispatch(setIsSaving(true));
        console.log('updateVATItem', vatItem);

        dispatch(
            backendRequest({
                body: {
                    amount: vatItem.Amount,
                    amountvat: vatItem.AmountVAT,
                    description: vatItem.Description,
                    vatid: vatItem.VATId,
                },
                callbackError: (): void => {
                    dispatch(setIsSaving(false));
                },
                callbackSuccess: ({ hasError }: APIResult): void => {
                    dispatch(setIsVATItemsRefreshRequired(!hasError));
                    dispatch(setIsSaving(false));
                },
                entity: 'vat/UpdateVATItem',
                method: 'PUT',
            })
        );
    };

export const setIsAddVATItemAllowed = (isAllowed: boolean): VATActionTypes => ({
    payload: isAllowed,
    type: SET_IS_ADD_VAT_ITEM_ALLOWED,
});

export const setIsLoading = (isLoading: boolean): VATActionTypes => ({
    payload: isLoading,
    type: SET_IS_LOADING,
});

export const setIsSaving = (isSaving: boolean): VATActionTypes => ({
    payload: isSaving,
    type: SET_IS_SAVING,
});

export const setIsVATItemsRefreshRequired = (isRefreshRequired: boolean): VATActionTypes => ({
    payload: isRefreshRequired,
    type: SET_IS_VAT_ITEMS_REFRESH_REQUIRED,
});

export const setVATItems = (vatItems: VATItem[]): VATActionTypes => ({
    payload: vatItems,
    type: SET_VAT_ITEMS,
});

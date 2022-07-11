/* eslint-disable @typescript-eslint/no-use-before-define */
import { BaseCarTripItem, CarTripItem } from '../../../@types/car/CarTripItem';
import {
    CarActionTypes,
    SET_CAR_TRIP_ITEMS,
    SET_CARS,
    SET_DEFAULT_CAR_ID,
    SET_DEFAULT_STARTING_POINT,
    SET_IS_ADD_CAR_ALLOWED,
    SET_IS_ADD_CAR_TRIP_ITEM_ALLOWED,
    SET_IS_CAR_TRIP_ITEM_MODAL_VISIBLE,
    SET_IS_CAR_TRIP_ITEMS_REFRESH_REQUIRED,
    SET_IS_LOADING,
    SET_IS_SAVING,
} from './types';
import { APIDelete } from '../../../@types/APIDelete';
import { APIResult } from '../../../@types/APIResult';
import { backendRequest } from '../../state/entity/actions';
import { Car } from '../../../@types/car/Car';
import { ThunkResult } from '../../state/store';
import { toNumber } from 'faralley-ui-kit';

export const addCarTripItem =
    (carTrip: BaseCarTripItem): ThunkResult =>
    (dispatch): void => {
        dispatch(setIsSaving(true));

        dispatch(
            backendRequest({
                body: { ...carTrip },
                callbackError: (): void => {
                    dispatch(setIsSaving(false));
                },
                callbackSuccess: ({ hasError }: APIResult): void => {
                    dispatch(setIsCarTripsRefreshRequired(!hasError));
                    dispatch(setIsSaving(false));
                },
                entity: 'car/AddCarTripItem',
                method: 'POST',
            })
        );
    };

export const deleteCarTripItem =
    (tripId: number): ThunkResult =>
    (dispatch): void => {
        dispatch(setIsSaving(true));

        dispatch(
            backendRequest({
                callbackError: (): void => {
                    dispatch(setIsSaving(false));
                },
                callbackSuccess: ({ result }: APIResult): void => {
                    const apiResult: APIDelete = result as APIDelete;
                    dispatch(setIsCarTripsRefreshRequired(apiResult.isSuccess));
                    dispatch(setIsSaving(false));
                },
                entity: 'car/DeleteCarTripItem',
                method: 'DELETE',
                parameters: { tripid: tripId },
            })
        );
    };

export const getCarTripItems =
    (datefrom: string): ThunkResult =>
    (dispatch): void => {
        dispatch(setIsLoading(true));
        dispatch(setIsAddCarTripAllowed(false));
        dispatch(setIsCarTripsRefreshRequired(false));

        dispatch(
            backendRequest({
                callbackError: (): void => {
                    dispatch(setIsLoading(false));
                },
                callbackSuccess: ({ result }: APIResult): void => {
                    const apiResult: CarTripItem[] = result.data as CarTripItem[];
                    dispatch(setCarTripItems(apiResult));
                    dispatch(setIsAddCarTripAllowed(result.IsAddAllowed || false));
                    dispatch(setIsLoading(false));
                },
                entity: 'car/CarTripItems',
                parameters: {
                    datefrom,
                },
            })
        );
    };

export const getCars =
    (activeOnly = true): ThunkResult =>
    (dispatch): void => {
        dispatch(setIsLoading(true));

        dispatch(
            backendRequest({
                callbackError: (): void => {
                    dispatch(setIsLoading(false));
                },
                callbackSuccess: ({ result }: APIResult): void => {
                    const apiResult: Car[] = result.data as Car[];
                    dispatch(setCars(apiResult));
                    dispatch(setIsAddCarAllowed(result.IsAddAllowed || false));
                    dispatch(setIsLoading(false));
                },
                entity: 'car/CarItems',
                parameters: {
                    activeonly: activeOnly,
                },
            })
        );
    };

export const getDefaultCarId =
    (): ThunkResult =>
    (dispatch): void => {
        dispatch(setIsLoading(true));

        interface APIResultDefaultCarId extends APIResult {
            result: {
                data: {
                    carid: string;
                };
            };
        }

        dispatch(
            backendRequest({
                callbackError: (): void => {
                    dispatch(setIsLoading(false));
                },
                callbackSuccess: ({ result }: APIResultDefaultCarId): void => {
                    const apiResult: number = toNumber(result.data.carid);
                    dispatch(setDefaultCarId(apiResult));
                    dispatch(setIsLoading(false));
                },
                entity: 'car/DefaultCarId',
            })
        );
    };

export const getDefaultStartingPoint =
    (): ThunkResult =>
    (dispatch): void => {
        dispatch(setIsLoading(true));

        interface APIResultDefaultStartingPoint extends APIResult {
            result: {
                data: {
                    startingpoint: string;
                };
            };
        }

        dispatch(
            backendRequest({
                callbackError: (): void => {
                    dispatch(setIsLoading(false));
                },
                callbackSuccess: ({ result }: APIResultDefaultStartingPoint): void => {
                    const apiResult: string = result.data.startingpoint;
                    dispatch(setDefaultStartingPoint(apiResult));
                    dispatch(setIsLoading(false));
                },
                entity: 'car/DefaultStartingPoint',
            })
        );
    };

// export const updateVATItem =
//     (vatItem: VATItem): ThunkResult =>
//     (dispatch): void => {
//         dispatch(setIsSaving(true));

//         dispatch(
//             backendRequest({
//                 body: { ...vatItem },
//                 callbackError: (): void => {
//                     dispatch(setIsSaving(false));
//                 },
//                 callbackSuccess: ({ hasError }: APIResult): void => {
//                     dispatch(setIsCarTripsRefreshRequired(!hasError));
//                     dispatch(setIsSaving(false));
//                 },
//                 entity: 'vat/UpdateVATItem',
//                 method: 'PUT',
//             })
//         );
//     };

export const setCarTripItems = (items: CarTripItem[]): CarActionTypes => ({
    payload: items,
    type: SET_CAR_TRIP_ITEMS,
});

export const setCars = (items: Car[]): CarActionTypes => ({
    payload: items,
    type: SET_CARS,
});

export const setDefaultCarId = (defaultCarId: number): CarActionTypes => ({
    payload: defaultCarId,
    type: SET_DEFAULT_CAR_ID,
});

export const setDefaultStartingPoint = (defaultStartingPoint: string): CarActionTypes => ({
    payload: defaultStartingPoint,
    type: SET_DEFAULT_STARTING_POINT,
});

export const setIsAddCarAllowed = (isAllowed: boolean): CarActionTypes => ({
    payload: isAllowed,
    type: SET_IS_ADD_CAR_ALLOWED,
});

export const setIsAddCarTripAllowed = (isAllowed: boolean): CarActionTypes => ({
    payload: isAllowed,
    type: SET_IS_ADD_CAR_TRIP_ITEM_ALLOWED,
});

export const setIsCarTripModalVisible = (isVisible: boolean): CarActionTypes => ({
    payload: isVisible,
    type: SET_IS_CAR_TRIP_ITEM_MODAL_VISIBLE,
});

export const setIsCarTripsRefreshRequired = (isRefreshRequired: boolean): CarActionTypes => ({
    payload: isRefreshRequired,
    type: SET_IS_CAR_TRIP_ITEMS_REFRESH_REQUIRED,
});

export const setIsLoading = (isLoading: boolean): CarActionTypes => ({
    payload: isLoading,
    type: SET_IS_LOADING,
});

export const setIsSaving = (isSaving: boolean): CarActionTypes => ({
    payload: isSaving,
    type: SET_IS_SAVING,
});

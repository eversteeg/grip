import { CarTripItem } from '../../../@types/car/CarTripItem';

export interface CarState {
    carTripItems: CarTripItem[];
    isAddCarTripAllowed: boolean;
    isCarTripsRefreshRequired: boolean;
    isLoading: boolean;
    isSaving: boolean;
}

export const RESET_CAR_TRIP_ITEMS = 'car.RESET_CAR_TRIP_ITEMS';

interface ResetCarTripItemsAction {
    type: typeof RESET_CAR_TRIP_ITEMS;
}

export const SET_CAR_TRIP_ITEMS = 'car.SET_CAR_TRIP_ITEMS';

interface SetCarTripItemsAction {
    payload: CarTripItem[];
    type: typeof SET_CAR_TRIP_ITEMS;
}

export const SET_IS_ADD_CAR_TRIP_ITEM_ALLOWED = 'car.SET_IS_ADD_CAR_TRIP_ITEM_ALLOWED';

interface SetIsAddCarTripItemAllowedAction {
    payload: boolean;
    type: typeof SET_IS_ADD_CAR_TRIP_ITEM_ALLOWED;
}

export const SET_IS_CAR_TRIP_ITEMS_REFRESH_REQUIRED = 'car.SET_IS_CAR_TRIP_ITEMS_REFRESH_REQUIRED';

interface SetIsCarTripItemsRefreshRequiredAction {
    payload: boolean;
    type: typeof SET_IS_CAR_TRIP_ITEMS_REFRESH_REQUIRED;
}

export const SET_IS_LOADING = 'car.SET_IS_LOADING';

interface SetIsLoadingAction {
    payload: boolean;
    type: typeof SET_IS_LOADING;
}

export const SET_IS_SAVING = 'car.SET_IS_SAVING';

interface SetIsSavingAction {
    payload: boolean;
    type: typeof SET_IS_SAVING;
}
export type CarActionTypes =
    | ResetCarTripItemsAction
    | SetCarTripItemsAction
    | SetIsAddCarTripItemAllowedAction
    | SetIsCarTripItemsRefreshRequiredAction
    | SetIsLoadingAction
    | SetIsSavingAction;

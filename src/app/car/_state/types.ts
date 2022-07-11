import { Car } from '../../../@types/car/Car';
import { CarTripItem } from '../../../@types/car/CarTripItem';

export interface CarState {
    carTripItems: CarTripItem[];
    cars: Car[];
    defaultCarId: number;
    defaultStartingPoint: string;
    isAddCarAllowed: boolean;
    isAddCarTripAllowed: boolean;
    isCarTripModalVisible: boolean;
    isCarTripsRefreshRequired: boolean;
    isLoading: boolean;
    isSaving: boolean;
}

export const RESET_CAR_TRIP_ITEMS = 'car.RESET_CAR_TRIP_ITEMS';

interface ResetCarTripItemsAction {
    type: typeof RESET_CAR_TRIP_ITEMS;
}

export const SET_CARS = 'car.SET_CARS';

interface SetCarsAction {
    payload: Car[];
    type: typeof SET_CARS;
}

export const SET_CAR_TRIP_ITEMS = 'car.SET_CAR_TRIP_ITEMS';

interface SetCarTripItemsAction {
    payload: CarTripItem[];
    type: typeof SET_CAR_TRIP_ITEMS;
}

export const SET_DEFAULT_CAR_ID = 'car.SET_DEFAULT_CAR_ID';

interface SetDefaultCarIdAction {
    payload: number;
    type: typeof SET_DEFAULT_CAR_ID;
}

export const SET_DEFAULT_STARTING_POINT = 'car.SET_DEFAULT_STARTING_POINT';

interface SetDefaultStartingPointAction {
    payload: string;
    type: typeof SET_DEFAULT_STARTING_POINT;
}

export const SET_IS_ADD_CAR_ALLOWED = 'car.SET_IS_ADD_CAR_ALLOWED';

interface SetIsAddCarAllowedAction {
    payload: boolean;
    type: typeof SET_IS_ADD_CAR_ALLOWED;
}

export const SET_IS_ADD_CAR_TRIP_ITEM_ALLOWED = 'car.SET_IS_ADD_CAR_TRIP_ITEM_ALLOWED';

interface SetIsAddCarTripItemAllowedAction {
    payload: boolean;
    type: typeof SET_IS_ADD_CAR_TRIP_ITEM_ALLOWED;
}

export const SET_IS_CAR_TRIP_ITEM_MODAL_VISIBLE = 'car.SET_IS_CAR_TRIP_ITEM_MODAL_VISIBLE';

interface SetIsCarTripItemModalVisibleAction {
    payload: boolean;
    type: typeof SET_IS_CAR_TRIP_ITEM_MODAL_VISIBLE;
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
    | SetCarsAction
    | SetCarTripItemsAction
    | SetDefaultCarIdAction
    | SetDefaultStartingPointAction
    | SetIsAddCarAllowedAction
    | SetIsAddCarTripItemAllowedAction
    | SetIsCarTripItemModalVisibleAction
    | SetIsCarTripItemsRefreshRequiredAction
    | SetIsLoadingAction
    | SetIsSavingAction;

import {
    CarActionTypes,
    CarState,
    RESET_CAR_TRIP_ITEMS,
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

const initialState: CarState = {
    carTripItems: [] as CarState['carTripItems'],
    cars: [] as CarState['cars'],
    defaultCarId: -1,
    defaultStartingPoint: '',
    isAddCarAllowed: false,
    isAddCarTripAllowed: false,
    isCarTripModalVisible: false,
    isCarTripsRefreshRequired: false,
    isLoading: false,
    isSaving: false,
};

export default (state = initialState, action: CarActionTypes): CarState => {
    switch (action.type) {
        case RESET_CAR_TRIP_ITEMS:
            return initialState;

        case SET_CAR_TRIP_ITEMS:
            return {
                ...state,
                carTripItems: action.payload,
            };

        case SET_CARS:
            return {
                ...state,
                cars: action.payload,
            };

        case SET_DEFAULT_CAR_ID:
            return {
                ...state,
                defaultCarId: action.payload,
            };

        case SET_DEFAULT_STARTING_POINT:
            return {
                ...state,
                defaultStartingPoint: action.payload,
            };

        case SET_IS_ADD_CAR_ALLOWED:
            return {
                ...state,
                isAddCarAllowed: action.payload,
            };

        case SET_IS_ADD_CAR_TRIP_ITEM_ALLOWED:
            return {
                ...state,
                isAddCarTripAllowed: action.payload,
            };

        case SET_IS_CAR_TRIP_ITEM_MODAL_VISIBLE:
            return {
                ...state,
                isCarTripModalVisible: action.payload,
            };

        case SET_IS_CAR_TRIP_ITEMS_REFRESH_REQUIRED:
            return {
                ...state,
                isCarTripsRefreshRequired: action.payload,
            };

        case SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload,
            };

        case SET_IS_SAVING:
            return {
                ...state,
                isSaving: action.payload,
            };

        default:
            return state;
    }
};

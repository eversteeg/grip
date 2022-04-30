import { EntityActionTypes, EntityState, SET_IS_TOKEN_BEING_REFRESHED } from './types';
import { LOG_OUT } from '../user/types';

const initialState: EntityState = {
    isTokenBeingRefreshed: false,
};

export default (state = initialState, action: EntityActionTypes): EntityState => {
    switch (action.type) {
        case LOG_OUT:
            return {
                ...initialState,
            };

        case SET_IS_TOKEN_BEING_REFRESHED:
            return {
                ...state,
                isTokenBeingRefreshed: action.payload,
            };

        default:
            return state;
    }
};

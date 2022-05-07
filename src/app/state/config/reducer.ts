import { ConfigActionTypes, ConfigState, SET_CONFIG, SET_IS_LOADING } from './types';

const initialState: ConfigState = {
    authenticationUrl: '',
    baseEntity: '',
    baseUrl: '',
    clientSecret: '',
    gripPassword: '',
    gripUsername: '',
    isLoading: true,
    reCaptchaSiteKey: '',
    replyAddressGrip: '',
};

export default (state = initialState, action: ConfigActionTypes): ConfigState => {
    switch (action.type) {
        case SET_CONFIG:
            return {
                ...state,
                ...action.payload,
            };

        case SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload,
            };

        default:
            return state;
    }
};

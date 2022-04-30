export interface ConfigState extends Config {
    isLoading: boolean;
}

export interface Config {
    authenticationUrl: string;
    baseEntity: string;
    baseUrl: string;
    clientSecret: string;
    reCaptchaSiteKey: string;
    replyAddressGrip: string;
}

export const SET_CONFIG = 'config.SET_CONFIG';

interface SetConfigAction {
    payload: Config;
    type: typeof SET_CONFIG;
}

export const SET_IS_LOADING = 'config.SET_IS_LOADING';

interface SetIsLoadingAction {
    payload: boolean;
    type: typeof SET_IS_LOADING;
}

export type ConfigActionTypes = SetConfigAction | SetIsLoadingAction;

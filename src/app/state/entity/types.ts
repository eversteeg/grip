import { LogoutAction } from '../user/types';
import { Parameters } from '../helpers';

export interface EntityState {
    isTokenBeingRefreshed: boolean;
}

export type Method = 'DELETE' | 'GET' | 'POST' | 'PUT';

export interface EntityRequest {
    // eslint-disable-next-line @typescript-eslint/ban-types
    body?: object;
    /* eslint-disable @typescript-eslint/no-explicit-any */
    callbackError: (...args: any[]) => any;
    callbackSuccess: (...args: any[]) => any;
    /* eslint-enable */
    entity: string;
    isPublic?: boolean;
    method?: Method;
    parameters?: Parameters;
}

export const SET_IS_TOKEN_BEING_REFRESHED = 'entity.SET_IS_TOKEN_BEING_REFRESHED';

interface SetIsTokenBeingRefreshed {
    payload: boolean;
    type: typeof SET_IS_TOKEN_BEING_REFRESHED;
}

export type EntityActionTypes = LogoutAction | SetIsTokenBeingRefreshed;

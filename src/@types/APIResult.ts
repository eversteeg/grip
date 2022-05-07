import { Error } from './error/Error';

export interface APIData {
    IsAddAllowed?: boolean;
    data: unknown;
}

export interface APIResult {
    error: Error;
    hasError: boolean;
    result: APIData;
}

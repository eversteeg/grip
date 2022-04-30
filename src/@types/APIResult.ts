import { Error } from './error/Error';

interface APIData {
    data: unknown;
}

export interface APIResult {
    error: Error;
    hasError: boolean;
    result: APIData;
}

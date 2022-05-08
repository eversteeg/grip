export enum ErrorType {
    FUNCTION = 'FUNCTION',
    SERVER = 'SERVER',
    SQL = 'SQL',
}

export interface Error {
    code: string;
    description: string;
    type: ErrorType;
}

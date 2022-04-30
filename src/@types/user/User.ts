import { TokenInformation } from './TokenInformation';

export enum AUTH_METHOD {
    HASHED = 'hashed',
    NONHASHED = 'nonhashed',
}

export interface User {
    AuthMethod: AUTH_METHOD;
    BeginDate: Date;
    EndDate: Date | null;
    IsBlackListed: boolean;
    IsBlocked: boolean;
    Remarks: string | null;
    TokenInformation: TokenInformation;
    UserId: number;
    Username: string;
}

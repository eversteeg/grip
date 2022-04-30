export interface TokenInformation {
    accessToken: string;
    expirationTimestamp: Date;
    refreshToken: string;
    refreshTokenExpirationTimestamp: Date;
}

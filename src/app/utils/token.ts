import { currentDate, isEmpty, toDate } from 'faralley-ui-kit';
import { decryptData, encryptData } from './crypting';
import { isExpired } from './dateFunctions';
import { LOCAL_STORAGE } from '../globals/storage';
import moment from 'moment';
import { PlainData } from 'simple-crypto-js';
import { SYSTEM_KEY } from '../globals/constants';
import { TokenInformation } from '../../@types/user/TokenInformation';

export interface LocalTokenStorage {
    timestamp: string; // Used for expire purposes
    token: string;
    value: string; // This will contain the encrypted object (TokenObject)
}

export const setLocalTokenStorage = (TokenObject: TokenInformation): void => {
    if (!isEmpty(TokenObject)) {
        // Double stringify so we can have the token separate in the localStorage.
        // That one will only be used for debugging purposes and not for actual calls!!
        // Can not use Date constructor due to browser differences
        const expirationDate = moment(TokenObject.expirationTimestamp) || moment();
        const refreshExpirationDate = toDate(TokenObject.refreshTokenExpirationTimestamp);

        if (expirationDate !== null && refreshExpirationDate !== null) {
            const tokenObject: LocalTokenStorage = {
                timestamp: expirationDate.toISOString(),
                token:
                    process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'
                        ? TokenObject.accessToken
                        : '',
                value: encryptData(
                    JSON.stringify({
                        accessToken: TokenObject.accessToken,
                        expirationTimestamp: expirationDate.toISOString(),
                        refreshToken: TokenObject.refreshToken,
                        refreshTokenExpirationTimestamp: refreshExpirationDate.toISOString(),
                    }),
                    SYSTEM_KEY
                ),
            };

            localStorage.setItem(LOCAL_STORAGE.tokenInformation, JSON.stringify(tokenObject));
        } else {
            localStorage.setItem(LOCAL_STORAGE.tokenInformation, JSON.stringify(''));
        }
    }
};

export const deleteLocalTokenStorage = (): void => {
    localStorage.removeItem(LOCAL_STORAGE.tokenInformation);
};

export const getLocalTokenStorage = (): LocalTokenStorage => {
    let localTokenStorage = {} as LocalTokenStorage;

    if (
        localStorage.getItem(LOCAL_STORAGE.tokenInformation) &&
        localStorage.getItem(LOCAL_STORAGE.tokenInformation) !== null
    ) {
        localTokenStorage = JSON.parse(localStorage.getItem(LOCAL_STORAGE.tokenInformation) || '');
    }

    return localTokenStorage;
};

export const getTokenInformation = (): TokenInformation => {
    const emptyToken = {} as TokenInformation;
    let tokenInformation = {} as PlainData;

    if (!isEmpty(getLocalTokenStorage())) {
        // First get the parsed content and then decrypt it
        tokenInformation = decryptData(getLocalTokenStorage().value, SYSTEM_KEY);
    }

    return tokenInformation && !isEmpty(tokenInformation) ? (tokenInformation as TokenInformation) : emptyToken;
};

export const isLocalTokenExpired = (): boolean => {
    const tokenObject = getLocalTokenStorage();

    return toDate(tokenObject.timestamp) !== null && (toDate(tokenObject.timestamp) || currentDate()) < currentDate();
};

export const isTokenValid = (): boolean => {
    const { accessToken, expirationTimestamp }: TokenInformation = getTokenInformation();

    if (!accessToken) {
        return false;
    }

    return toDate(expirationTimestamp) !== null && !isExpired(toDate(expirationTimestamp) || currentDate());
};

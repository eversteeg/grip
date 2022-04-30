import SimpleCrypto, { PlainData } from 'simple-crypto-js';

export const decryptData = (data: string, secret: string): PlainData => {
    const simpleCrypto = new SimpleCrypto(secret);

    return simpleCrypto.decrypt(data);
};

export const encryptData = (data: string, secret: string): string => {
    const simpleCrypto = new SimpleCrypto(secret);

    return simpleCrypto.encrypt(data);
};

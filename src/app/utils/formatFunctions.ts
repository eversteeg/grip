import { EMPTY_DISPLAY_VALUE_SELECTION } from '../globals/constants';

// eslint-disable-next-line import/prefer-default-export
export const formatZipCode = (zipcode: string | null): string => {
    const numericPattern = /^[1-9][0-9]{3}/;
    const alphaPattern = /[A-z]{2}$/;

    if (zipcode) {
        const numericMatch = numericPattern.exec(zipcode);
        const alphaMatch = alphaPattern.exec(zipcode);

        if (numericMatch && numericMatch.length !== 0 && alphaMatch && alphaMatch.length !== 0) {
            return `${numericMatch[0]} ${alphaMatch[0].toUpperCase()}`;
        }
    }

    return zipcode || EMPTY_DISPLAY_VALUE_SELECTION;
};

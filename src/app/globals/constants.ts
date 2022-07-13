// Constants should be capitalized
export const APP_TITLE = 'Grip';
export const DEFAULT_COUNTRY_CODE = 'NL';
export const EMPTY_DISPLAY_VALUE_SELECTION = ''; // Will be used to display when the data is empty
export const EMPTY_VALUE = ''; // Will be used whenever something is required which is not null or undefined
export const EMPTY_VALUE_SELECTION = -1; // Will be used as value when the data is empty. This is a common value in the backend for a non-selection
export const SYSTEM_DATE_FORMAT = 'YYYY-MM-DD';
export const SYSTEM_TIME_FORMAT = 'HH:mm';
export const SYSTEM_KEY = 'GRIP'; // Can be used for several reasons
export const TABLE_NR_OF_ROWS_SMALL = 3; // Used for displaying in table skeletons for instance
export const TABLE_DEFAULT_PAGE_SIZE = 20;
export const TABLE_PAGE_SIZE_DIALOG = 10;
export const TABLE_PAGE_SIZE_SIDEPANEL = 10;
export const TABLE_PAGE_SIZE_SMALL = 5;
export const ZIPCODE_MAX_LENGTH = 15;
export const ZIPCODE_MAX_LENGTH_NL = 7;

export enum EDIT_MODE {
    ADD = 'ADD',
    DELETE = 'DELETE',
    EDIT = 'EDIT',
}

export const maxInputWidth = {
    long: 255,
    medium: 64,
    short: 32,
    streetName: 125,
    textDefault: 100,
    xlong: 1024,
    xshort: 20,
};

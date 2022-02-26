import { generateMedia } from 'styled-media-query';

export const customMedia = generateMedia({
    huge: '1440px',
    large: '1370px',
    medium: '768px',
    small: '450px',
});

export const unsupportedWidth = 768; // smartphoneFormatMaxWidth = 768, tabletFormatMaxWidth = 1024, laptopFormatMaxWidth = 1440;
export const sidebarVisibleMinWidth = 1370;
export const maxWidthDetail = 1440;
export const maxWidth = 2880;

export const columnWidths = {
    amount: 128,
    boolean: 64,
    buttonColumn: 128,
    date: 128,
    gender: 70,
    genderText: 100,
    icon: 44,
    matchNumber: 110,
    matchResult: 128,
    number: 40,
    relationCode: 128,
    relationCodeAbbreviated: 86, // Based on NMMW03V as code
    shirtNumber: 64,
    size120: 120,
    size130: 130,
    status: 64,
    teamLogo: 32,
    time: 64,
    year: 64,
    zipcode: 100,
};

export const maxInputLengths = {
    chars1024: 1024,
    chars128: 128,
    chars22: 22,
    chars255: 255,
    chars32: 32,
    chars64: 64,
    externalMatchId: 8,
};

export const colorNegativeAmount = 'red';
export const filterBarHeight = 80;
export const memberHeaderHeight = 104;
export const menuBarHeight = 52;
export const searchTabsHeaderHeight = 54;
export const sideBarWidth = 260;
export const teamHeaderHeight = 104;

export const pageLayout = {
    bottomPadding: 40,
    sidePaddingLarge: 40,
    sidePaddingMedium: 24,
    sidePaddingSmall: 16,
    topPadding: 20,
};
export const ZIndex = {
    content: 1,
    filterBar: 3,
    header: 2,
    messageBar: 100,
    overlayWrapper: 4,
    sidePanelOverlay: 5,
    sidebar: 6,
};

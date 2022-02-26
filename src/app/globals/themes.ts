export type Themes = 'cyrillic' | 'cyrillicdark';

export const THEMES: {
    [Theme in Themes]: Theme;
} = {
    cyrillic: 'cyrillic',
    cyrillicdark: 'cyrillicdark',
};

export const isTheme = (theme: string): theme is Themes => Object.prototype.hasOwnProperty.call(THEMES, theme);

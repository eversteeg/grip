export type Themes = 'basic' | 'dark';

export const THEMES: {
    [Theme in Themes]: Theme;
} = {
    basic: 'basic',
    dark: 'dark',
};

export const isTheme = (theme: string): theme is Themes => Object.prototype.hasOwnProperty.call(THEMES, theme);

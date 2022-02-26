import { ReactNode } from 'react';

export enum ContentWidth {
    DEFAULT = 'DEFAULT',
    DETAIL = 'DETAIL',
    FULL = 'FULL',
}

export interface Route {
    component: ReactNode;
    exact: boolean;
    layoutProps?: {
        contentWidth?: ContentWidth;
        hasLogo?: boolean;
        info?: ReactNode;
    };
    path: string;
}

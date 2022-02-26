import { ContentWidth } from './Route';
import { IconType } from 'faralley-ui-kit';
import { ReactNode } from 'react';
import { Translations } from '../app/state/language/types';

export interface BasePrivateRoute {
    exact: boolean;
    iconType: IconType;
    isResetNavigationRequired?: boolean;
    isVisible?: boolean;
    isVisibleInMenu?: boolean;
    layoutProps?: {
        contentWidth?: ContentWidth;
    };
    metaDescription?: keyof Translations; // Used to set meta tags with react-helmet
    onClick?: () => void;
    path: string;
    text: keyof Translations;
}

export interface GlobalPrivateRoute extends BasePrivateRoute {
    component: ReactNode;
}

export interface NestedPrivateRoute extends BasePrivateRoute {
    children: NestedPrivateRouteChild[];
}

export interface NestedPrivateRouteChild extends Omit<GlobalPrivateRoute, 'iconType'> {}

export type PrivateRoute = GlobalPrivateRoute | NestedPrivateRoute;

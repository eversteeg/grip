import { Icon, IconType } from 'faralley-ui-kit';
import React, { FunctionComponent } from 'react';
import { Image } from '../../../../@types/document/Image';

export interface AppLogoProps {
    logo?: Image | null;
}

const AppLogo: FunctionComponent<AppLogoProps> = ({ logo }) => (
    <>{logo && logo.Url ? <img alt="" src={logo.Url} /> : <Icon type={IconType.SHIELD} />}</>
);

export default AppLogo;

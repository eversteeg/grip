import React, { FunctionComponent } from 'react';
import { ReactSVG } from 'react-svg';
import { StyledSVG } from './SVG.sc';

export interface SVGProps {
    type:
        | 'club-on-mobile'
        | 'default-organisation'
        | 'default-person'
        | 'error'
        | 'logo'
        | 'message-send'
        | 'password-request'
        | 'password-reset-succes'
        | 'user-not-found';
}

const SVG: FunctionComponent<SVGProps> = ({ type }) => (
    <StyledSVG>
        <ReactSVG src={`/assets/images/svg/${type}.svg`} />
    </StyledSVG>
);

export default SVG;

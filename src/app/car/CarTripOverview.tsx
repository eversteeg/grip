import React, { FunctionComponent } from 'react';
import useSelector from '../state/useSelector';

const CarTripOverview: FunctionComponent = () => {
    const locale = useSelector(({ language }) => language.locale);
    console.log('locale', locale);

    return <div>{'trippies'}</div>;
};

export default CarTripOverview;

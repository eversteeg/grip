import { isEmpty, toNumber } from 'faralley-ui-kit';
import { BaseCarTripItem } from '../../../@types/car/CarTripItem';
import { Car } from '../../../@types/car/Car';
import { EMPTY_VALUE_SELECTION } from '../../globals/constants';

export const getSelectedCar = (cars: Car[], carId: number, returnFirstCar = false): Car => {
    const foundCar = cars.find((item) => toNumber(item.CarId.toString()) === toNumber(carId.toString()));

    if (foundCar) {
        return foundCar;
    }

    return returnFirstCar ? cars[0] : ({} as Car);
};

export const isValidInput = (details: BaseCarTripItem): boolean =>
    !isEmpty(details.Departure) &&
    !isEmpty(details.Destination) &&
    !isEmpty(details.TripGoal) &&
    !isEmpty(details.Distance) &&
    details.Distance !== 0 &&
    details.CarId !== EMPTY_VALUE_SELECTION;

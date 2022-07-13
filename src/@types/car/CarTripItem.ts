import { Moment } from 'moment';

export interface BaseCarTripItem {
    CarId: number;
    Departure: string;
    Destination: string;
    Distance: number;
    MilageStart: number;
    TripDate: Moment | Date;
    TripGoal: string;
}

export interface CarTripItem extends BaseCarTripItem {
    IsDeleteAllowed: boolean;
    IsEditAllowed: boolean;
    IsEditMilageStartAllowed: boolean;
    LicensePlate: string;
    TripDate: Date;
    TripId: number;
}

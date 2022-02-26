import moment from 'moment';

export const isExpired = (date: Date): boolean => moment(date).isBefore(moment());

export default isExpired;

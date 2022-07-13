import { formatAsSystemDate, SingleDatePicker, SingleDatePickerVariant, Skeleton } from 'faralley-ui-kit';
import moment, { Moment } from 'moment';
import React, { FunctionComponent, useCallback, useState } from 'react';
import LocalizedString from '../../components/atoms/localizedString/LocalizedString';
import { SkeletonWrapper } from './DatePicker.sc';
import useSelector from '../../state/useSelector';

export interface DatePickerProps {
    filterDate: string;
    isLoading: boolean;
    setSelectedDateFrom: (date: string) => void;
}

const DatePicker: FunctionComponent<DatePickerProps> = ({ filterDate, isLoading, setSelectedDateFrom }) => {
    const locale = useSelector(({ language }) => language.locale);
    const [isFocused, setIsFocused] = useState(false);
    const isOutsideRange = (day: Moment): boolean => day.isAfter(moment(), 'day');

    const onDateChangeCallback = useCallback((date: Moment | null) => {
        if (date) {
            setSelectedDateFrom(formatAsSystemDate(date));
        }
    }, []);

    const onFocusChangeCallback = useCallback(({ focused }) => {
        setIsFocused(focused);
    }, []);

    return (
        <>
            {isLoading ? (
                <SkeletonWrapper>
                    <Skeleton height={48} />
                </SkeletonWrapper>
            ) : (
                <SingleDatePicker
                    date={moment(filterDate).locale(locale)}
                    id="cartrip-filter"
                    isFocused={isFocused}
                    isOutsideRange={isOutsideRange}
                    label={<LocalizedString value="From" />}
                    onDateChange={onDateChangeCallback}
                    onFocusChange={onFocusChangeCallback}
                    variant={SingleDatePickerVariant.COMPACT}
                />
            )}
        </>
    );
};

export default DatePicker;

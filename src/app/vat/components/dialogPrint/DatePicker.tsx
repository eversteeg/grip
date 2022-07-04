import moment, { Moment } from 'moment';
import React, { FunctionComponent, useCallback, useState } from 'react';
import { DateRangePicker } from 'faralley-ui-kit';
import { FocusedInputShape } from 'react-dates';
import { getTranslation } from '../../../utils/translationFunctions';
import LocalizedString from '../../../components/atoms/localizedString/LocalizedString';

interface DatePickerProps {
    parentContainer?: HTMLDivElement;
}

const DatePicker: FunctionComponent<DatePickerProps> = ({ parentContainer }) => {
    const defaultStartDate = moment().subtract(3, 'month');
    const defaultEndDate = moment();
    const startDateId = 'startDateId';
    const endDateId = 'endDateId';
    const [focusedInput, setFocusedInput] = useState<null | FocusedInputShape>(null);
    const [rangeEndDate] = useState(moment());
    const [rangeStartDate] = useState(moment().subtract(2, 'year'));
    const [endDate, setEndDate] = useState(defaultEndDate);
    const [startDate, setStartDate] = useState(defaultStartDate);

    const setDatesCallback = useCallback((newStartDate: Moment, newEndDate: Moment) => {
        const computedEndDate = newEndDate || newStartDate; // There are cases where the endDate is missing, set to startdate than
        setStartDate(newStartDate);
        setEndDate(computedEndDate);
    }, []);

    const isOutsideRangeCallback = useCallback(
        (day: Moment): boolean => day.isBefore(rangeStartDate, 'day') || day.isAfter(rangeEndDate, 'day'),
        [rangeEndDate, rangeStartDate]
    );

    const onCancelCallback = useCallback(() => {
        setStartDate(defaultStartDate);
        setEndDate(defaultEndDate);
    }, []);

    const onConfirmCallback = useCallback(() => {
        setFocusedInput(null);
        setDatesCallback(startDate, endDate);
    }, [endDate, startDate]);

    const onDatesChangeCallback = useCallback((event: { endDate: Moment | null; startDate: Moment | null }) => {
        setStartDate(event.startDate as Moment);
        setEndDate(event.endDate as Moment);
    }, []);

    const onFocusChangeCallback = useCallback((input) => {
        setFocusedInput(input);
    }, []);

    return (
        <DateRangePicker
            buttonCancelText={<LocalizedString value="Reset" />}
            buttonConfirmText={<LocalizedString value="Apply" />}
            endDate={endDate}
            endDateId={endDateId}
            endDatePlaceholderText={getTranslation('EndDate')}
            focusedInput={focusedInput}
            isOutsideRange={isOutsideRangeCallback}
            keepOpenOnDateSelect
            label={<LocalizedString value="Period" />}
            minimumNights={0}
            onCancel={onCancelCallback}
            onConfirm={onConfirmCallback}
            onDatesChange={onDatesChangeCallback}
            onFocusChange={onFocusChangeCallback}
            parentContainer={parentContainer}
            startDate={startDate}
            startDateId={startDateId}
            startDatePlaceholderText={getTranslation('StartDate')}
        />
    );
};

export default DatePicker;

import {
    addCarTripItem,
    getCars,
    getDefaultCarId,
    getDefaultStartingPoint,
    setIsCarTripModalVisible,
} from '../../_state/actions';
import {
    Button,
    ButtonSize,
    ButtonVariant,
    DropdownMultiSelectOption,
    DropdownSelectOption,
    EditableDataComponent,
    EditableInformationDataType,
    EditableInformationProps,
    IconType,
    InputType,
    isEmpty,
    ModalSize,
    selectOptionsFacade,
    toMoment,
    toNumber,
} from 'faralley-ui-kit';
import { closeModal, openModal, setModalOptions } from '../../../state/modal/actions';
import { EMPTY_DISPLAY_VALUE_SELECTION, EMPTY_VALUE_SELECTION } from '../../../globals/constants';
import { getSelectedCar, isValidInput } from '../modalFunctions';
import moment, { Moment } from 'moment';
import React, { FunctionComponent, useCallback, useEffect, useMemo, useState } from 'react';
import { shallowEqual, useDispatch } from 'react-redux';
import { BaseCarTripItem } from '../../../../@types/car/CarTripItem';
import { Car } from '../../../../@types/car/Car';
import GenericEditableInformation from '../../../components/molecules/genericEditableInformation/GenericEditableInformation';
import { getViolationTexts } from '../../../utils/violationFunctions';
import LocalizedString from '../../../components/atoms/localizedString/LocalizedString';
import { maxInputLengths } from '../../../styles/constants';
import { StyledCarTripModal } from '../CarTripModal.sc';
import useSelector from '../../../state/useSelector';
import { ViolationList } from '../../../components/atoms/violationList/ViolationList.sc';

const AddCarTripModal: FunctionComponent = () => {
    const dispatch = useDispatch();
    const genericErrorMessages = useSelector(({ language }) => language.genericErrorMessages);
    const [carItems, setCarItems] = useState([] as Array<Car>);
    const [selectedCar, setSelectedCar] = useState<Car>({} as Car);
    const isOutsideRange = (day: Moment): boolean => day.isAfter(moment(), 'day'); // Only allow dates in the past

    const { cars, defaultCarId, defaultStartingPoint, isCarTripsRefreshRequired, isLoading, isSaving } = useSelector(
        ({ car }) => car,
        shallowEqual
    );

    const violations = useSelector(({ error }) => error.error);
    const hasAllPickLists = !isEmpty(carItems);

    const [details, setDetails] = useState<BaseCarTripItem>({
        CarId: defaultCarId,
        Departure: defaultStartingPoint,
        Destination: EMPTY_DISPLAY_VALUE_SELECTION,
        Distance: 1,
        MilageStart: selectedCar && selectedCar.MilageStart ? selectedCar.MilageStart : 0, // Will be set after setting selected car
        TripDate: moment(),
        TripGoal: EMPTY_DISPLAY_VALUE_SELECTION,
    });

    const hasValidInput = isValidInput(details);

    const onCloseModalCallback = useCallback(() => {
        dispatch(setIsCarTripModalVisible(false));
        dispatch(closeModal());
    }, []);

    const onOpenModalCallback = useCallback(() => {
        dispatch(
            openModal({
                onBack: onCloseModalCallback,
                size: ModalSize.LARGE,
                title: <LocalizedString value="AddCarTrip" />,
            })
        );
    }, [onCloseModalCallback]);

    const onChangeModalOptionsCallback = useCallback((options: JSX.Element[]) => {
        dispatch(setModalOptions(options));
    }, []);

    const onSaveCallback = useCallback(() => {
        // Add the distance to milage start for saving
        dispatch(
            addCarTripItem({ ...details, MilageStart: details.MilageStart + toNumber(details.Distance.toString()) })
        );
    }, [details]);

    const onChangeCallback = useCallback(
        (updatedData) => {
            const newDetails = updatedData as typeof details;

            if (newDetails.CarId !== selectedCar.CarId) {
                const newSelectedCar = getSelectedCar(carItems, newDetails.CarId);
                setSelectedCar(newSelectedCar);
                newDetails.MilageStart = newSelectedCar.MilageStart;
            }

            setDetails(newDetails);
        },
        [carItems, selectedCar]
    );

    useEffect(() => {
        if (isCarTripsRefreshRequired) {
            onCloseModalCallback();
        }
    }, [isCarTripsRefreshRequired]);

    // Open side panel on mount
    useEffect(() => {
        onOpenModalCallback();
    }, []);

    useEffect(() => {
        dispatch(getCars());
        dispatch(getDefaultCarId());
        dispatch(getDefaultStartingPoint());
    }, []);

    useEffect(() => {
        if (cars) {
            setCarItems(cars);
        }
    }, [cars]);

    useEffect(() => {
        if (carItems && carItems.length !== 0 && defaultCarId !== EMPTY_VALUE_SELECTION && isEmpty(selectedCar)) {
            const newCar = getSelectedCar(carItems, defaultCarId, true);
            setDetails({ ...details, CarId: newCar.CarId, MilageStart: newCar.MilageStart });
            setSelectedCar(newCar);
        }
    }, [carItems, defaultCarId, details]);

    useEffect(() => {
        if (details.Departure === EMPTY_DISPLAY_VALUE_SELECTION && defaultStartingPoint) {
            setDetails({ ...details, Departure: defaultStartingPoint });
        }
    }, [defaultStartingPoint, details]);

    useEffect(() => {
        onChangeModalOptionsCallback([
            <Button
                iconType={IconType.PLUS}
                isDisabled={!hasValidInput}
                isLoading={isSaving}
                key={1}
                onClick={onSaveCallback}
                size={ButtonSize.SMALL}
                variant={ButtonVariant.FILLED}
            >
                <LocalizedString value="AddAndClose" />
            </Button>,
        ]);
    }, [details, hasValidInput, isSaving]);

    const editableInformationData = useMemo((): EditableInformationProps<
        DropdownSelectOption,
        DropdownMultiSelectOption
    >['data'] => {
        const data = [] as Array<EditableInformationDataType<DropdownSelectOption, DropdownMultiSelectOption>>;

        if (!isLoading && hasAllPickLists && details) {
            data.push(
                {
                    component: EditableDataComponent.DROPDOWN,
                    errorMessage: genericErrorMessages.required,
                    isEditable: true,
                    isRequired: true,
                    label: <LocalizedString value="Car" />,
                    name: 'CarId',
                    options: selectOptionsFacade(carItems, 'Description', 'CarId'),
                    textValue: selectedCar.Description,
                    value: details.CarId,
                },
                {
                    component: EditableDataComponent.DATEPICKER,
                    errorMessage: genericErrorMessages.required,
                    isEditable: true,
                    isOutsideRange,
                    isRequired: true,
                    label: <LocalizedString value="TripDate" />,
                    name: 'TripDate',
                    value: toMoment(details.TripDate),
                },
                {
                    component: EditableDataComponent.INPUTNUMBER,
                    isEditable: false,
                    label: <LocalizedString value="MilageStart" />,
                    name: 'MilageStart',
                    value: details.MilageStart,
                },
                {
                    component: EditableDataComponent.INPUTNUMBER,
                    errorMessage: genericErrorMessages.required,
                    isEditable: true,
                    isRequired: true,
                    label: <LocalizedString value="Distance" />,
                    min: 1,
                    name: 'Distance',
                    value: details.Distance,
                },
                {
                    component: EditableDataComponent.INPUT,
                    errorMessage: genericErrorMessages.required,
                    isEditable: true,
                    isRequired: true,
                    label: <LocalizedString value="Departure" />,
                    maxLength: maxInputLengths.chars100,
                    name: 'Departure',
                    type: InputType.TEXT,
                    value: details.Departure,
                },
                {
                    component: EditableDataComponent.INPUT,
                    errorMessage: genericErrorMessages.required,
                    isEditable: true,
                    isRequired: true,
                    label: <LocalizedString value="Destination" />,
                    maxLength: maxInputLengths.chars100,
                    name: 'Destination',
                    type: InputType.TEXT,
                    value: details.Destination,
                },
                {
                    component: EditableDataComponent.INPUT,
                    errorMessage: genericErrorMessages.required,
                    isEditable: true,
                    isRequired: true,
                    label: <LocalizedString value="TripGoal" />,
                    maxLength: maxInputLengths.chars100,
                    name: 'TripGoal',
                    type: InputType.TEXT,
                    value: details.TripGoal,
                }
            );
        }

        return data;
    }, [carItems, details, hasAllPickLists, isLoading]);

    return (
        <StyledCarTripModal>
            <GenericEditableInformation
                data={editableInformationData}
                iconType={IconType.PLACEHOLDER}
                isEditing
                isLoading={isLoading}
                isSaving={isSaving}
                onChange={onChangeCallback}
                title={''}
            />
            {violations && (
                <ViolationList dangerouslySetInnerHTML={{ __html: getViolationTexts(violations).join() }} isError />
            )}
        </StyledCarTripModal>
    );
};

export default AddCarTripModal;

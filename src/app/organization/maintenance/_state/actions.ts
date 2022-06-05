/* eslint-disable @typescript-eslint/no-use-before-define */
import {
    OrganizationMaintenanceActionTypes,
    OrganizationMaintenanceState,
    SET_IS_LOADING,
    SET_ORGANIZATION_OPTIONS,
} from './types';
import { APIResult } from '../../../../@types/APIResult';
import { backendRequest } from '../../../state/entity/actions';
import { OrganizationOption } from '../../../../@types/organization/OrganizationOption';
import { ThunkResult } from '../../../state/store';
import { toNumber } from 'faralley-ui-kit';

export const getOrganizationPicklist =
    (): ThunkResult =>
    (dispatch): void => {
        dispatch(setIsLoading(true));

        dispatch(
            backendRequest({
                callbackError: (): void => {
                    dispatch(setIsLoading(false));
                },
                callbackSuccess: ({ result }: APIResult): void => {
                    interface ResultItem {
                        isselected: boolean;
                        name: string;
                        organizationid: string;
                    }

                    const apiResult: OrganizationOption[] = (result.data as ResultItem[]).map(
                        (item) =>
                            ({
                                Description: item.name,
                                Id: toNumber(item.organizationid),
                                IsSelected: item.isselected,
                            } as OrganizationOption)
                    );

                    dispatch(setOrganizationOptions(apiResult));
                    dispatch(setIsLoading(false));
                },
                entity: 'organization/OrganizationPicklist',
                method: 'GET',
            })
        );
    };

export const setIsLoading = (isLoading: boolean): OrganizationMaintenanceActionTypes => ({
    payload: isLoading,
    type: SET_IS_LOADING,
});

export const setOrganizationOptions = (
    organizationOptions: OrganizationMaintenanceState['organizationOptions']
): OrganizationMaintenanceActionTypes => ({
    payload: organizationOptions,
    type: SET_ORGANIZATION_OPTIONS,
});

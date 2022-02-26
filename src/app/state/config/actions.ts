/* eslint-disable @typescript-eslint/no-use-before-define */
import { Config, ConfigActionTypes, SET_CONFIG, SET_IS_LOADING } from './types';
import { ThunkResult } from '../store';

interface ConfigProps {
    reCaptchaSiteKey: string;
    replyAddressGrip: string;
}

export const getConfig =
    (): ThunkResult =>
    (dispatch): void => {
        dispatch(setIsLoading(true));

        if (process.env.authenticationUrl) {
            const { reCaptchaSiteKey = '', replyAddressGrip = '' } = process.env;

            const config: ConfigProps = {
                reCaptchaSiteKey,
                replyAddressGrip,
            };

            dispatch(setConfig(config));
        } else {
            fetch('/config.json')
                .then((response) => {
                    if (response.status >= 400 && response.status < 600) {
                        throw Error('Error fetching config.json');
                    }

                    return response.json();
                })
                .then((json) => {
                    dispatch(setConfig(json));
                })
                .catch((error) => {
                    // @TODO add error handling
                    // eslint-disable-next-line
                    console.log(error);
                });
        }

        dispatch(setIsLoading(false));
    };

export const setConfig = (config: Config): ConfigActionTypes => ({
    payload: config,
    type: SET_CONFIG,
});

export const setIsLoading = (isLoading: boolean): ConfigActionTypes => ({
    payload: isLoading,
    type: SET_IS_LOADING,
});

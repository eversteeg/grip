export interface Parameters {
    [key: string]: string | boolean | number;
}

export const encodeQueryParameters = (parameters: Parameters): string => {
    const queryParameters: string[] = [];

    Object.keys(parameters).forEach((parameterKey) => {
        queryParameters.push(`${encodeURIComponent(parameterKey)}=${encodeURIComponent(parameters[parameterKey])}`);
    });

    return queryParameters.join('&');
};

export const constructEntityUrl = (
    baseUrl: string,
    baseEntity: string,
    entity: string,
    parameters?: Parameters
): string => {
    const url = `${baseUrl}/${baseEntity}/${entity}`;

    return parameters ? `${url}?${encodeQueryParameters(parameters)}` : url;
};

export const getBasicAuthenticationHeader = (password: string, username: string): string =>
    `Basic ${btoa(`${username}:${password}`)}`;

export const getBearerAuthenticationHeader = (token: string): string => `Bearer ${token}`;

export const getOauthHeaders = (): { 'Content-Type': string } => ({
    'Content-Type': 'application/x-www-form-urlencoded',
});

export const getHeaders = (locale: string): { [key: string]: string } => ({
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
    'X-GRIP-LOCALE': locale,
});

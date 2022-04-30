export interface ExternalRoutes {
    support: string;
}

export const EXTERNAL_ROUTES: ExternalRoutes = {
    support: 'https://nl.wikipedia.org/wiki/Support',
};

export interface Routes {
    error: {
        404: string;
    };
    global: {
        settings: string;
    };
    login: {
        passwordRequest: string;
        passwordReset: string;
        root: string;
        unsupportedAlert: string;
    };
    maintenance: {
        root: string;
    };
    organization: {
        organizationDetails: string;
        root: string;
    };
    vat: {
        root: string;
        vatOverview: string;
    };
}

const maintenanceRoot = '/club-maintenance';
const organizationRoot = '/organization';
const loginRoot = '/login';
const vatRoot = '/vat';

export const ROUTES: Routes = {
    error: {
        404: '/404',
    },
    global: {
        settings: '/settings',
    },
    login: {
        passwordRequest: `${loginRoot}/password-request`,
        passwordReset: `${loginRoot}/password-reset`,
        root: loginRoot,
        unsupportedAlert: `${loginRoot}/unsupported-alert`,
    },
    maintenance: {
        root: maintenanceRoot,
    },
    organization: {
        organizationDetails: `${organizationRoot}/organization-details/:publicOrganizationId`,
        root: organizationRoot,
    },
    vat: {
        root: vatRoot,
        vatOverview: `${vatRoot}/vat-overview`,
    },
};

import React, { FunctionComponent } from 'react';
import { OrganizationDetailsTabIndex } from './types';

export interface OrganizationDetailsPageProps {
    activeTab?: OrganizationDetailsTabIndex;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const OrganizationDetailsPage: FunctionComponent<OrganizationDetailsPageProps> = ({ activeTab }) => {
    // eslint-disable-next-line no-console
    console.log(activeTab);

    return <div />;
};

export default OrganizationDetailsPage;

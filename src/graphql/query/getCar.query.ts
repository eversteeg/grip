import gql from 'graphql-tag';

export default gql`
    query getCar {
        carByCarid(carid: 2) {
            licenseplate
            description
            remarks
            startdate
            enddate
        }
    }
`;

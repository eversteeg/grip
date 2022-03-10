import gql from 'graphql-tag';

export default gql`
    query getCars {
        allCars(condition: {}) {
            edges {
                node {
                    carid
                    licenseplate
                    description
                    remarks
                    startdate
                    enddate
                }
            }
        }
    }
`;

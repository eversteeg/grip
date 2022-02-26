import styled from 'styled-components';

export const StyledIllustration = styled.div`
    margin: 0 auto 16px;
    width: 100%;
    max-width: 180px;
`;

export const SkeletonWrapper = styled.div`
    margin: 0 auto;
    border-radius: 100%;
    max-width: 140px;
    overflow: hidden;

    > span {
        display: block;
        position: relative;
        padding-bottom: 100%;

        span {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
    }
`;

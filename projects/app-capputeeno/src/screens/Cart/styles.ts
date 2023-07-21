import styled from 'styled-components';

export const SectionCart = styled.section`
    display: grid;
    max-width: 100%;
    width: 100%;
    grid-template-columns: 1fr minmax(auto, 352px);
    grid-gap: 3.2rem;

    @media (max-width: 992px) {
        grid-template-columns: 1fr;
        padding: 3rem;
    }
`;

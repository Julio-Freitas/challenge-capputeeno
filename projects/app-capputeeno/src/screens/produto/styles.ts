import styled from 'styled-components';

export const SectionProduct = styled.section`
    > div {
        margin-bottom: 2.2rem;
    }
`;

export const ProductWrapper = styled.div`
    display: flex;
    gap: 3.2rem;
`;

export const ProductWrapperInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .category {
        font-size: 1.6rem;
        color: var(--text-dark-2);
        margin-bottom: 1.3rem;
    }

    h1.title-product {
        font-size: 3.2rem;
        color: var(--text-dark);
        font-weight: 300;
    }
    .price-product {
        font-weight: 600;
        font-size: 2rem;
        color: var(--shapes-dark);
    }
    .info-freight {
        font-size: 1.2rem;
        font-weight: 400;
        color: var(--text-dark-2);
    }

    h2.description-title {
        font-size: 1.6rem;
        font-weight: 500;
        margin-top: 5.8rem;
    }

    p.description {
        font-size: 1.4rem;
        color: var(--text-dark-2);
    }
`;

export const ButtonCart = styled.button`
    background-color: var(--shapes-blue);
    color: #f5f5fa;
    font-size: 1.6rem;
    padding: 1rem 0;
    border-radius: 0.4rem;
    align-items: center;
    display: flex;
    justify-content: center;
    gap: 3rem;
    transition: ease-in-out 0.2s;

    svg path {
        stroke: #f5f5fa;
    }

    &:hover {
        background-color: transparent;
        color: var(--text-dark-2);
        border: 0.1rem solid var(--shapes-blue);

        svg path {
            stroke: var(--text-dark-2);
        }
    }
`;

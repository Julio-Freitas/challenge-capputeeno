import { styled } from 'styled-components';

export const ProductContainer = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, 25.6rem);
    grid-gap: 3.2rem;
    max-width: 100%;
    margin-top: 6rem;
`;

export const ProductItem = styled.li`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    border-radius: 0 0 0.4rem 0.4rem;
    background-color: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(5px);

    h3 {
        font-size: 1.6rem;
        line-height: 150%;
        font-weight: 300;
        color: var(--text-dark-2);
        margin: 0.1rem 0;
        text-align: left;
        width: 100%;
        align-self: flex-start;
        margin: 0.5rem;
        border-bottom: 0.15rem solid var(--shapes);
    }

    p {
        font-weight: 600;
        font-size: 1.6rem;
        text-align: left;
        width: 100%;
        padding: 0 0.5rem;
        color: var(--shapes-dark);
    }

    img {
        max-width: 100%;
        width: 100%;
        display: inline-block;
        object-fit: fill;
    }
`;

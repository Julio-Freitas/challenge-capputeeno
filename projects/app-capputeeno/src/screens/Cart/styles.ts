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
export const Title = styled.h1`
    font-size: 2.4rem;
    margin: 0 0 6px 0;
    color: var(--text-dark);
    padding-top: 2.2rem;
`;

export const Span = styled.span`
    font-size: 1.6;
    font-weight: 300;
    color: var(--text-dark);
`;

export const ContentCart = styled.div``;

export const ContentSidebar = styled.div`
    background-color: #fff;
    padding: 1rem 2.4rem 2.4rem 2.4rem;

    h2 {
        font-size: 2rem;
        margin: 0 0 6px 0;
        color: var(--text-dark);
        padding-top: 1.6rem;
    }

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 1.2rem;

        h3,
        span {
            font-size: 1.6rem;
            color: var(--text-dark);
        }
    }

    hr {
        background-color: var(--bg-gray);
        height: 0.1rem;
        margin-top: 1.2rem;
        border: none;
    }

    .total {
        margin-bottom: 3rem;
    }
`;

export const ButtonBuy = styled.button`
    width: 100%;
    color: #fff;
    font-size: 1.6rem;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.2rem 0;
    background-color: #51b853;
    transition: ease-in-out 0.2s;
    opacity: 0.9;
    border-radius: 0.8rem;

    &:hover {
        opacity: 1;
        box-shadow: 0 1rem 0 1rem 0.5rem var(--bg-gray);
    }

    &:disabled {
        opacity: 0.6;
        cursor: no-drop;
    }
`;

export const SidebarNav = styled.nav`
    display: flex;
    flex-direction: column;
    margin-top: 27.5rem;

    a {
        font-size: 1.6rem;
        padding-top: 1.2rem;
        color: var(--text-dark);
        text-decoration: underline;
    }
`;
export const WrapperProductsCart = styled.ul`
    padding-top: 2.3rem;
    overflow: hidden;
    max-height: 383px;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        transition: ease-in-out 0.2s;
        width: 1.2rem;
    }

    &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px var(--bg-gray);
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background: var(--shapes);
        border-radius: 1rem;
        transition: ease-in-out 0.2s;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: var(--shapes-blue);
    }
`;

export const ProductCartItem = styled.li`
    display: flex;
    height: 20rem;
    background-color: #fff;
    overflow: hidden;
    margin-top: 3.2rem;

    img {
        height: 100%;
        width: 100%;
        max-width: 21rem;
        object-fit: fill;
    }
    &:first-of-type {
        margin-top: 0;
    }

    @media (max-width: 1200px) {
        flex-wrap: wrap;
        flex-direction: column;
        height: auto;
        align-items: center;
        padding-top: 2rem;
    }
`;

export const ProductCartHeader = styled.header`
    display: flex;
    justify-content: space-between;

    h2 {
        color: var(--text-dark);
        font-size: 2rem;
    }

    svg {
        cursor: pointer;
        opacity: 0.8;
        transition: ease-in-out 0.2s;
        &:hover {
            opacity: 1;
        }
    }
`;

export const ProductInfo = styled.div`
    padding: 1.6rem 1.6rem 1.6rem 3.2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const ProductBody = styled.div`
    padding-top: 1.2rem;
    flex: auto;
    .description {
        color: var(--text-dark-2);
        font-size: 1.6rem;
    }
`;

export const ProductFooter = styled.div`
    display: flex;
    justify-content: space-between;

    .price {
        font-weight: bold;
        font-size: 1.2rem;
    }
`;

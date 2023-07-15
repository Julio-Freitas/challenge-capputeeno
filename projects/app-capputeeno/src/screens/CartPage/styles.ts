import styled from 'styled-components';

export const SectionCart = styled.section`
    display: grid;
    max-width: 100%;
    width: 100%;
    grid-template-columns: 1fr minmax(auto, 352px);
    grid-gap: 3.2rem;
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
    background-color: beige;
    padding: 1.6rem 2.4rem 2.4rem 2.4rem;
`;

export const WrapperProductsCart = styled.ul`
    padding-top: 2.3rem;
`;

export const ProductCartItem = styled.li`
    display: flex;
    height: 20rem;
    background-color: #fff;
    overflow: hidden;

    img {
        height: 100%;
        width: 100%;
        max-width: 21rem;
        object-fit: fill;
    }
`;

export const ProductCartHeader = styled.header`
    display: flex;
    justify-content: space-between;

    h2 {
        color: var(--text-dark);
        font-size: 2rem;
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

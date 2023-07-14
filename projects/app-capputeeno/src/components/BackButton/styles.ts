import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    color: var(--text-gray);

    transition: ease-in-out 0.2s;
    a {
        text-decoration: none;
        color: var(--text-gray);
        font-size: 1.6rem;
        display: flex;
        align-items: center;
        gap: 0.8rem;
    }

    &:hover {
        opacity: 0.8;
    }
`;

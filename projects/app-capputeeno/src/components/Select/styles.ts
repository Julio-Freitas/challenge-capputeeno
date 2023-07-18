import styled from 'styled-components';

export const SelectContainer = styled.div`
    position: relative;

    svg {
        position: absolute;
        right: 0.8rem;
        top: calc(100% / 2);
        transform: translateY(-50%);
        cursor: pointer;
        transition: ease-in-out 0.2s;
    }
    /*
    &:focus-within {
        svg {
            transform: rotateZ(90deg);
            top: 1.2rem;
        }
    } */
`;

export const Select = styled.select`
    color: var(--text-dark-2);
    text-indent: 0.01rem;
    appearance: none;
    border: none;
    padding: 0.8rem 3.2rem 0.8rem 1.2rem;
    border: 0.1rem solid var(--text-dark);
    background-color: var(--bg-secondary);
    border-radius: 0.8rem;
    transition: ease-in-out 0.5s;
    outline: none;

    :hover {
        cursor: pointer;
    }
`;

import { styled } from 'styled-components';

export const FilterBarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;

    @media (min-width: 768px) {
        flex-direction: row;
    }
`;

export const FilterList = styled.ul`
    display: flex;
    align-items: center;
    gap: 4rem;
    padding: 20px 0;
    list-style: none;
`;

export const FilterItem = styled.li`
    text-transform: uppercase;
    font-family: inherit;
    font-weight: 400;
    line-height: 2.2rem;
    color: var(--text-dark);
    cursor: pointer;
    transition: ease-in-out 0.2s;

    &:first-child {
        padding-left: 0;
    }

    > button {
        background: transparent;
        color: var(--text-dark);
        text-transform: uppercase;
        font-size: 1.6rem;
        border: none;
        cursor: pointer;
    }
    border: 0.4rem solid transparent;

    &[data-selected='true'] {
        border-bottom-color: var(--orange-low);
    }
`;

export const FilterByPriorityContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    min-width: 17rem;
    justify-content: end;

    button {
        font-family: inherit;
        font-size: 1.6rem;
        line-height: 2.2rem;
        color: var(--text-dark);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.6rem;
    }
    &[data-open='true'] {
        svg {
            transition: ease-in-out 0.1s;
            transform: rotateZ(180deg);
        }
    }
`;

export const FilterByPrioritys = styled.ul`
    position: absolute;
    top: 45px;
    background-color: #fff;
    box-shadow: 1px 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 12px 16px;
    width: 100%;
    z-index: 1;
`;

export const FilterByPrioritysItem = styled.li`
    font-size: 1.4rem;
    width: 100%;
    color: var(--text-dark);
    margin-top: 0.2rem;
    border-bottom: 0.3rem solid transparent;
    cursor: pointer;

    &:nth-of-type(1) {
        margin-top: 0;
    }
    &[data-slected='true'] {
        border-bottom-color: var(--orange-low);
    }
    &:hover {
        border-bottom-color: var(--orange-low);
    }
`;

export const ContainerPagination = styled.div`
    display: flex;
    gap: 0.2rem;
    justify-content: end;
    align-items: center;
    width: 100%;

    button {
        width: 3.2rem;
        height: 3.2rem;
        border-radius: 0.8rem;
        background-color: var(--bg-gray);
        color: var(--text-dark-2);
        transition: ease-in-out 0.1s;

        &:hover,
        &:focus,
        &[data-active-page='true'] {
            background-color: #fff;
            color: var(--orange-low);
            border: 0.1rem solid var(--orange-low);
            font-weight: bold;
        }

        &[data-arrow='left'] {
            transform: rotateZ(90deg);
        }
        &[data-arrow='right'] {
            transform: rotateZ(-90deg);
        }

        &[disabled] {
            opacity: 0.3;
        }
    }

    @media (max-width: 768px) {
        margin-top: 2rem;
        padding-right: 3.4rem;
    }
`;

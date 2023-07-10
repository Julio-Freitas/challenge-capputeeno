import { css, styled } from "styled-components";
import { FilterByPrioritysItemProps, FilterItemProps } from "./types";
export const FilterBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const FilterList = styled.ul`
  display: flex;
  align-items: center;
  gap: 4rem;
  padding: 20px 0;
  list-style: none;
`;

export const FilterItem = styled.li<FilterItemProps>`
  text-transform: uppercase;
  font-family: inherit;
  font-weight: 400;
  line-height: 2.2rem;
  color: var(--text-dark);
  cursor: pointer;

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

  ${({ selected }) => css`
    border-bottom: ${selected && "4px solid var(--orange-low)"};
  `}
`;

export const FilterByPriorityContainer = styled.div<{ isOpen: boolean }>`
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

    ${({ isOpen }) => css`
      svg {
        transition: ease-in-out 0.1s;
        transform: rotateZ(${isOpen ? "180deg" : "0deg"});
      }
    `}
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
`;

export const FilterByPrioritysItem = styled.li<FilterByPrioritysItemProps>`
  font-size: 1.4rem;
  width: 100%;
  color: var(--text-dark);
  margin-top: 0.2rem;
  border-bottom: 0.3rem solid transparent;
  cursor: pointer;

  &:nth-of-type(1) {
    margin-top: 0;
  }

  ${({ slected }) => css`
    border-bottom-color: ${slected ? "var(--orange-low);" : "none"};
  `}
  &:hover {
    border-bottom-color: var(--orange-low);
  }
`;

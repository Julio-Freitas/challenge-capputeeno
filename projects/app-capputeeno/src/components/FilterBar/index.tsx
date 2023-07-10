"use client";
import { FilterByType } from "./filter-by-type";
import { FilterByPriority } from "./filterByPriority";
import { FilterbarProps } from "./types";
import * as S from "./styles";
export const FilterBar = ({}: FilterbarProps) => {
  return (
    <S.FilterBarContainer>
      <FilterByType />
      <FilterByPriority />
    </S.FilterBarContainer>
  );
};

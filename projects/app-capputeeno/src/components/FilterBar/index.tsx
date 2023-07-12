'use client';
import { FilterByType } from './filter-by-type';
import { FilterByPriority } from './filterByPriority';
import * as S from './styles';

export const FilterBar = () => {
    return (
        <S.FilterBarContainer>
            <FilterByType />
            <FilterByPriority />
        </S.FilterBarContainer>
    );
};

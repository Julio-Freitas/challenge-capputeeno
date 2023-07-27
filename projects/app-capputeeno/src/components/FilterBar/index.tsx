'use client';

import { FilterByPagination } from './filterbyPagination';
import { FilterByType } from './filterByType';
import { FilterByPriority } from './filterByPriority';
import * as S from './styles';

export const FilterBar = () => {
    return (
        <>
            <S.FilterBarContainer>
                <FilterByType />
                <FilterByPriority />
            </S.FilterBarContainer>
            <FilterByPagination />
        </>
    );
};

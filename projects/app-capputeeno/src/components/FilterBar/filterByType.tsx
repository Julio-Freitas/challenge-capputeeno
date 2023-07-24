import * as S from './styles';
import { useFilter } from '@/hooks/useFilter';
import { FilterType } from '@/types/enum/filter';
import React from 'react';

export const FilterByType = () => {
    const { setType, type } = useFilter();

    const handleFilterType = (value: FilterType) => setType(value);

    return (
        <S.FilterList>
            <S.FilterItem data-selected={type === FilterType.ALL}>
                <button
                    id={`${FilterType.MUG}`}
                    onClick={() => handleFilterType(FilterType.ALL)}
                >
                    Todos
                </button>
            </S.FilterItem>
            <S.FilterItem data-selected={type === FilterType.SHIRT}>
                <button
                    id={`${FilterType.SHIRT}`}
                    onClick={() => handleFilterType(FilterType.SHIRT)}
                >
                    Camisetas
                </button>
            </S.FilterItem>

            <S.FilterItem data-selected={type === FilterType.MUG}>
                {' '}
                <button
                    id={`${FilterType.MUG}`}
                    onClick={() => handleFilterType(FilterType.MUG)}
                >
                    Canecas
                </button>
            </S.FilterItem>
        </S.FilterList>
    );
};

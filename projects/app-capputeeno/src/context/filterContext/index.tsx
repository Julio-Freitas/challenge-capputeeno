'use client';

import { FiltePriority, FilterType } from '@/types/enum/filter';
import { createContext, useState } from 'react';
import { FilterContextProviderProps, FilterContextProps } from './types';

export const FilterContext = createContext<FilterContextProps>({
    search: '',
    page: 0,
    type: FilterType.ALL,
    setSearch: (value: string) => value,
    setPage: (value: number) => value,
    setType: (value: FilterType) => value,
    priority: FiltePriority.NEWS,
    setPriority: (value: FiltePriority) => value
});

export const FilterContextProvider = ({
    children
}: FilterContextProviderProps) => {
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(0);
    const [type, setType] = useState(FilterType.ALL);
    const [priority, setPriority] = useState(FiltePriority.POPULARITY);

    const contextValue = {
        search,
        page,
        type,
        setSearch,
        setPage,
        setType,
        priority,
        setPriority
    };

    return (
        <FilterContext.Provider value={contextValue}>
            {children}
        </FilterContext.Provider>
    );
};

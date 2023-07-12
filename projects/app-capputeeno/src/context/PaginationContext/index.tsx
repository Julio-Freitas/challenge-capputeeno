'use client';

import { createContext, useState } from 'react';
import {
    PaginationContextProps,
    PaginationContextProviderProps
} from './types';

import { useFilter } from '@/hooks/useFilter';
import { useProducts } from '@/hooks/useProducts';
import { PER_PAGE } from '@/utils/mountQuery';

export const PaginationContext = createContext<PaginationContextProps>({
    maxPage: 5,
    minPage: 0,
    page: 1,
    setPage: () => {},
    totalPage: 5,
    handleNextPage: () => false,
    handlePrevPage: () => false
});

export const PaginationProvider = ({
    children
}: PaginationContextProviderProps) => {
    const { page, setPage } = useFilter();
    const { totalProducts } = useProducts();

    const [maxPage, setMaxPage] = useState(5);
    const [minPage, setMinPage] = useState(0);

    const handleNextPage = () => {
        setPage(page + 1);
        if (page >= maxPage) {
            setMaxPage((oldValue) => oldValue + 1);
            setMinPage((oldValue) => oldValue + 1);
        }
    };

    const handlePrevPage = () => {
        setPage(page - 1);
        if (page > 5) {
            setMaxPage((oldValue) => oldValue - 1);
            setMinPage((oldValue) => oldValue - 1);
        } else {
            setMaxPage(5);
            setMinPage(0);
        }
    };

    return (
        <PaginationContext.Provider
            value={{
                handleNextPage,
                handlePrevPage,
                maxPage,
                minPage,
                page,
                setPage,
                totalPage: totalProducts / PER_PAGE
            }}
        >
            {children}
        </PaginationContext.Provider>
    );
};

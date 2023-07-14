'use client';

import { FilterBar } from '@/components/FilterBar';

import { ProductsList } from '@/components';
import { PaginationProvider } from '@/context/PaginationContext';

export default function Home() {
    return (
        <PaginationProvider>
            <FilterBar />
            <ProductsList />
        </PaginationProvider>
    );
}

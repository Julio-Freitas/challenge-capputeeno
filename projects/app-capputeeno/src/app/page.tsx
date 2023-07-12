'use client';

import { FilterBar } from '@/components/FilterBar';
import styles from './page.module.css';
import { ProductsList } from '@/components';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PaginationProvider } from '@/context/PaginationContext';

const queryClient = new QueryClient();
export default function Home() {
    return (
        <QueryClientProvider client={queryClient}>
            <PaginationProvider>
                <main className={styles.main}>
                    <FilterBar />
                    <ProductsList />
                </main>
            </PaginationProvider>
        </QueryClientProvider>
    );
}

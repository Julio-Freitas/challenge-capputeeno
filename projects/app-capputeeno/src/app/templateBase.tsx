'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import styles from './page.module.css';
import 'react-toastify/dist/ReactToastify.css';

export default function Template({ children }: { children: React.ReactNode }) {
    const queryClient = new QueryClient();
    return (
        <main className={styles.main}>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </main>
    );
}

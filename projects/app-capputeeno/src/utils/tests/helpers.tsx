import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RenderResult, render } from '@testing-library/react';

import React from 'react';

const queryClient = new QueryClient();

export const renderWithProvider = (children: React.ReactNode): RenderResult =>
    render(
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );

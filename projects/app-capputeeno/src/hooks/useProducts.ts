import { useQuery } from '@tanstack/react-query';

import { useFilter } from './useFilter';

import { useDeferredValue } from 'react';
import { fetchTotalPage, fetcher } from '@/server/api';
import { ProductsFetchResponse } from '@/types/server/products';
import { mountQuery, queryTotalProduct } from '@/utils';

export function useProducts() {
    const { type, priority, search, page } = useFilter();

    const searchDeferred = useDeferredValue(search);
    const queryTypeCategory = mountQuery(type, priority, page);

    const { data, isLoading } = useQuery({
        queryFn: () => fetcher<ProductsFetchResponse>(queryTypeCategory),
        queryKey: ['products', type, priority, page]
    });

    const { data: totalProducts } = useQuery({
        queryFn: () => fetchTotalPage(queryTotalProduct),
        queryKey: ['total-page']
    });

    const allProductsSearch = data?.data.data.allProducts.filter((product) =>
        product.name
            .toLocaleLowerCase()
            .includes(searchDeferred.toLocaleLowerCase() ?? '')
    );

    return {
        data: allProductsSearch,
        totalProducts: totalProducts?.data.data._allProductsMeta.count ?? 0,
        isLoading
    };
}

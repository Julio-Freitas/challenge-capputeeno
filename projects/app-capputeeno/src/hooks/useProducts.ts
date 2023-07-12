import {
    ProductFetchCountResponse,
    ProductFetchResponse
} from '@/types/server/products';
import { useQuery } from '@tanstack/react-query';
import axios, { AxiosPromise } from 'axios';
import { useFilter } from './useFilter';
import { mountQuery } from '../utils/mountQuery';
import { useDeferredValue } from 'react';

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetcher = (query: string): AxiosPromise<ProductFetchResponse> =>
    axios.post(API_URL, { query });

const fetchTotalPage = (): AxiosPromise<ProductFetchCountResponse> =>
    axios.post(API_URL, {
        query: `query {
                _allProductsMeta{
                    count
                }
            }`
    });

export function useProducts() {
    const { type, priority, search, page } = useFilter();

    const searchDeferred = useDeferredValue(search);
    const queryTypeCategory = mountQuery(type, priority, page);

    const { data, isLoading } = useQuery({
        queryFn: () => fetcher(queryTypeCategory),
        queryKey: ['products', type, priority, page]
    });
    const { data: totalProducts } = useQuery({
        queryFn: fetchTotalPage,
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

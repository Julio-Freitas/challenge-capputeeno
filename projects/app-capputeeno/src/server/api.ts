import { ProductFetchCountResponse } from '@/types/server/products';
import axios, { AxiosPromise } from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

export const fetcher = <T>(query: string): AxiosPromise<T> =>
    axios.post(API_URL, { query });

export const fetchTotalPage = (
    query: string
): AxiosPromise<ProductFetchCountResponse> =>
    axios.post(API_URL, {
        query
    });

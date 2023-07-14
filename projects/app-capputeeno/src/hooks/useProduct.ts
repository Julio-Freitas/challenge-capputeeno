import { fetcher } from '@/server/api';
import { ProductData, ProductFetchResponse } from '@/types/server/products';
import { moutQueryProduct } from '@/utils/mountQuery';
import { useQuery } from '@tanstack/react-query';

export function useProduct(id: string): {
    data: ProductData;
    isLoading?: boolean;
} {
    const queryTypeCategory = moutQueryProduct(id);

    const { data, isLoading } = useQuery({
        queryFn: () => fetcher<ProductFetchResponse>(queryTypeCategory),
        queryKey: ['product']
    });

    return {
        data: data?.data.data.Product as ProductData,
        isLoading
    };
}

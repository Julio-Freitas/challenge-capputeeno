'use client';
import { useProducts } from '@/hooks/useProducts';
import { ProductCard } from './ProductCard';
import * as S from './style';
import { FilterByPagination } from '../FilterBar/filterbyPagination';

export const ProductsList = () => {
    const { data, isLoading } = useProducts();

    if (isLoading) return <h1>Carregando..</h1>;
    if (!data?.length) return <h1>Chegoou ao Fim...</h1>;

    return (
        <>
            <S.ProductContainer>
                {data?.map((product) => (
                    <ProductCard
                        id={product.id}
                        key={product.id}
                        image={product.image_url}
                        title={product.name}
                        price={product.price_in_cents}
                    />
                ))}
            </S.ProductContainer>
            <FilterByPagination />
        </>
    );
};

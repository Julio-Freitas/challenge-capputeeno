'use client';
import { useProducts } from '@/hooks/useProducts';
import { ProductCard } from './ProductCard';
import * as S from './style';

export const ProductsList = () => {
    const { data, totalPage } = useProducts();

    return (
        <>
            {' '}
            <h1>totalPage {totalPage}</h1>
            <S.ProductContainer>
                {data?.map((product) => (
                    <ProductCard
                        key={product.id}
                        image={product.image_url}
                        title={product.name}
                        price={product.price_in_cents}
                    />
                ))}
            </S.ProductContainer>
        </>
    );
};

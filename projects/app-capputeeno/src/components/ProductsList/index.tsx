"use client";
import { useProducts } from "@/hooks/useProducts";
import { ProductsListProps } from "./type";
import { ProductCard } from "./ProductCard";
import * as S from "./style";

export const ProductsList = ({}: ProductsListProps) => {
  const { data } = useProducts();

  return (
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
  );
};

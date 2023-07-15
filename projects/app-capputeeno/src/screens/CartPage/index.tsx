'use client';

import { BackButton } from '@/components';

import * as S from './styles';
import Image from 'next/image';
import { useCart } from '@/hooks/useCart';
import { ProductData } from '@/types/server/products';
import { formatCentsInReal } from '@/utils';

export const CartPage = () => {
    const { items } = useCart();
    return (
        <S.SectionCart>
            <S.ContentCart>
                <BackButton />
                <S.Title>Seu carrinho</S.Title>
                <S.Span>
                    Total (3 produtos) <b>R$161,00</b>
                </S.Span>
                <S.WrapperProductsCart>
                    {
                        items.map((product: ProductData) => (
                            <S.ProductCartItem key={product.id}>
                                <Image
                                    width={211}
                                    height={300}
                                    src={product.image_url}
                                    alt={product.name}
                                    title={`${product.name} by ${product.category}`}
                                />
                                <S.ProductInfo>
                                    <S.ProductCartHeader>
                                        <h2>{product.name}</h2>
                                    </S.ProductCartHeader>

                                    <S.ProductBody>
                                        <p className="description">
                                            {product.description}
                                        </p>
                                    </S.ProductBody>
                                    <S.ProductFooter>
                                        <select>
                                            <option>1</option>
                                        </select>
                                        <span className="price">
                                            {formatCentsInReal(
                                                +product.price_in_cents
                                            )}
                                        </span>
                                    </S.ProductFooter>
                                </S.ProductInfo>
                            </S.ProductCartItem>
                        ))[0]
                    }
                </S.WrapperProductsCart>
            </S.ContentCart>
            <S.ContentSidebar>Side Bar cart</S.ContentSidebar>
        </S.SectionCart>
    );
};

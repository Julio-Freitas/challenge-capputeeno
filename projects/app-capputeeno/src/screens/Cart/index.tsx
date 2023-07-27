'use client';
import { useCart } from '@/hooks/useCart';
import { SideBarCart } from './sideBarCart';
import { ProductsCart } from './productsCart';

import * as S from './styles';
import { EmptyCart } from './emptyCart';

export const CartPage = () => {
    const { totalItemsCart } = useCart();
    console.log(process.env.NODE_ENV);
    return (
        <S.SectionCart>
            {totalItemsCart === 0 ? <EmptyCart /> : <ProductsCart />}
            <SideBarCart />
        </S.SectionCart>
    );
};

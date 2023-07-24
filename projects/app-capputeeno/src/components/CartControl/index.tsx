'use client';

import * as S from './styles';
import { CartIcon } from '../icons';
import { useCart } from '@/hooks/useCart';
import { useRouter } from 'next/navigation';

export function CartControl() {
    const { totalItemsCart } = useCart();
    const router = useRouter();
    const handleNavigateToCart = () => router.push('/cart');

    return (
        <S.Container data-testid="wrapper-card" onClick={handleNavigateToCart}>
            <CartIcon />
            {totalItemsCart > 0 && (
                <S.CartCount data-testid="totalCart">
                    {totalItemsCart}
                </S.CartCount>
            )}
        </S.Container>
    );
}

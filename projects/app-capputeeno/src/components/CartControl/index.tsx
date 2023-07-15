'use client';

import * as S from './styles';
import { CartIcon } from '../icons';
import { useCart } from '@/hooks/useCart';
import { useRouter } from 'next/navigation';

export function CartControl() {
    const { totalCart } = useCart();
    const router = useRouter();
    const handleNavigateToCart = () => router.push('/cart');

    return (
        <S.Container onClick={handleNavigateToCart}>
            <CartIcon />
            {totalCart > 0 && (
                <S.CartCount data-testid="totalCart">{totalCart}</S.CartCount>
            )}
        </S.Container>
    );
}

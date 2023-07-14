'use client';

import * as S from './styles';
import { CartIcon } from '../icons';
import { useCart } from '@/hooks/useCart';

export function CartControl() {
    const { totalCart } = useCart();
    return (
        <S.Container>
            <CartIcon />
            {totalCart > 0 && (
                <S.CartCount data-testid="totalCart">{totalCart}</S.CartCount>
            )}
        </S.Container>
    );
}

import { useCart } from '@/hooks/useCart';
import { formatCentsInReal } from '@/utils';
import * as S from './styles';
import Link from 'next/link';

export const SideBarCart = () => {
    const { items, cartPrice } = useCart();
    return (
        <S.ContentSidebar>
            <h2>Resumo do pedido</h2>
            <div>
                <h3>Subtotal de produtos:</h3>
                <span>{formatCentsInReal(cartPrice.subTotalPriceCart)}</span>
            </div>

            {cartPrice.hasFreight && (
                <div>
                    <h3>Entrega</h3>
                    <span>R$ 40</span>
                </div>
            )}
            <hr />
            <div className="total">
                <h3>Total:</h3>
                <span>{formatCentsInReal(cartPrice.total)}</span>
            </div>
            <S.ButtonBuy type="button" disabled={items.length <= 0}>
                Finalizar a compra
            </S.ButtonBuy>

            <S.SidebarNav>
                <Link passHref href="/">
                    Ajuda
                </Link>
                <Link passHref href="/">
                    reembolsos
                </Link>
                <Link passHref href="/">
                    entregas e frete
                </Link>
                <Link passHref href="/">
                    trocas e devoluções
                </Link>
            </S.SidebarNav>
        </S.ContentSidebar>
    );
};

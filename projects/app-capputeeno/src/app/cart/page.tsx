import { CartPage } from '@/screens';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Carrinho',
    description:
        'Que bom que você está chegando aqui.. falta pouco parar finalizar suas compras =D..'
};

export default function Cart() {
    return <CartPage />;
}

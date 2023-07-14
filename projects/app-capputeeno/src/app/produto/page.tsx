import { ProdutoPage } from '@/screens';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'produto',
    description: 'produtos de alta qualidade só aqui no Capputenno..'
};

export default function Produto() {
    return <ProdutoPage />;
}

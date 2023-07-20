'use client';

import Image from 'next/image';
import * as S from './styles';
import { formatCentsInReal, trasnlateCategory } from '@/utils';
import { BackButton, CartIcon } from '@/components';
import { useSearchParams } from 'next/navigation';
import { useProduct } from '@/hooks/useProduct';
import { useCart } from '@/hooks/useCart';

import { redirect } from 'next/navigation';

export function ProdutoPage() {
    const searchParams = useSearchParams();
    const productId = searchParams?.get('id') ?? '';
    if (!productId) redirect('/');

    const { data, isLoading } = useProduct(productId);
    const { addProductInCart } = useCart();

    if (isLoading) return <h1>Carregando...</h1>;

    if (!data) redirect('/');

    return (
        <S.SectionProduct>
            <BackButton />
            <S.ProductWrapper>
                <Image
                    width={540}
                    height={480}
                    src={data?.image_url}
                    alt={'title'}
                    title={`${'title'} by ${'price'}`}
                />
                <S.ProductWrapperInfo>
                    <div>
                        <span className="category">
                            CATEGORIA: {trasnlateCategory(data.category ?? '')}
                        </span>
                        <h1 className="title-product">{data.name}</h1>
                        <span className="price-product">
                            {formatCentsInReal(+data.price_in_cents)}
                        </span>
                        <p className="info-freight">
                            *Frete de R$40,00 para todo o Brasil. Grátis para
                            compras acima de R$900,00.
                        </p>
                        <div>
                            <h2 className="description-title ">Description</h2>
                            <p className="description">{data.description}</p>
                        </div>
                    </div>
                    <S.ButtonCart
                        type="button"
                        onClick={() => addProductInCart(data)}
                    >
                        <CartIcon /> Adicionar ao carrinho
                    </S.ButtonCart>
                </S.ProductWrapperInfo>
            </S.ProductWrapper>
        </S.SectionProduct>
    );
}

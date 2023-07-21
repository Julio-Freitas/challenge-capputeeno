'use client';
import { BackButton, DeleteIcon, Select } from '@/components';

import Image from 'next/image';
import { useCart } from '@/hooks/useCart';
import { formatCentsInReal } from '@/utils';
import { ItemsCart } from '@/context/CartContext/types';

import * as S from './styles';
import Link from 'next/link';

export const CartPage = () => {
    const { items, onDeleteItem, totalItemsCart, cartPrice } = useCart();

    return (
        <S.SectionCart>
            {totalItemsCart === 0 ? (
                <div>
                    <BackButton />
                    <S.Title>Você não possui produtos no Carrinho</S.Title>
                </div>
            ) : (
                <S.ContentCart>
                    <BackButton />
                    <S.Title>Seu carrinho</S.Title>
                    <S.Span>
                        Total ({totalItemsCart} produtos){' '}
                        <b>{formatCentsInReal(cartPrice.subTotalPriceCart)}</b>
                    </S.Span>

                    <S.WrapperProductsCart>
                        {items.map((product: ItemsCart) => (
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
                                        <button
                                            type="button"
                                            onClick={() =>
                                                onDeleteItem(product)
                                            }
                                        >
                                            <DeleteIcon />
                                        </button>
                                    </S.ProductCartHeader>

                                    <S.ProductBody>
                                        <p className="description">
                                            {product.description &&
                                            product?.description?.length < 115
                                                ? product?.description
                                                : `${product.description?.slice(
                                                      0,
                                                      115
                                                  )}....`}
                                        </p>
                                    </S.ProductBody>
                                    <S.ProductFooter>
                                        <Select
                                            value={product.quantity}
                                            onChange={console.log}
                                        />
                                        <span className="price">
                                            {formatCentsInReal(
                                                +product.price_in_cents
                                            )}
                                        </span>
                                    </S.ProductFooter>
                                </S.ProductInfo>
                            </S.ProductCartItem>
                        ))}
                    </S.WrapperProductsCart>
                </S.ContentCart>
            )}{' '}
            <S.ContentSidebar>
                <h2>Resumo do pedido</h2>
                <div>
                    <h3>Subtotal de produtos</h3>
                    <span>
                        {formatCentsInReal(cartPrice.subTotalPriceCart)}
                    </span>
                </div>

                {cartPrice.hasFreight && (
                    <div>
                        <h3>Entrega</h3>
                        <span>R$ 40</span>
                    </div>
                )}
                <hr />
                <div className="total">
                    <h3>Total</h3>
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
        </S.SectionCart>
    );
};

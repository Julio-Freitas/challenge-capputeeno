import { useCart } from '@/hooks/useCart';
import { formatCentsInReal } from '@/utils';
import * as S from './styles';
import { ItemsCart } from '@/context/CartContext/types';
import Image from 'next/image';
import { BackButton, DeleteIcon, Select } from '@/components';

export const ProductsCart = () => {
    const { items, onDeleteItem, totalItemsCart, cartPrice } = useCart();
    return (
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
                                    onClick={() => onDeleteItem(product)}
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
                                    {formatCentsInReal(+product.price_in_cents)}
                                </span>
                            </S.ProductFooter>
                        </S.ProductInfo>
                    </S.ProductCartItem>
                ))}
            </S.WrapperProductsCart>
        </S.ContentCart>
    );
};

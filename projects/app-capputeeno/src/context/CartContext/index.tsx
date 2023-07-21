'use client';

import { createContext, useEffect, useMemo, useState } from 'react';
import { CartContextProps, CartContextProviderProps, ItemsCart } from './types';
import { ProductData } from '@/types/server/products';
import { toast } from 'react-toastify';

export const KEY_STORAGE_PRODUCT = 'cart-item';

export const CartContext = createContext<CartContextProps>({
    items: [],
    totalItemsCart: 0,
    addProductInCart: () => false,
    onDeleteItem: () => false,
    cartPrice: {
        subTotalPriceCart: 0,
        hasFreight: true,
        total: 0
    }
});

export const CartContextProdiver = ({ children }: CartContextProviderProps) => {
    const [totalItemsCart, settotalItemsCart] = useState(0);
    const [items, setItems] = useState<ItemsCart[] | []>([]);

    useEffect(() => {
        const cartItems = localStorage.getItem(KEY_STORAGE_PRODUCT);

        if (cartItems) {
            const { items, totalItemsCart } = JSON.parse(cartItems);
            setItems(items);

            settotalItemsCart(totalItemsCart);
        }
    }, []);

    const addProductInCart = (product: ProductData) => {
        const cartItems = localStorage.getItem(KEY_STORAGE_PRODUCT);

        if (cartItems) {
            const itemsCartStorage = JSON.parse(cartItems);

            const existingProductIndex = itemsCartStorage?.items.findIndex(
                (item: { id: string }) => item.id === product.id
            );

            if (existingProductIndex != -1) {
                const currentItem: ItemsCart =
                    itemsCartStorage?.items[existingProductIndex];
                currentItem.quantity += 1;

                localStorage.setItem(
                    KEY_STORAGE_PRODUCT,
                    JSON.stringify(itemsCartStorage)
                );
                setItems(itemsCartStorage.items);
            } else {
                const joinItemsCart = [
                    { ...product, quantity: 1 },
                    ...itemsCartStorage.items
                ];

                const moreOneItemInStorage = {
                    items: joinItemsCart,
                    totalItemsCart: joinItemsCart.length
                };

                localStorage.setItem(
                    KEY_STORAGE_PRODUCT,
                    JSON.stringify(moreOneItemInStorage)
                );
                settotalItemsCart((oldValue) => ++oldValue);

                setItems(moreOneItemInStorage.items);
            }
        } else {
            const newProduct = { ...product, quantity: 1 };
            const newCart = {
                items: [{ ...newProduct }],
                totalItemsCart: 1
            };
            localStorage.setItem(KEY_STORAGE_PRODUCT, JSON.stringify(newCart));

            setItems(newCart.items);
            settotalItemsCart(1);
        }
        toast(
            <div>
                <h2>{product.name}</h2>
                <p> adicionado com sucesso!</p>
            </div>,
            {
                hideProgressBar: true,
                autoClose: 2000,
                type: 'success',
                draggable: true,
                position: 'top-right',
                theme: 'dark'
            }
        );
    };

    const updateState = (id: string) => {
        const newitems = items.filter((item) => item.id !== id);
        setItems(newitems);
        settotalItemsCart(newitems.length);
    };

    const onDeleteItem = (product: ProductData) => {
        const cartItems = localStorage.getItem(KEY_STORAGE_PRODUCT);
        if (cartItems) {
            const itemsCartStorage = JSON.parse(cartItems);
            const items = itemsCartStorage.items.filter(
                (item: ProductData) => item.id !== product.id
            );
            const newCart = {
                items,
                totalItemsCart: items.length
            };
            localStorage.setItem(KEY_STORAGE_PRODUCT, JSON.stringify(newCart));
            updateState(product.id);
        }
    };

    const addFrete = (total: number) => {
        if (total < 90000) return total + 4000;
        return total;
    };

    const cartPrice = useMemo(() => {
        const totalByItem = items.map(
            (product) => +product.price_in_cents * product.quantity
        );
        const subTotalPriceCart = totalByItem.reduce(
            (acc, current) => acc + current,
            0
        );

        return {
            subTotalPriceCart,
            hasFreight: subTotalPriceCart < 90000,
            total: addFrete(subTotalPriceCart)
        };
    }, [items]);

    return (
        <CartContext.Provider
            value={{
                items,
                totalItemsCart,
                addProductInCart,
                onDeleteItem,
                cartPrice
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

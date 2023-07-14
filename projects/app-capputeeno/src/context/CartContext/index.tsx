'use client';

import { createContext, useEffect, useState } from 'react';
import { CartContextProps, CartContextProviderProps, ItemsCart } from './types';
import { ProductData } from '@/types/server/products';
import { useLocationStorage } from '@/hooks/useLocationStore';

const KEY_STORAGE_PRODUCT = 'cart-item';

export const CartContext = createContext<CartContextProps>({
    items: [],
    totalCart: 0,
    addProductInCart: () => false
});
export const CartContextProdiver = ({ children }: CartContextProviderProps) => {
    const [totalCart, setTotalCart] = useState(0);
    const [items, setItems] = useState<ItemsCart[] | []>([]);
    const { value } = useLocationStorage(KEY_STORAGE_PRODUCT);

    useEffect(() => {
        const cartItems = localStorage.getItem(KEY_STORAGE_PRODUCT);
        if (cartItems) {
            const { items, totalCart } = JSON.parse(cartItems);
            setItems(items);

            setTotalCart(totalCart);
        }
    }, [value]);

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
            } else {
                const joinItemsCart = [
                    { ...product, quantity: 1 },
                    ...itemsCartStorage.items
                ];

                const moreOneItemInStorage = {
                    items: joinItemsCart,
                    totalCart: joinItemsCart.length
                };

                localStorage.setItem(
                    KEY_STORAGE_PRODUCT,
                    JSON.stringify(moreOneItemInStorage)
                );
                setTotalCart((oldValue) => ++oldValue);
            }
            setItems(itemsCartStorage.items);
        } else {
            const newProduct = { ...product, quantity: 1 };
            const newCart = {
                items: [{ ...newProduct }],
                totalCart: 1
            };
            localStorage.setItem(KEY_STORAGE_PRODUCT, JSON.stringify(newCart));
            setItems(newCart.items);
            setTotalCart(1);
        }
    };

    return (
        <CartContext.Provider value={{ items, totalCart, addProductInCart }}>
            {children}
        </CartContext.Provider>
    );
};

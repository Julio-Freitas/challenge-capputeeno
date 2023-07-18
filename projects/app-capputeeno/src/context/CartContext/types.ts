import { ProductData } from '@/types/server/products';

export interface ItemsCart extends ProductData {
    quantity: number;
}
export interface CartContextProps {
    items: ItemsCart[];
    totalItemsCart: number;
    addProductInCart: (product: ProductData) => void;
    onDeleteItem: (product: ProductData) => void;
    cartPrice: {
        subTotalPriceCart: number;
        hasFreight: boolean;
        total: number;
    };
}

export interface CartContextProviderProps {
    children: React.ReactNode;
}

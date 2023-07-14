import { ProductData } from '@/types/server/products';

export interface ItemsCart extends ProductData {
    quantity: number;
}
export interface CartContextProps {
    items: ItemsCart[];
    totalCart: number;
    addProductInCart: (product: ProductData) => void;
}

export interface CartContextProviderProps {
    children: React.ReactNode;
}

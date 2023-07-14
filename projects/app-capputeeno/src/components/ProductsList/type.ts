export interface ProductsListProps {}

export interface ProductCardProps {
    id: string;
    image: string;
    title: string;
    price: string;
    onClick?: (id: string) => void;
}

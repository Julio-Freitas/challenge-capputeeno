export interface ProductData {
    id: string;
    name: string;
    price_in_cents: string;
    image_url: string;
}

export interface ProductFetchResponse {
    data: {
        allProducts: ProductData[];
    };
}

export interface ProductFetchCountResponse {
    data: { _allProductsMeta: { count: number } };
}

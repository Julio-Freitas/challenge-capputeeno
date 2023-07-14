export interface ProductData {
    id: string;
    name: string;
    price_in_cents: string;
    image_url: string;
    category?: string;
    description?: string;
}

export interface ProductsFetchResponse {
    data: {
        allProducts: ProductData[];
    };
}
export interface ProductFetchResponse {
    data: {
        Product: ProductData;
    };
}

export interface ProductFetchCountResponse {
    data: { _allProductsMeta: { count: number } };
}

import { ProductFetchResponse } from "@/types/server/products";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { useFilter } from "./useFilter";
import { mountQuery } from "./mountQuery";
import { useDeferredValue } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetcher = (query: string): AxiosPromise<ProductFetchResponse> =>
  axios.post(API_URL, { query });

export function useProducts() {
  const { type, priority, search } = useFilter();
  const searchDeferred = useDeferredValue(search);
  const queryTypeCategory = mountQuery(type, priority);

  const { data } = useQuery({
    queryFn: () => fetcher(queryTypeCategory),
    queryKey: ["products", type, priority],
  });

  const allProductsSearch = data?.data.data.allProducts.filter((product) =>
    product.name
      .toLocaleLowerCase()
      .includes(searchDeferred.toLocaleLowerCase() ?? "")
  );
  return {
    data: allProductsSearch,
  };
}

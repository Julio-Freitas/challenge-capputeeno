import { ProductFetchResponse } from "@/types/server/products";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { useFilter } from "./useFilter";
import { mountQuery } from "./mountQuery";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetcher = (query: string): AxiosPromise<ProductFetchResponse> =>
  axios.post(API_URL, { query });

export function useProducts() {
  const { type, priority } = useFilter();
  const queryTypeCategory = mountQuery(type, priority);

  const { data } = useQuery({
    queryFn: () => fetcher(queryTypeCategory),
    queryKey: ["products", type, priority],
  });

  return {
    data: data?.data.data.allProducts,
  };
}

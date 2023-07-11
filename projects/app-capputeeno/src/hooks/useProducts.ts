import { ProductFetchResponse } from "@/types/server/products";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { useFilter } from "./useFilter";
import { FilterType } from "@/types/enum/filter";
import { queryCategoryByType } from "@/utils";
const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const attibutesData = `
    id,
    name,
    price_in_cents,
    image_url,
`;

const mountQuery = (type: FilterType) => {
  if (type === FilterType.ALL)
    return `
        query {
            allProducts{
                ${attibutesData}
            }
        }
      `;

  return `
        query {
            allProducts(filter: {category: "${queryCategoryByType(type)}"}){
                ${attibutesData}
            }
        }
      `;
};

const fetcher = (query: string): AxiosPromise<ProductFetchResponse> =>
  axios.post(API_URL, { query });

export function useProducts() {
  const { type } = useFilter();
  const queryTypeCategory = mountQuery(type);
  console.log(queryTypeCategory);
  const { data } = useQuery({
    queryFn: () => fetcher(queryTypeCategory),
    queryKey: ["products", type],
  });

  return {
    data: data?.data.data.allProducts,
  };
}

import { FiltePriority, FilterType } from "@/types/enum/filter";
import { queryByFiltePriority, queryCategoryByType } from "@/utils";

const attibutesData = `
    id,
    name,
    price_in_cents,
    image_url,
`;

export const mountQuery = (type: FilterType, priority: FiltePriority) => {
  if (type === FilterType.ALL && priority === FiltePriority.POPULARITY)
    return `
        query {
            allProducts(sortField: "sales", sortOrder: "DSC"){
                ${attibutesData}
            }
        }
      `;

  const { field, order } = queryByFiltePriority(priority);
  const category = queryCategoryByType(type);

  const filter = `sortField: "${field}", sortOrder: "${order}", ${
    category ? `filter: { category: "${category}"}` : ""
  }`;

  return `
        query {
            allProducts(${filter}){
                ${attibutesData}
            }
        }
      `;
};

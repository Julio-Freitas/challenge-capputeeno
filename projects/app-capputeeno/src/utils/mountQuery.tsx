import { FiltePriority, FilterType } from '@/types/enum/filter';
import { queryByFiltePriority, queryCategoryByType } from '@/utils';

export const PER_PAGE = 12;

const fragmentsAttibutesData = `
    id,
    name,
    price_in_cents,
    image_url,
`;

export const mountQuery = (
    type: FilterType,
    priority: FiltePriority,
    page: number
) => {
    if (type === FilterType.ALL && priority === FiltePriority.POPULARITY)
        return `
        query {
            allProducts(sortField: "sales", sortOrder: "DSC", perPage:${PER_PAGE}, page: ${page || 1
            }){
                ${fragmentsAttibutesData}
            }
        }
      `;

    const { field, order } = queryByFiltePriority(priority);
    const category = queryCategoryByType(type);

    const filter = `sortField: "${field}", sortOrder: "${order}", ${category
        ? `filter: { category: "${category}"}`
        : ''
        }perPage:${PER_PAGE}, page:${page}`;

    return `
        query {
            allProducts(${filter}){
                ${fragmentsAttibutesData}
            }
        }
      `;
};

import { FiltePriority } from "@/types/enum/filter";

export function queryByFiltePriority(priority: FiltePriority) {
  if (priority === FiltePriority.NEWS)
    return { field: "created_at", order: "ASC" };
  if (priority === FiltePriority.BIGGEST_PRICE)
    return { field: "price_in_cents", order: "DSC" };
  if (priority === FiltePriority.MINOR_PRICE)
    return { field: "price_in_cents", order: "ASC" };
  return { field: "sales", order: "DSC" };
}

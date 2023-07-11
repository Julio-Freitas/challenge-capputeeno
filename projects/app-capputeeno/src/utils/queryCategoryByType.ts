import { FilterType } from "@/types/enum/filter";

export function queryCategoryByType(type: FilterType) {
  if (type === FilterType.MUG) return "mugs";
  if (type === FilterType.SHIRT) return "t-shirts";
  return "";
}

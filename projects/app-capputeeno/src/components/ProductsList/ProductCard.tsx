import Image from "next/image";
import * as S from "./style";
import { ProductCardProps } from "./type";
import { formatCentsInReal } from "@/utils";
export const ProductCard = ({ image, price, title }: ProductCardProps) => (
  <S.ProductItem>
    <Image
      width={256}
      height={256}
      src={image}
      alt={title}
      title={`${title} by ${price}`}
    />
    <h3>{title}</h3>
    <p>{formatCentsInReal(+price)}</p>
  </S.ProductItem>
);

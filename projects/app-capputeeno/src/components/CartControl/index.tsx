"use client";

import * as S from "./styles";
import { CartIcon } from "../icons";
import { useLocationStorage } from "@/hooks/useLocationStore";

export function CartControl() {
  const { value } = useLocationStorage("cart-item", []);
  return (
    <S.Container>
      <CartIcon />
      {value?.length && <S.CartCount>{value.length}</S.CartCount>}
    </S.Container>
  );
}

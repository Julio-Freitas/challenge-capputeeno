export const formatCentsInReal = (valueInCents: number) => {
  const valueInReal = valueInCents / 100;
  return valueInReal.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
};

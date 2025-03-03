export function formatCurrency(num: number) {
  return (num ?? 0).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}

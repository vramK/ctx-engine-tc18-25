export function applyDiscount(price: number, pct: number): number {
  if (price <= 0) return 0;
  return price - (price * pct) / 100;
}

export function applyDiscount(price: number, pct: number): number {
  if (price <= 0) return 0;
  const capped = Math.min(pct, 50);
  return price - (price * capped) / 100;
}

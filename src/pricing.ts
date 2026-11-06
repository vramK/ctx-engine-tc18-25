export function applyDiscount(price: number, pct: number): number {
  const capped = Math.min(pct, 50);
  return price - (price * capped) / 100;
}

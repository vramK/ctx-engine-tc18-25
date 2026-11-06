export function addItem(cart: string[], sku: string): string[] {
  return [...cart, sku];
}
export function cartSize(cart: string[]): number {
  return cart.length;
}

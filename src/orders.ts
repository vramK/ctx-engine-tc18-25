export function createOrder(sku: string, qty: number): string {
  return `order:${sku}:${qty}`;
}

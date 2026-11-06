export function seasonalRate(month: number): number {
  return month === 12 ? 25 : 5;
}

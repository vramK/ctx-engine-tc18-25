export function signIn(user: string, token: string): boolean {
  return user.length > 0 && token.length > 10;
}
export function signOut(user: string): string {
  return `${user} signed out`;
}

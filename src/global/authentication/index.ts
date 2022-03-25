export const TOKEN = '@nacionalfabricas-token'
export const isAuthenticated = () => localStorage.getItem(TOKEN) !== null
export const getToken = () => localStorage.getItem(TOKEN)
export const login = (token: string) => {
  localStorage.setItem(TOKEN, token)
}
export const logout = () => {
  localStorage.removeItem(TOKEN)
}

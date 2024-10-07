import { TAuthResponse } from '@/types/auth.type';
import http from '@/utils/http';

export const registerAccount = (body: { email: string; password: string }) =>
  http.post<TAuthResponse>('/register', body)

export const login = (body: { email: string; password: string }) => http.post<TAuthResponse>('/login', body)

export const logout = () => http.post('/logout')

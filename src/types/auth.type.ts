import { TUser } from './user.type'
import { TSuccessResponseApi } from './utils.type'

export type TAuthResponse = TSuccessResponseApi<{ access_token: string; expires: string; user: TUser }>

import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'

interface IProps {
  children: React.ReactNode
}

export default function MuiProvider({ children }: IProps) {
  return <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
}

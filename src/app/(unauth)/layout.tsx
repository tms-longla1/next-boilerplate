import { Box, Stack, Typography } from '@mui/material'
import Container from '@mui/material/Container'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
export default function UnAuthLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const t = useTranslations('login')

  return (
    <Container className="w-full">
      <Box className="bg-[url('/images/mockup/list-AI-bot-bg.png')] bg-no-repeat bg-cover">
        <Box className="h-[200px] bg-fade-bottom-gradual"></Box>
      </Box>
      <Box className="min-h-[calc(100vh-200px)] flex flex-col items-center">
        <Stack className="max-w-[400px] py-8">
          <Stack direction="column" alignItems="center" spacing="1rem" marginBottom="1rem">
            <Image
              src="/images/mockup/poe-light-icon.svg"
              width="128"
              height="36"
              alt="logo"
              style={{ width: '128px', height: '36px' }}
            />
            <Typography component="h1" fontWeight="bold" fontSize="1.25rem" lineHeight="1.75rem" align="center">
              {t('description')}
            </Typography>
          </Stack>
          {children}
        </Stack>
      </Box>
    </Container>
  )
}

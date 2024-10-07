'use client'

import { login } from '@/apis/example'
import PRTextField from '@/components/Form/PRTextField'
import { TErrorResponseApi } from '@/types/utils.type'
import { isAxiosUnprocessableEntityError } from '@/utils/utils'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Stack } from '@mui/material'
import { useMutation } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

export default function Login() {
  const t = useTranslations()
  const authSchema = yup.object({
    email: yup.string().required('Email là bắt buộc').email('Email không đúng định dạng'),
    password: yup
      .string()
      .required('Password là bắt buộc')
      .min(6, 'Độ dài từ 6 - 160 kí tự')
      .max(160, 'Độ dài từ 6 - 160 kí tự')
  })

  type TAuthSchema = yup.InferType<typeof authSchema>
  // const { setIsAuthenticated } = useContext(AppContext)
  // const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<TAuthSchema>({
    resolver: yupResolver(authSchema)
  })

  const loginMutation = useMutation({
    mutationFn: (body: TAuthSchema) => login(body)
  })

  const onSubmit = handleSubmit((data) => {
    loginMutation.mutate(data, {
      onSuccess: () => {
        // setIsAuthenticated(true)
        // navigate('/')
      },
      onError: (error) => {
        if (isAxiosUnprocessableEntityError<TErrorResponseApi<TAuthSchema>>(error)) {
          const responseError = error.response?.data.data
          if (responseError) {
            setError('password', {
              message: responseError.email,
              type: 'server'
            })
          }
        }
      }
    })
  })

  return (
    <Stack component="form" direction="column" gap="1.5rem" onSubmit={onSubmit} noValidate>
      <PRTextField
        type="email"
        name="email"
        label={t('common.email')}
        register={register}
        errorMessage={errors.email?.message}
        placeholder={t('common.email')}
      />
      <PRTextField
        type="password"
        name="password"
        label={t('common.password')}
        register={register}
        errorMessage={errors.password?.message}
        placeholder={t('common.password')}
      />
      <Button variant="contained" type="submit" className="bg-color-button-default mt-3">
        {t('login.login-btn')}
      </Button>
    </Stack>
  )
}

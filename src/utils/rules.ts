import * as yup from 'yup'

export const authSchema = yup.object({
  email: yup.string().required('Email là bắt buộc').email('Email không đúng định dạng'),
  password: yup
    .string()
    .required('Password là bắt buộc')
    .min(6, 'Độ dài từ 6 - 160 kí tự')
    .max(160, 'Độ dài từ 6 - 160 kí tự')
})

export type TAuthSchema = yup.InferType<typeof authSchema>

import { FormControl, FormHelperText, InputLabel, OutlinedInput } from '@mui/material'
import { RegisterOptions, UseFormRegister } from 'react-hook-form'

interface IProps {
  type: React.HTMLInputTypeAttribute
  errorMessage?: string
  placeholder?: string
  name: string
  rules?: RegisterOptions
  label?: string
  register: UseFormRegister<any>
}

export default function PRTextField({ errorMessage, placeholder, label, type, name, rules, register }: IProps) {
  return (
    <FormControl>
      {label && (
        <InputLabel shrink classes={{ root: 'static text-md text-white transform-none mb-2' }}>
          {label}
        </InputLabel>
      )}
      <OutlinedInput
        type={type}
        placeholder={placeholder}
        classes={{
          root: 'group',
          input: 'bg-base text-md text-white py-2 px-3.5 rounded-lg',
          notchedOutline:
            'border border-color-input-default rounded-lg group-focus-within:border-color-input-focus-default'
        }}
        autoComplete={`new-${type}`}
        inputProps={{ ...register(name, rules) }}
      />
      {errorMessage && <FormHelperText className="text-red-500 mx-0">{errorMessage}</FormHelperText>}
    </FormControl>
  )
}

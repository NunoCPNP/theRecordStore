import { useState } from 'react'

import { Container } from './Input.styles'

type Props = {
  label?: string
  name: string
  value: string
  placeholder?: string
  onChange: (arg: any) => void
}

const Input: React.FC<Props> = ({ label, name, value, onChange, placeholder }) => {
  return (
    <Container>
      {label && <label htmlFor={name}>{label}</label>}
      <input name={name} value={value} placeholder={placeholder} onChange={onChange} />
    </Container>
  )
}

export default Input

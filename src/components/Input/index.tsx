import { Feather } from '@expo/vector-icons'
import theme from '@theme/index'
import React, { useState } from 'react'
import { TextInputProps } from 'react-native'

import { Container, IconContainer, InputText } from './styles'

interface Props extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>['name']
  value?: string
}

export function Input({ iconName, value, ...rest }: Props) {
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  function handleInputFocus() {
    setIsFocused(true)
  }

  function handleInputBlur() {
    setIsFocused(false)
    setIsFilled(!!value)
  }

  return (
    <Container>
      <IconContainer isFocused={isFocused} isFilled={isFilled}>
        <Feather
          name={iconName}
          size={24}
          color={
            isFocused || isFilled
              ? theme.colors.brandDark
              : theme.colors.brandLight
          }
        />
      </IconContainer>

      <InputText
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        isFocused={isFocused}
        isFilled={isFilled}
        {...rest}
      />
    </Container>
  )
}

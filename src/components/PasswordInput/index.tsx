import { Feather } from '@expo/vector-icons'
import theme from '@theme/index'
import React, { useState } from 'react'
import { TextInputProps } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'

import { Container, IconContainer, InputText } from './styles'

interface Props extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>['name']
  value?: string
}

export function PasswordInput({ iconName, value, ...rest }: Props) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(true)
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  function handleInputFocus() {
    setIsFocused(true)
  }

  function handleInputBlur() {
    setIsFocused(false)
    setIsFilled(!!value)
  }

  function handlePasswordVisibilityChange() {
    setIsPasswordVisible((prevState) => !prevState)
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
        secureTextEntry={isPasswordVisible}
        autoCorrect={false}
        autoCapitalize="none"
        isFocused={isFocused}
        isFilled={isFilled}
        {...rest}
      />

      <BorderlessButton onPress={handlePasswordVisibilityChange}>
        <IconContainer isFocused={isFocused} isFilled={isFilled}>
          <Feather
            name={isPasswordVisible ? 'eye' : 'eye-off'}
            size={24}
            color={theme.colors.brandLight}
          />
        </IconContainer>
      </BorderlessButton>
    </Container>
  )
}

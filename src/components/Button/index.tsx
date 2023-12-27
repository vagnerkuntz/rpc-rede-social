import theme from '@theme/index'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { ActivityIndicator } from 'react-native'
import { RectButtonProps } from 'react-native-gesture-handler'

import { Container, Title } from './styles'

interface Props extends RectButtonProps {
  title: string
  color?: string
  loading?: boolean
  light?: boolean
}

export function Button({
  title,
  color,
  onPress,
  enabled = true,
  loading = false,
  light = false
}: Props) {
  if (!color) {
    return (
      <LinearGradient
        colors={['#004C89', '#00649A']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Container
          onPress={onPress}
          enabled={enabled}
          style={{ opacity: enabled === false || loading === true ? 0.5 : 1 }}
        >
          {loading ? (
            <ActivityIndicator color={theme.colors.white} />
          ) : (
            <Title light={light}>{title}</Title>
          )}
        </Container>
      </LinearGradient>
    )
  }

  return (
    <Container
      color={color ? color : theme.colors.brandLight}
      onPress={onPress}
      enabled={enabled}
      style={{ opacity: enabled === false || loading === true ? 0.5 : 1 }}
    >
      {loading ? (
        <ActivityIndicator color={theme.colors.black} />
      ) : (
        <Title light={light}>{title}</Title>
      )}
    </Container>
  )
}

import styled from 'styled-components/native'

import theme from '../../theme'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.white};
`

export const LoadIndicator = styled.ActivityIndicator.attrs(() => ({
  size: 'large',
  color: theme.colors.brandDark
}))``

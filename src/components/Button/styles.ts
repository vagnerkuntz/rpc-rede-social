import { RectButton } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

interface ButtonProps {
  color?: string
}

interface ButtonTextProps {
  light: boolean
}

export const Container = styled(RectButton)<ButtonProps>`
  width: 100%;

  padding: 20px;
  align-items: center;
  justify-content: center;

  background-color: ${({ color }) => color};
`

export const Title = styled.Text<ButtonTextProps>`
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${RFValue(15)}px;
  color: ${({ theme, light }) =>
    light ? theme.colors.black : theme.colors.white};
`

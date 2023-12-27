import { TextInput } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import styled, { css } from 'styled-components/native'

interface Props {
  isFocused: boolean
  isFilled: boolean
}

export const Container = styled.View`
  flex-direction: row;

  margin-bottom: 8px;
`

export const IconContainer = styled.View<Props>`
  height: 56px;
  width: 55px;
  justify-content: center;
  align-items: center;

  margin-right: 2px;
  background-color: ${({ theme }) => theme.colors.white};

  ${({ isFocused, isFilled, theme }) =>
    isFocused || isFilled
      ? css`
          border-bottom-width: 2px;
          border-bottom-color: ${theme.colors.brandDark};
        `
      : css`
          border-bottom-width: 2px;
          border-bottom-color: ${theme.colors.brandLight};
        `};
`

export const InputText = styled(TextInput)<Props>`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${RFValue(15)}px;

  padding: 0 10px;

  ${({ isFocused, isFilled, theme }) =>
    isFocused || isFilled
      ? css`
          border-bottom-width: 2px;
          border-bottom-color: ${theme.colors.brandDark};
        `
      : css`
          border-bottom-width: 2px;
          border-bottom-color: ${theme.colors.brandLight};
        `};
`

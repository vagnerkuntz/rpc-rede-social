import styled from 'styled-components/native'

export const Container = styled.View`
  padding: 0 24px;
  background-color: ${({ theme }) => theme.colors.white};
`

export const Logo = styled.Image`
  height: 180px;
  object-fit: contain;
  align-self: center;
  border-radius: 20px;
  margin-top: -0px;
`

export const Header = styled.View`
  width: 100%;
  margin-top: 50px;
`

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.large}px;
  color: ${({ theme }) => theme.colors.brandLight};
  text-align: center;
`

export const Form = styled.View`
  width: 100%;
  margin: 64px 0;
`

export const Footer = styled.View``

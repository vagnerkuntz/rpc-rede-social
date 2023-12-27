import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
`

export const Header = styled.View`
  background-color: ${({ theme }) => theme.colors.brandLight};
`

export const Photo = styled.View`
  width: 180px;
  height: 180px;
  border-radius: 90px;
  margin: 20px auto;
  overflow: hidden;
`

export const ChangePhotoText = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${({ theme }) => theme.fontSize.small}px;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.brandLight};
  width: 140px;
  margin: 10px auto;
  border-radius: 10px;
  padding: 10px;
`

export const LogoutButton = styled.TouchableOpacity`
  border: 1px solid ${({ theme }) => theme.colors.brandDanger};
  padding: 10px;
  border-radius: 10px;
  width: 200px;
  margin: 0 auto 10px;
`

export const LogoutButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${({ theme }) => theme.fontSize.small}px;
  text-align: center;
`

import styled from 'styled-components/native'

export const Image = styled.Image`
  border-radius: ${(props) => (props.width ? props.width / 2 : 0)}px;
  border-color: ${(props) => props.theme.colors.brandLight};
  border-width: 2px;
  width: ${(props) => (props.width ? props.width : 0)}px;
  height: ${(props) => (props.height ? props.height : 0)}px;
`

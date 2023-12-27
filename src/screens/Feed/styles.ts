import styled from 'styled-components/native'

export const VideoOverlay = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.Text`
  font-size: 16px;
  color: white;
  font-weight: bold;
`

export const Description = styled.Text`
  font-size: 14px;
  color: white;
`

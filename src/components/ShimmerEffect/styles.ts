import { LinearGradient } from 'expo-linear-gradient'
import { Dimensions, Animated } from 'react-native'
import styled from 'styled-components/native'

export const ShimmerContainer = styled.View`
  width: 100%;
  height: ${Dimensions.get('window').height}px;
  background-color: #e0e0e0;
  overflow: hidden;
`

export const ShimmerAnimatedView = styled(Animated.View)`
  width: 100%;
  height: 100%;
  position: absolute;
`

export const ShimmerGradient = styled(LinearGradient)`
  width: 100%;
  height: 100%;
`

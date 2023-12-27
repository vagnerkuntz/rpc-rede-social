import React, { useRef, useEffect } from 'react'
import { Animated } from 'react-native'

import {
  ShimmerAnimatedView,
  ShimmerContainer,
  ShimmerGradient
} from './styles'

export const ShimmerEffect: React.FC = () => {
  const animatedValue = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true
      })
    ).start()
  }, [animatedValue])

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-200, 200]
  })

  return (
    <ShimmerContainer>
      <ShimmerAnimatedView
        style={{
          transform: [{ translateX }]
        }}
      >
        <ShimmerGradient
          colors={['transparent', 'rgba(255,255,255,0.5)', 'transparent']}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
        />
      </ShimmerAnimatedView>
    </ShimmerContainer>
  )
}

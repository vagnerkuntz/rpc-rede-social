import { ImageProps } from 'react-native'

import { Image } from './styles'

interface Props extends ImageProps {
  width: number
  height: number
}

export function UserPhoto({ width, height, ...rest }: Props) {
  return <Image width={width} height={height} {...rest} />
}

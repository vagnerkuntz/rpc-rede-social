import { ShimmerEffect } from '@components/ShimmerEffect'
import { UserPhoto } from '@components/UserPhoto'
import { ResizeMode, Video } from 'expo-av'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity, View, Dimensions } from 'react-native'

import { Description, Title, VideoOverlay } from './styles'
import { UserType } from '../../context/UserContext'
import { Video as VideoType } from '../../hooks/useFetchVideos'

interface VideoItemProps {
  item: VideoType
  isLoaded: boolean
  loading: boolean
  currentPlaying: string | null
  setIsLoaded: (isLoaded: boolean) => void
}

export const VideoItem: React.FC<VideoItemProps> = ({
  item,
  isLoaded,
  loading,
  currentPlaying,
  setIsLoaded
}) => {
  const itemHeight = Dimensions.get('window').height
  const [isPlaying, setIsPlaying] = useState(true)
  const [user, setUser] = useState<UserType>()

  async function fetchUserById(userId: number) {
    try {
      const response = await fetch(`http://192.168.1.7:3333/users/${userId}`)
      if (!response.ok) {
        throw new Error('Usuário não encontrado')
      }
      const user = await response.json()
      return user
    } catch (error) {
      console.error('Erro ao buscar usuário:', error)
    }
  }

  const handlePressVideo = () => {
    setIsPlaying(!isPlaying)
  }

  useEffect(() => {
    fetchUserById(item.userId).then(setUser)
  }, [item.userId])

  return (
    <View style={{ height: itemHeight }}>
      {!!(!isLoaded || loading || currentPlaying !== item.id.toString()) && (
        <ShimmerEffect />
      )}

      <TouchableOpacity activeOpacity={1} onPress={handlePressVideo}>
        <Video
          source={{ uri: item.urlVideo }}
          rate={1.0}
          volume={1.0}
          isMuted={
            !!(!isLoaded || loading || currentPlaying !== item.id.toString())
          }
          onLoad={() => setIsLoaded(true)}
          resizeMode={ResizeMode.CONTAIN}
          shouldPlay={currentPlaying === item.id.toString() && isPlaying}
          isLooping
          style={
            isLoaded
              ? { width: '100%', height: itemHeight }
              : { display: 'none' }
          }
        />
      </TouchableOpacity>
      <VideoOverlay>
        <View>
          <Title>{item.title}</Title>
          <Description>{user?.name}</Description>
        </View>
        <UserPhoto
          width={30}
          height={30}
          source={{ uri: user?.profilePicture }}
        />
      </VideoOverlay>
    </View>
  )
}

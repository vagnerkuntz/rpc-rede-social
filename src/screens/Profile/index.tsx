import { ScreenHeader } from '@components/ScreenHeader'
import { ShimmerEffect } from '@components/ShimmerEffect'
import { UserPhoto } from '@components/UserPhoto'
import * as ImagePicker from 'expo-image-picker'
import { useState } from 'react'
import {
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View
} from 'react-native'

import {
  ChangePhotoText,
  Container,
  LogoutButton,
  LogoutButtonText,
  Photo
} from './styles'
import { useUser } from '../../hooks/useUser'

export function Profile() {
  const { user, logout } = useUser()
  const [photoIsLoading, setPhotoIsLoading] = useState(true)
  const [userPhoto, setUserPhoto] = useState('')

  async function handleUserPhotoSelect() {
    try {
      const photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
        aspect: [4, 4]
      })
      if (photoSelected.canceled) return

      setUserPhoto(photoSelected.assets[0].uri)
      setPhotoIsLoading(false)
    } catch (error) {
      console.log('[ERROR] handleUserPhotoSelect', error)
    }
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <ScreenHeader title="Perfil" />

      <ScrollView>
        {photoIsLoading ? (
          <Photo>
            <ShimmerEffect />
          </Photo>
        ) : (
          <Photo>
            <UserPhoto
              source={{
                uri: user?.profilePicture ?? userPhoto
              }}
              width={180}
              height={180}
              alt="Foto do usuário"
            />
          </Photo>
        )}
        <TouchableOpacity onPress={handleUserPhotoSelect}>
          <ChangePhotoText>Alterar foto</ChangePhotoText>
        </TouchableOpacity>
      </ScrollView>

      <LogoutButton onPress={logout}>
        <LogoutButtonText>Sair</LogoutButtonText>
      </LogoutButton>
    </Container>
  )
}

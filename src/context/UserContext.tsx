import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { createContext, useEffect, useState } from 'react'

export type UserType = {
  id: number
  name: string
  email: string
  password: string
  profilePicture: string
}

type UserContextType = {
  user: UserType
  setUser: React.Dispatch<React.SetStateAction<UserType>>
  logout: () => Promise<void>
}

export const UserContext = createContext<UserContextType>({} as UserContextType)

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [user, setUser] = useState<UserType>({} as UserType)

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('user')
      setUser({} as UserType)
    } catch (error) {
      console.error('Erro ao limpar os dados do usuário:', error)
    }
  }

  useEffect(() => {
    const saveUserData = async (user: UserType) => {
      try {
        await AsyncStorage.setItem('user', JSON.stringify(user))
      } catch (error) {
        console.error('Erro ao salvar os dados do usuário:', error)
      }
    }

    if (Object.keys(user).length > 0) {
      saveUserData(user)
    }
  }, [user])

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const userData = await AsyncStorage.getItem('user')
        if (userData !== null) {
          const user = JSON.parse(userData)
          setUser(user)
        }
      } catch (error) {
        console.error('Erro ao carregar os dados do usuário:', error)
      }
    }

    loadUserData()
  }, [])

  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  )
}

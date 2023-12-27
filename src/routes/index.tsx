import { NavigationContainer } from '@react-navigation/native'
import React from 'react'

import { PrivateRoutes } from './private.routes'
import { PublicRoutes } from './public.routes'
import { useUser } from '../hooks/useUser'

export function Routes() {
  const { user } = useUser()

  return (
    <NavigationContainer>
      {user?.name ? <PrivateRoutes /> : <PublicRoutes />}
    </NavigationContainer>
  )
}

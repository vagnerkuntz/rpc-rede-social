import { MaterialIcons } from '@expo/vector-icons'
import {
  BottomTabNavigationProp,
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs'
import { Feed } from '@screens/Feed'
import { Profile } from '@screens/Profile'
import { Platform } from 'react-native'
import { useTheme } from 'styled-components/native'

type PrivateRoutesType = {
  Feed: undefined
  Profile: undefined
}

export type NativeStackPrivateRoutesProps =
  BottomTabNavigationProp<PrivateRoutesType>
const { Navigator, Screen } = createBottomTabNavigator<PrivateRoutesType>()

export function PrivateRoutes() {
  const theme = useTheme()

  return (
    <Navigator
      initialRouteName="Feed"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.brandLight,
        tabBarInactiveTintColor: theme.colors.brandLight,
        tabBarLabelPosition: 'beside-icon',
        tabBarStyle: {
          height: 80,
          paddingVertical: Platform.OS === 'ios' ? 20 : 0
        }
      }}
    >
      <Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="format-line-spacing"
              size={size}
              color={color}
            />
          )
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="format-line-spacing"
              size={size}
              color={color}
            />
          )
        }}
      />
    </Navigator>
  )
}

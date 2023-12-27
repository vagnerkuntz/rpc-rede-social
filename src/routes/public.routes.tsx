import {
  createNativeStackNavigator,
  NativeStackNavigationProp
} from '@react-navigation/native-stack'
import { Register } from '@screens/Register'
import { SignIn } from '@screens/SignIn'

type PublicRoutesType = {
  SignIn: undefined
  Register: undefined
}

export type NativeStackPublicRoutesProps =
  NativeStackNavigationProp<PublicRoutesType>
const { Navigator, Screen } = createNativeStackNavigator<PublicRoutesType>()

export function PublicRoutes() {
  return (
    <Navigator
      initialRouteName="SignIn"
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen name="SignIn" component={SignIn} />
      <Screen name="Register" component={Register} />
    </Navigator>
  )
}

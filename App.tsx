import {
  useFonts,
  OpenSans_400Regular,
  OpenSans_700Bold
} from '@expo-google-fonts/open-sans'
import { ThemeProvider } from 'styled-components/native'

import { Loading } from './src/components/Loading'
import { SignIn } from './src/screens/SignIn'
import theme from './src/theme'

export default function App() {
  const [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_700Bold
  })

  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <ThemeProvider theme={theme}>
      <SignIn />
    </ThemeProvider>
  )
}

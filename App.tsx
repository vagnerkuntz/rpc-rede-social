import {
  useFonts,
  OpenSans_400Regular,
  OpenSans_700Bold
} from '@expo-google-fonts/open-sans'
import { FlatList, Text, View } from 'react-native'
import { ThemeProvider } from 'styled-components/native'

import { Loading } from './src/components/Loading'
import { Video, useFetchVideos } from './src/hooks/useFetchVideos'
import { SignIn } from './src/screens/SignIn'
import theme from './src/theme'

const ListItem = ({ video }: { video: Video }) => {
  return (
    <View>
      <Text>Id: {video.id}</Text>
      <Text>Title: {video.title}</Text>
    </View>
  )
}

export default function App() {
  const [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_700Bold
  })

  const { data, loading, error, nextPage } = useFetchVideos()

  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <ThemeProvider theme={theme}>
      {/* <SignIn /> */}
      <View style={{ flex: 1, alignItems: 'center' }}>
        <FlatList
          data={data}
          renderItem={({ item }) => <ListItem video={item} />}
          keyExtractor={(item) => item.id?.toString()}
          onEndReached={nextPage}
          onEndReachedThreshold={0.1}
        />
      </View>
    </ThemeProvider>
  )
}

import { useFocusEffect } from '@react-navigation/native'
import React, { useCallback, useRef, useState } from 'react'
import { FlatList, Dimensions, ViewToken } from 'react-native'

import { VideoItem } from './VideoItem'
import { useFetchVideos, Video as VideoType } from '../../hooks/useFetchVideos'

export const Feed: React.FC = () => {
  const { videos, loading, nextPage } = useFetchVideos()

  const [isLoaded, setIsLoaded] = useState(false)
  const [currentPlaying, setCurrentPlaying] = useState<string | null>(null)
  const [visibleItemsIndices, setVisibleItemsIndices] = useState<number[]>([])

  const viewabilityConfig = useRef({
    viewAreaCoveragePercentThreshold: 50
  }).current

  const onViewableItemsChanged = useRef(
    ({
      viewableItems
    }: {
      viewableItems: ViewToken[]
      changed: ViewToken[]
    }) => {
      const visibleIndices = viewableItems
        .map((vi) => vi.index)
        .filter((index) => index !== null) as number[]
      setVisibleItemsIndices(visibleIndices)

      if (viewableItems.length > 0 && viewableItems[0].index !== null) {
        setCurrentPlaying(viewableItems[0].item.id.toString())
      } else {
        setCurrentPlaying(null)
      }
    }
  ).current

  const itemHeight = Dimensions.get('window').height

  const renderItem = ({ item }: { item: VideoType }) => (
    <VideoItem
      item={item}
      isLoaded={isLoaded}
      loading={loading}
      currentPlaying={currentPlaying}
      setIsLoaded={setIsLoaded}
    />
  )

  useFocusEffect(
    useCallback(() => {
      if (visibleItemsIndices.length > 0) {
        const firstVisibleIndex = visibleItemsIndices[0]
        setCurrentPlaying(videos[firstVisibleIndex].id.toString())
      }

      return () => {
        setCurrentPlaying(null)
      }
    }, [visibleItemsIndices, videos])
  )

  return (
    <FlatList
      data={videos}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      onEndReached={nextPage}
      onViewableItemsChanged={onViewableItemsChanged}
      viewabilityConfig={viewabilityConfig}
      snapToInterval={itemHeight}
      snapToAlignment="start"
      decelerationRate="fast"
    />
  )
}

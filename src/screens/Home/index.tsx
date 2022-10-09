import React from 'react';
import Carousel from 'react-native-snap-carousel';
import {ActivityIndicator, Dimensions, ScrollView, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useMovies, Card, FlatListCustom} from '../../index';
import {styles} from './HomeStyle';

const {width: windowWidth} = Dimensions.get('window');

export const HomeScreen = () => {
  const {nowPlaying, popular, topRated, upcoming, isLoading} = useMovies();
  const {top} = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator color={'red'} size={100} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={{marginTop: top + 20}}>
        <View style={styles.container}>
          <Carousel
            data={nowPlaying}
            renderItem={({item}: any) => <Card {...item} />}
            sliderWidth={windowWidth}
            itemWidth={300}
            inactiveSlideOpacity={0.9}
          />
        </View>
        <FlatListCustom title={'Popular'} movies={popular} />
        <FlatListCustom title={'Top rated'} movies={topRated} />
        <FlatListCustom title={'Upcoming'} movies={upcoming} />
      </View>
    </ScrollView>
  );
};

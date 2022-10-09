import React from 'react';
import Carousel from 'react-native-snap-carousel';
import {ActivityIndicator, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useMovies, Card, styles} from '../../index';

export const HomeScreen = () => {
  const {moviesInCine, isLoading} = useMovies();
  const {top} = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator color={'red'} size={100} />
      </View>
    );
  }

  return (
    <View style={{marginTop: top + 20}}>
      {/* {moviesInCine.map((movie) => (
        <Card {...movie} />
      ))} */}
      <Carousel
        data={moviesInCine}
        renderItem={() => <Card {...moviesInCine[0]} />}
        sliderWidth={600}
        itemWidth={300}
      />
    </View>
  );
};

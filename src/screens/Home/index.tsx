import React from 'react';
import Carousel from 'react-native-snap-carousel';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Text,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useMovies, Card} from '../../index';
import {styles} from './HomeStyle';

const {width: windowWidth} = Dimensions.get('window');

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
      <View style={styles.container}>
        <Carousel
          data={moviesInCine}
          renderItem={({item}: any) => <Card {...item} />}
          sliderWidth={windowWidth}
          itemWidth={300}
        />
      </View>

      <View style={styles.list}>
        <Text>Movies in cine</Text>
        <FlatList
          data={moviesInCine}
          renderItem={({item}: any) => (
            <Card {...item} width={140} height={200} />
          )}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

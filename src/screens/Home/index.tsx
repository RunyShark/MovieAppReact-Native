import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useMovies, Card, styles, Movies} from '../../index';

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
      {moviesInCine.map((movie: Movies) => (
        <Card {...movie} />
      ))}
    </View>
  );
};

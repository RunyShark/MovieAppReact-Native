import React from 'react';
import {Text, View} from 'react-native';
import {useMovies, styles} from '../../index';

export const HomeScreen = () => {
  const {moviesInCine, isLoading, Loading} = useMovies();

  return (
    <>
      {isLoading && <Loading />}

      <View>
        <Text>Home screen</Text>
      </View>
    </>
  );
};

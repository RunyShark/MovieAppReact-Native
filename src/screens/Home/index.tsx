import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {useMovies} from '../../index';

export const HomeScreen = () => {
  const {moviesInCine, isLoading} = useMovies();

  if (isLoading) {
    return (
      <View>
        <ActivityIndicator color={'red'} size={100} />
      </View>
    );
  }

  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

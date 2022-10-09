import React, {useEffect, useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {movieDB, MovieDBNowPlaying, Movies, styles} from '../index';

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [moviesInCine, setMoviesInCine] = useState<Movies[]>([]);

  const getMovies = async () => {
    const {
      data: {results},
    } = await movieDB.get<MovieDBNowPlaying>('/now_playing');

    setMoviesInCine(results);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  const Loading = () => {
    if (isLoading) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator color={'red'} size={100} />
        </View>
      );
    }
  };

  return {
    //*state
    moviesInCine,
    isLoading,
    Loading,
  };
};

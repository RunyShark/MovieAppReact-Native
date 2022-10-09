/* eslint-disable no-shadow */
import {useEffect, useState} from 'react';

import {movieDB, MovieDBNowPlaying, Movies} from '../index';
interface MovieState {
  nowPlaying: Movies[];
  popular: Movies[];
  topRated: Movies[];
  upcoming: Movies[];
}

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movieState, setMovieState] = useState<MovieState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
  });

  const getMovies = async () => {
    const result = await Promise.all([
      movieDB.get<MovieDBNowPlaying>('/now_playing'),
      movieDB.get<MovieDBNowPlaying>('/popular'),
      movieDB.get<MovieDBNowPlaying>('/top_rated'),
      movieDB.get<MovieDBNowPlaying>('/upcoming'),
    ]);

    setMovieState({
      nowPlaying: result[0].data.results,
      popular: result[1].data.results,
      topRated: result[2].data.results,
      upcoming: result[3].data.results,
    });

    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    //*state
    ...movieState,
    isLoading,
    //*method
  };
};

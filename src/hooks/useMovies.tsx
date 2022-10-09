/* eslint-disable no-shadow */
import {useEffect, useState} from 'react';

import {movieDB, MovieDBNowPlaying, Movies} from '../index';

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [moviesInCine, setMoviesInCine] = useState<Movies[]>([]);
  const [popular, setPopular] = useState<Movies[]>([]);
  const [topRated, setTopRated] = useState<Movies[]>([]);
  const [upcoming, setUpcoming] = useState<Movies[]>([]);

  const getMovies = async () => {
    const result = await Promise.all([
      movieDB.get<MovieDBNowPlaying>('/now_playing'),
      movieDB.get<MovieDBNowPlaying>('/popular'),
      movieDB.get<MovieDBNowPlaying>('/top_rated'),
      movieDB.get<MovieDBNowPlaying>('/upcoming'),
    ]);

    setMoviesInCine(result[0].data.results);
    setPopular(result[1].data.results);
    setTopRated(result[2].data.results);
    setUpcoming(result[3].data.results);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    //*state
    moviesInCine,
    isLoading,
    popular,
    upcoming,
    topRated,

    //*method
  };
};

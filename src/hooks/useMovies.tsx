/* eslint-disable no-shadow */
import {useEffect, useState} from 'react';

import {movieDB, MovieDBNowPlaying, Movies} from '../index';

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [moviesInCine, setMoviesInCine] = useState<Movies[]>([]);
  const [popular, setPopular] = useState<Movies[]>([]);

  const getMovies = async () => {
    let movies = [];

    movies.push(movieDB.get<MovieDBNowPlaying>('/now_playing'));
    movies.push(movieDB.get<MovieDBNowPlaying>('/popular'));
    const result = await Promise.all(movies);

    setMoviesInCine(result[0].data.results);
    setPopular(result[1].data.results);
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

    //*method
  };
};

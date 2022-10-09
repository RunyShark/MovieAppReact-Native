import {useEffect, useState} from 'react';
import {movieDB, MovieDBNowPlaying, Movies} from '../index/index';

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

  return {
    //*state
    moviesInCine,
    isLoading,
  };
};

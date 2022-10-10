/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useEffect} from 'react';
import {Cast, Credits, movieDB, MovieFull} from '../index';

interface MovieDetails {
  isLoading: Boolean;
  movieFull?: MovieFull;
  cast: Cast[];
}

export const useMovieDetails = (id: number) => {
  const [movieDetails, setMovieDetails] = useState<MovieDetails>({
    isLoading: true,
    movieFull: undefined,
    cast: [],
  });

  const getMovieDetails = async () => {
    const [movieDetailsResp, castResp] = await Promise.all([
      movieDB.get<MovieFull>(`/${id}`),
      movieDB.get<Credits>(`/${id}/credits`),
    ]);

    setMovieDetails({
      isLoading: false,
      movieFull: movieDetailsResp.data,
      cast: castResp.data.cast,
    });
  };
  useEffect(() => {
    getMovieDetails();
  }, []);

  return {
    ...movieDetails,
  };
};

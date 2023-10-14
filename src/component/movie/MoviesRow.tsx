import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import axios from "../../apiAxios/axios";
import { MovieCard } from "..";
type MOVIEROW = {
  title: string;
  fetchUrl: string;
  isLargeRow?: boolean;
};

const MoviesRow = ({ title, fetchUrl, isLargeRow = false }: MOVIEROW) => {
  const [movie, setMovie] = useState<any>([]);

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    const movieData = async () => {
      const response = await axios.get(fetchUrl);
      setMovie(response?.data?.results);
      return response;
    };
    movieData();
  }, [fetchUrl]);

  console.log(movie);

  return (
    <Box className="bg-[#111]">
      <Typography variant="h3" className="text-white py-5 px-5">
        {title}
      </Typography>
      <Box className="flex gap-5 overflow-hidden bg-scroll overflow-x-scroll p-5">
        {movie.map((value: any) => {
          return (
            <MovieCard
              key={value?.id}
              imageUrl={`${base_url}${
                isLargeRow ? value?.poster_path : value?.backdrop_path
              }`}
              title={value?.title || value?.name}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default MoviesRow;

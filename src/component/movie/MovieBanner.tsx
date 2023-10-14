import { Box, Typography } from "@mui/material";
import { MyButton } from "../commonComp";
import { useState, useEffect } from "react";
import axios from "../../apiAxios/axios";
import requests from "../../apiAxios/Requst";
const MovieBanner = () => {
  const [movie, setMovie] = useState<any>([]);
  useEffect(() => {
    const fetchMovie = async () => {
      const request = await axios.get(requests.fetchNetflixOrignals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    };
    fetchMovie();
  }, []);
  console.log(movie);

  const playHandler = () => {
    console.log("hello play button");
  };
  const listHandler = () => {
    console.log("hello list button");
  };
  return (
    <Box
      sx={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
      className="h-[400px] w-[100%] bg-black/50 bg-cover bg-no-repeat p-10 flex flex-col gap-3"
    >
      <Typography gutterBottom variant="h3" className="text-white">
        {movie?.name||movie?.title||movie?.original_name}
      </Typography>
      <Box className="flex gap-2">
        <MyButton
          text="text-white"
          bgColor="bg-[#202020]"
          width="20px"
          height="20px"
          name="play"
          clickHandle={playHandler}
        />
        <MyButton
          text="text-white"
          bgColor="bg-[#202020]"
          width="20px"
          height="20px"
          name="MyList"
          clickHandle={listHandler}
        />
      </Box>
      <Typography gutterBottom className="text-white mt-10 w-[400px]">
      {movie?.overview}
      </Typography>
    </Box>
  );
};

export default MovieBanner;

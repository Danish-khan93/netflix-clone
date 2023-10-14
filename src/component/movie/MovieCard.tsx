import { Paper, Box, Typography } from "@mui/material";

type MOVIECARD ={
    imageUrl:string
    title:string
}
const MovieCard = ({ imageUrl,title }:MOVIECARD) => {
  return (
    <Paper className="max-w-[300px] h-[300px] bg-black rounded">
      <Box className="p-5">
        <Box>
          <Typography className="max-w-[250px]  h-[230px]" component={"img"} src={imageUrl}></Typography>
          <Typography className="text-white font-semibold ">{title}</Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default MovieCard;

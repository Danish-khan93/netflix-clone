import { Box, Typography, TextField } from "@mui/material";
import bannerImg from "../assets/banner.jpg";
import { MyButton } from "./commonComp";

const Banner = () => {
  const emailCheckHandler = () => {
    console.log("hello email");
  };
  return (
    <Box
      sx={{
        backgroundImage: `url(${bannerImg})`,
        backgroundSize: "cover",
        width: "100%",
        height: "100vh",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box className="flex flex-col items-center justify-center gap-8 pt-[100px]">
        <Typography className="text-white font-extrabold text-[40px] text-center">
          Unlimited movies, TV shows, and more
        </Typography>
        <Typography className="text-white text-[20px] font-thin">
          Watch anywhere. Cancel anytime.
        </Typography>
        <Typography className="text-white text-[20px] font-thin text-center">
          Ready to watch? Enter your email to create or restart your membership.
        </Typography>
        <Box className="flex justify-center gap-1 lg:flex-row sm:flex-col items-cente">
          <Box className="bg-slate-300 rounded" >
            <TextField className="w-[400px]" placeholder="Emial address"/>
          </Box>
          <MyButton
          text="text-white"
            width={"200px"}
            bgColor="bg-red-600"
            height={"80px"}
            name="Get Started"
            clickHandle={emailCheckHandler}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;

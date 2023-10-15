import { Box } from "@mui/material";
import bannerImg from "../assets/banner.jpg";

const MainHome = ({ children }: { children: JSX.Element }) => {
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
      {children}
    </Box>
  );
};

export default MainHome;

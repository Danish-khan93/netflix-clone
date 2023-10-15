import { AppBar, Toolbar, Box, Typography } from "@mui/material";
import { MyButton } from "./commonComp";
import logo from "../assets/pngwing.com.png";
import { useNavigate, Link } from "react-router-dom";
const Nav = () => {
  // onscroll hid and show nav
  const navigate = useNavigate();
  const clickHandler = () => {
    console.log("hello signIn");
    navigate("/signin");
  };

  return (
    <AppBar className="shadow-none" position="relative">
      <Toolbar className="bg-[#111] flex justify-between">
        <Box>
          <Link to={"/"}>
            <Typography
              className="w-[120px] h-[100px]"
              component={"img"}
              src={logo}
            ></Typography>
          </Link>
        </Box>
        <Box>
          <MyButton
            name="signIn"
            text="text-white"
            bgColor="bg-red-600"
            width={"100px"}
            height={"80px"}
            clickHandle={clickHandler}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;

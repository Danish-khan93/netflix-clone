import { TextField, Box, Typography } from "@mui/material";
import { MyButton } from "../commonComp";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

type FORMDATA = {
  email: string;
  password: string;
};

const SignIn = () => {
  const { register, handleSubmit } = useForm<FORMDATA>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: FORMDATA) => {
    console.log(data);
  };

  return (
    <Box className="flex justify-center py-[100px]">
      <Box className="flex justify-center w-[400px] bg-black/70 p-10">
        <Box>
          <Typography gutterBottom variant="h3" className="text-white">
            Sign In
          </Typography>
          <form
            className="w-[300px] flex flex-col gap-5"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
          >
            <TextField
              label="Email"
              className="bg-white rounded"
              {...register("email", {
                required: {
                  value: true,
                  message: "this filed is requird",
                },
              })}
            />
            <TextField
              label="password"
              className="bg-white rounded"
              {...register("password", {
                required: {
                  value: true,
                  message: "this filed is requird",
                },
              })}
            />
            <MyButton
              name="Sign In"
              width="350px"
              height="60px"
              bgColor="bg-red-600"
              text="text-white"
              btnType="submit"
            />
          </form>

          <Typography gutterBottom variant="h6" className="text-white pt-5">
            New to Netflix?<Link to={"/signup"}> Sign up now</Link>.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SignIn;

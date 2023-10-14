import { Button } from "@mui/material";

type MYBUTTON={
  name: string,
  width: string
  height: string
  bgColor:string
  text:string
  clickHandle : ()=> void
}

const MyButton = ({ name, width, height, clickHandle,bgColor,text }:MYBUTTON) => {
  return (
    <Button
      className={`${bgColor} w-[${width}] h-[${height}] ${text}  hover:bg-red-800 text-white rounded`}
      onClick={clickHandle}
    >
      {name}
    </Button>
  );
};

export default MyButton;

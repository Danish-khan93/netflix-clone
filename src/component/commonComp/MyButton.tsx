import { Button } from "@mui/material";

type MYBUTTON={
  name: string,
  width: string
  height: string
  bgColor:string
  text?:string
  clickHandle? : ()=> void
  btnType?: "submit"|"button"
}

const MyButton = ({ name, width, height, clickHandle,bgColor,text ,btnType }:MYBUTTON) => {
  return (
    <Button
      className={`${bgColor} w-[${width}] h-[${height}] ${text}  hover:bg-red-800 text-white rounded`}
      onClick={clickHandle}
    type={btnType}
    >
      {name}
    </Button>
  );
};

export default MyButton;

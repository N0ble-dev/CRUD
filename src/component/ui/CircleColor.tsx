import { HTMLAttributes } from "react";

interface Iprops extends HTMLAttributes<HTMLSpanElement>{
  color: string;
}

const CircleColor = ({ color,...rest }: Iprops) => {
  return (
    <span {...rest}
  className={`block w-6 h-6 rounded-full cursor-pointer `} style={{background:color}}
    />
  );
};
export default CircleColor;

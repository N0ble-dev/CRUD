import { InputHTMLAttributes } from "react";

interface Iprops extends InputHTMLAttributes<HTMLInputElement> {
}

const Input = ({...rest}: Iprops) => {
  return (
    <>
  <input className="mt-1 border border-slate-300 focus:outline-none focus:border-blue-500 rounded-md p-2 text-lg text-gray-800 shadow-md" {...rest} />

    </>
  );
};
export default Input;

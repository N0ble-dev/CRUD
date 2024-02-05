import { ReactNode, ButtonHTMLAttributes } from "react";

interface Iprops extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  width?: string;
}

const Button = ({ children, className, width = "w-full", ...rest }: Iprops) => {
  return (
    <button
      className={`${className} ${width} rounded-md text-white p-2`}
      {...rest}
    >
      {children}
    </button>
  );
};
export default Button;

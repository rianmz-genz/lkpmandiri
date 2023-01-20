import Link from "next/link";
import React from "react";
import Text from "../atoms/Text";
interface ButtonProps {
  value?: string;
  buttonStyle:
    | "ButtonBlue"
    | "ButtonWhite"
    | "ButtonRoundedlgWhite"
    | "ButtonRoundedlgBlue";
}
const Button = ({ value, buttonStyle }: ButtonProps) => {
  const getButtonStyle = (): string => {
    switch (buttonStyle) {
      case "ButtonBlue":
        return "border px-6 py-2 rounded-full bg-crayolalight text-white hover:bg-crayolamidledark transition-all duration-300 border-none outline-none";
      case "ButtonWhite":
        return "text-crayolalight border px-6 py-2 rounded-full transition-all duration-300 hover:text-white bg-white hover:bg-transparent";
      case "ButtonRoundedlgWhite":
        return "font-semibold bg-white border-black block w-11/12 border-2 border-blue-500 rounded-lg mx-auto py-2";
      case "ButtonRoundedlgBlue":
        return "font-semibold bg-crayolalight text-white border-black block w-11/12 rounded-lg mx-auto py-2";
    }
  };
  return (
    <button className={` ${getButtonStyle()}`}>
      <Text textStyle="ButtonText" value={value} />
    </button>
  );
};

export default Button;

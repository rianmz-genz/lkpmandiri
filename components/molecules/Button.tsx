import Link from "next/link";
import React from "react";
import Text from "../atoms/Text";
interface ButtonProps {
  value?: string;
  buttonStyle: | "ButtonBlue" | "ButtonWhite"
}
const Button = ({ value, buttonStyle }: ButtonProps) => {
    const getButtonStyle = ():string => {
        switch(buttonStyle){
            case "ButtonBlue":
                return "bg-crayolalight text-white hover:bg-crayolamidledark transition-all duration-300 border-none outline-none";
            case "ButtonWhite":
                return "text-crayolalight transition-all duration-300 hover:text-white bg-white hover:bg-transparent"
        }
    }
  return (
    <button className={`border px-6 py-2 rounded-full ${getButtonStyle()}`}>
      <Text textStyle="ButtonText" value={value} />
    </button>
  );
};

export default Button;

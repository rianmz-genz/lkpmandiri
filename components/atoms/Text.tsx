import React from "react";
interface TextProps {
  value?: string;
  textStyle:
    | "TitleOne"
    | "TitleTwo"
    | "TitleFour"
    | "Description"
    | "CardDescription"
    | "CardPlus"
    | "CompanyName"
    | "FaqListTitle"
    | "ButtonText"
    | "FooterTitle"
    | "UserNameReview"
    | "UserClassReview"
    | "MoreUnderline";
}
const Text = ({ textStyle, value }: TextProps) => {
  const getStyleText = (): string => {
    switch (textStyle) {
      case "TitleOne":
        return "lg:text-5xl text-3xl font-semibold leading-tight";
      case "TitleTwo":
        return "lg:text-3xl text-2xl font-semibold leading-tight";
      case "TitleFour":
        return "text-xl font-semibold leading-8";
      case "FaqListTitle":
        return "font-semibold text-crayolalight text-lg";
      case "Description":
        return "font-poppins font-light text-base leading-6";
      case "CardDescription":
        return "font-poppins font-light lg:text-sm text-xs leading-6";
      case "CardPlus":
        return "font-poppins font-light text-xs";
      case "ButtonText":
        return "font-semibold lg:text-base text-sm";
      case "FooterTitle":
        return "font-semibold";
      case "CompanyName":
        return "font-bold text-gray-800/80 lg:text-lg hidden lg:block";
      case "UserNameReview":
        return "font-semibold text-sm";
      case "UserClassReview": 
        return "font-poppins font-light text-xs"
      case "MoreUnderline":
        return "font-semibold underline";
      default:
        throw Error("Invalid textStyle");
    }
  };
  return <p className={getStyleText()}>{value}</p>;
};

export default Text;

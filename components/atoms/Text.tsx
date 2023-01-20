import React from "react";
interface TextProps {
  value?: string;
  textStyle:
    | "TitleOne"
    | "TitleTwo"
    | "TitleThree"
    | "TitleFour"
    | "TitleFive"
    | "Description"
    | "DetailDescription"
    | "CardDescription"
    | "CardPlus"
    | "CompanyName"
    | "FaqListTitle"
    | "ButtonText"
    | "FooterTitle"
    | "PoppinsSmGray"
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
      case "TitleThree":
        return "text-2xl font-semibold leading-8";
      case "TitleFour":
        return "lg:text-xl text-sm font-semibold ";
      case "TitleFive":
        return "lg:text-lg font-semibold leading-8 lg:block hidden";
      case "FaqListTitle":
        return "font-semibold text-crayolalight text-lg";
      case "Description":
        return "font-poppins text-sm leading-6";
      case "DetailDescription":
        return "font-poppins font-semibold text-sm"
      case "CardDescription":
        return "font-poppins font-light text-sm leading-6 text-elipsis lg:h-24 inline-block overflow-hidden";
      case "CardPlus":
        return "font-poppins font-light text-xs";
      case "ButtonText":
        return "font-semibold lg:text-base text-sm";
      case "FooterTitle":
        return "font-semibold";
      case "PoppinsSmGray":
        return "font-poppins text-gray-800/80 text-sm"
      case "CompanyName":
        return "font-bold text-gray-800/80 lg:text-lg hidden lg:block";
      case "UserNameReview":
        return "font-semibold text-sm";
      case "UserClassReview":
        return "font-poppins font-light text-xs";
      case "MoreUnderline":
        return "font-semibold underline";
      default:
        throw Error("Invalid textStyle");
    }
  };
  return <p className={getStyleText()}>{value}</p>;
};

export default Text;

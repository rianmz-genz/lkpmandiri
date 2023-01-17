import React from "react";
interface TextProps {
  value?: string
  textStyle: "TitleOne" | "TitleTwo" | "Description" | "FaqListTitle" | "ButtonText" | "FooterTitle" | "MoreUnderline";
}
const Text = ({ textStyle, value }: TextProps) => {
  const getStyleText = (): string => {
    switch (textStyle) {
      case "TitleOne":
        return "text-5xl font-semibold leading-tight";
      case "TitleTwo": 
        return "text-3xl font-semibold leading-tight";
      case "FaqListTitle": 
        return "font-semibold text-crayolalight text-lg";
      case "Description":
        return "font-poppins font-light text-base leading-6";
      case "ButtonText":
        return "font-semibold";
      case "FooterTitle":
        return "font-semibold";
      case "MoreUnderline":
        return "font-semibold underline"
      default:
        throw Error("Invalid textStyle");
    }
  };
  return <p className={getStyleText()}>{value}</p>;
};

export default Text;

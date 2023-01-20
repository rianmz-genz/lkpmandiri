import Link from "next/link";
import React from "react";
import Text from "./Text";
interface TextLink {
  href: string;
  value: string;
  textStyle: "Description" | "TitleFour"
}
const TextLink = ({ href, value, textStyle }: TextLink) => {
  return (
    <Link href={href}>
      <Text textStyle={textStyle} value={value} />
    </Link>
  );
};

export default TextLink;

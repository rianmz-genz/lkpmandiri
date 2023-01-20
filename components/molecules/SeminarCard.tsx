import React from "react";
import Text from "../atoms/Text";
import TextLink from "../atoms/TextLink";
import Image from "next/image";
interface SeminarProps {
  imageUrl: string;
  title: string;
  description: string;
}
const SeminarCard = ({ imageUrl, title, description }: SeminarProps) => {
  return (
    <div className="w-full h-fit space-y-2">
      <Image
        src={imageUrl}
        height={100}
        className="w-full"
        alt="Card Image"
        width={100}
      />
      <div className="space-y-2 w-full h-fit">
      <TextLink href="/class/detail" textStyle="TitleFour" value={title} />
      <Text textStyle="CardDescription" value={description} />
      </div>
    </div>
  );
};

export default SeminarCard;
export type { SeminarProps };

import React from "react";
import { useState } from "react";
import Text from "../atoms/Text";
import { TfiArrowCircleDown, TfiArrowCircleUp } from "react-icons/tfi";
interface FaqProps {
  titleValue: string;
  descValue: string;
}
const FaqListItem = ({ titleValue, descValue }: FaqProps) => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  return (
    <li className="w-full border-b border-crayolamidledark pb-3 ">
      <div className="flex justify-between items-center">
        <Text textStyle="FaqListTitle" value={titleValue} />
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <TfiArrowCircleUp /> : <TfiArrowCircleDown />}
        </button>
      </div>
      <div
        className={`w-full h-fit mt-2 ${
          isOpen
            ? "block transition-all duration-300"
            : "hidden transition-all duration-300"
        }`}
      >
        <Text textStyle="Description" value={descValue} />
      </div>
    </li>
  );
};

export default FaqListItem;

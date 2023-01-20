import React from "react";
import Text from "../atoms/Text";
import Button from "./Button";
interface Paragraph {
  buttonStyle?: string;
  title: string;
  description?: string;
  isButton?: boolean;
  learnMore?: boolean;
  center?: boolean;
  titleStyle?: string;
  buttonValue?: string;
  full?: boolean
}
const SectionParagraph = ({
  buttonStyle,
  title,
  description,
  isButton = false,
  learnMore = false,
  center = false,
  titleStyle,
  buttonValue,
  full = false,
}: Paragraph) => {
  return (
    <aside
      className={` ${full ? "w-full" : "lg:w-6/12"} w-full h-fit space-y-8 relative ${
        center ? "text-center flex flex-col items-center justify-center" : ""
      }`}
    >
      <div className="space-y-3">
        {titleStyle == "TitleOne" ? (
          <Text textStyle="TitleOne" value={title} />
        ) : (
          <Text textStyle="TitleTwo" value={title} />
        )}
        <Text textStyle="Description" value={description} />
      </div>
      <div className="flex items-center space-x-5">
        {isButton ? (
          <Button
            buttonStyle={`${
              buttonStyle == "ButtonBlue" ? "ButtonBlue" : "ButtonWhite"
            }`}
            value={buttonValue}
          />
        ) : (
          ""
        )}
        {learnMore ? (
          <a href={`#program`}>
            <Text textStyle="MoreUnderline" value="Pelajari Lebih Lanjut" />
          </a>
        ) : (
          ""
        )}
      </div>
      {learnMore ? (
        <>
          {/* space for span because span absolute */}
          <div className="h-28"></div>
          <div className="lg:w-8/12 w-full border absolute bottom-0 left-2 border-crayoladark z-20 flex py-7 rounded-xl bg-white">
            <div className="flex flex-col w-4/12 items-center">
              <Text textStyle="TitleTwo" value="250" />
              <Text textStyle="Description" value="Siswa" />
            </div>
            <div className="flex flex-col w-4/12 items-center">
              <Text textStyle="TitleTwo" value="30" />
              <Text textStyle="Description" value="Mentor" />
            </div>
            <div className="flex flex-col w-4/12 items-center">
              <Text textStyle="TitleTwo" value="8" />
              <Text textStyle="Description" value="Program" />
            </div>
          </div>
          <div className="lg:w-8/12 w-full h-28 rounded-xl absolute -bottom-2 left-0 bg-crayoladark"></div>
        </>
      ) : (
        ""
      )}
    </aside>
  );
};

export default SectionParagraph;

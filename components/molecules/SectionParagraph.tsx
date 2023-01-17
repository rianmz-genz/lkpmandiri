import React from "react";
import Text from "../atoms/Text";
import Button from "./Button";
import Link from "next/link";
interface Paragraph {
  buttonStyle?: string;
  title: string;
  description?: string;
  isButton?: boolean;
  learnMore?: boolean;
  center?: boolean;
  titleStyle?: string;
  buttonValue?: string;
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
}: Paragraph) => {
  return (
    <aside
      className={`w-6/12 h-fit space-y-8 relative ${
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
          <Link href={`#program`}>
            <Text textStyle="MoreUnderline" value="Pelajari Lebih Lanjut" />
          </Link>
        ) : (
          ""
        )}
      </div>
      {learnMore ? (
        <>
        {/* space for span because this is absolute */}
          <div className="h-28"></div>
          <div className="w-8/12 border absolute bottom-0 left-2 border-crayoladark z-20 flex py-7 rounded-xl bg-white">
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
          <div className="w-8/12 h-28 rounded-xl absolute -bottom-2 left-0 bg-crayoladark"></div>
        </>
      ) : (
        ""
      )}
    </aside>
  );
};

export default SectionParagraph;

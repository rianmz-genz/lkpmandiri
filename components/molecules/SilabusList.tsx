import React from "react";
import { TfiArrowCircleDown, TfiArrowCircleUp } from "react-icons/tfi";
import Text from "../atoms/Text";
import Image from "next/image";
import { useState } from "react";
interface SilabusProps {
  title: string;
  meet: string
}
const SilabusList = ({ title, meet }: SilabusProps) => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  return (
    <li className="w-[95%] rounded-md bg-palatinelight px-3 py-4">
      <div className="flex justify-between">
        <Text textStyle="TitleFour" value={title} />
        <div className="w-3/12 flex justify-end space-x-3 items-center">
          <Text textStyle="TitleFive" value={meet} />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-xl cursor-pointer"
          >
            {isOpen ? <TfiArrowCircleUp /> : <TfiArrowCircleDown />}
          </button>
        </div>
      </div>
      <div
        className={`mt-4 flex space-x-3 h-fit justify-between ${
          isOpen ? "" : "hidden"
        } `}
      >
        <div className="w-6/12 space-y-4">
          <Text
            textStyle="Description"
            value="Pada empat pertemuan pertama, kita akan memulai kursus dengan membuat blus kerah shiller. Kerah shiller adalah kerah yang memiliki potongan yang mirip kerah jas formal pria. Dengan dua pasang ujung kembar, satu bagian atasnya memiliki ukuran yang lebih besar dibanding satu pasang di bawahnya."
          />
          <Text
            textStyle="Description"
            value="Kerah shiller termasuk dalam kerah yang mampu berdiri tegak bahkan tanpa bahas kertas keras di dalamnya. Kerah ini banyak dipakai dalam kemeja wanita, kerah blazer dan jenis outer lainnya yang membawa kesan semi formal."
          />
        </div>
        <div className="w-5/12 bg-cgblue rounded-md flex justify-center items-center">
          <Image
            src="/images/detailsilabus.svg"
            width={100}
            height={100}
            alt="Detail Silabus"
            className="w-11/12"
          />
        </div>
      </div>
    </li>
  );
};

export default SilabusList;
export type {SilabusProps}
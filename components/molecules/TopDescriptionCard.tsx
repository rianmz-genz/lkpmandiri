import React from "react";
import Button from "./Button";
import Text from "../atoms/Text";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { CiClock2 } from "react-icons/ci";
import { MdOutlineMeetingRoom } from "react-icons/md";
interface PropsTop {
  whatUserGet: string[];
}
const TopDescriptionCard = ({ whatUserGet }: PropsTop) => {
  return (
    <div className="w-full bg-white border-gray-300 border px-3 py-4 rounded-lg">
      <Text textStyle="TitleTwo" value="Kelas Menjahit (Tingkat Dasar)" />
      <div className="mt-3 flex space-x-4">
        <div className="flex space-x-2 items-center">
          <MdOutlineMeetingRoom />
          <Text textStyle="Description" value="62 Pertemuan" />
        </div>
        <div className="flex space-x-2 items-center">
          <CiClock2 />
          <Text textStyle="Description" value="6 Bulan" />
        </div>
      </div>
      <Text
        textStyle="Description"
        value="Pada kursus ini, kamu akan mempelajari dasar-dasar menjahit dan memperoleh keterampilan dan kepercayaan diri untuk memulai menjahit. Daftar sekarang dan mulai perjalanan karirmu sebagai penjahit."
      />
      <div className="mt-3">
        <Text textStyle="DetailDescription" value="Yang Akan Kamu Dapat" />
        <ul className="w-full space-y-3 mt-3">
          {whatUserGet.map((getList) => (
            <li key={getList} className="flex items-center space-x-2">
              <AiOutlineCheckCircle />
              <Text textStyle="PoppinsSmGray" value={getList} />
            </li>
          ))}
        </ul>
        <div className="mt-4 space-y-4">
          <Button buttonStyle="ButtonRoundedlgWhite" value="Silabus kelas" />
          <Button buttonStyle="ButtonRoundedlgBlue" value="Daftar kursus" />
        </div>
      </div>
    </div>
  );
};

export default TopDescriptionCard;

import React from "react";
import SectionParagraph from "../molecules/SectionParagraph";

const BannerRegist = () => {
  return (
    <div className="w-full my-4 h-[324px] bg-crayolalight rounded-3xl overflow-hidden">
      <div className='w-full h-[324px] bg-[url("/images/bgregist.svg")] bg-no-repeat lg:bg-left-bottom bg-[right_8rem] bg-cover flex items-center justify-center flex-col text-white px-6'>
        <SectionParagraph
          isButton={true}
          buttonStyle="ButtonWhite"
          titleStyle="TitleTwo"
          buttonValue="DaftarKursus"
          center
          title="Siap Untuk Mengubah Masa Depanmu?"
          description="Daftar kursus sekarang, dan mulai perjalananmu menuju karir yang lebih cemerlang"
        />
      </div>
    </div>
  );
};

export default BannerRegist;

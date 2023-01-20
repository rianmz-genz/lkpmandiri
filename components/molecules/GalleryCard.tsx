import React from "react";
import Text from "../atoms/Text";
import Image from "next/image";

const GalleryCard = () => {
  return (
    <div className="w-full h-full space-y-4 bg-white border-gray-300 border px-3 py-4 rounded-lg">
      <Text textStyle="TitleThree" value="Galeri Kelas" />
      <Image
        src="/images/galleryclass.svg"
        alt="gallery class image"
        width={100}
        height={100}
        className="w-full"
      />
    </div>
  );
};

export default GalleryCard;

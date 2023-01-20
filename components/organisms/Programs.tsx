import React from "react";
import Text from "../atoms/Text";
import SectionParagraph from "../molecules/SectionParagraph";
import ProgramCard, { ProgramCards } from "../molecules/ProgramCard";

const Programs = () => {
  const Programs: ProgramCards[] = [
    {
      imageUrl: "/images/CardIllustrationJahit.svg",
      title: "Kursus Menjahit (Tingkat Dasar)",
      description:
        "Dalam kursus ini, peserta kursus akan mempelajari dasar-dasar menjahit dan memperoleh keterampian serta kepercayaan diri untuk memulai menjahit dan membuat beberapa produk. Kursus ini akan membahas berbagai jenis kain dan cara memilih kain yang tepat. Peserta kursus akan belajar cara memotong kain secara akurat dan cara menata dan menyematkan pola.",
      meet: "62 Pertemuan",
      month: "5 Bulan",
      totalMember: "+36",
    },
    {
      imageUrl: "/images/CardIllustrationDesign.svg",
      title: "Kursus Design Grafis (Tingkat Dasar)",
      description:
        "Dalam kursus ini, peserta kursus akan mempelajari prinsip dan teknik dasar desain grafis dan mengembangkan keterampilan dan pengetahuan untuk membuat desain yang memukau secara visual. Kursus ini akan dimulai dengan memperkenalkan elemen dasar desain, seperti teori warna, tipografi, dan komposisi. Anda akan belajar bagaimana menggunakan elemen-elemen ini untuk membuat desain yang kohesif dan efektif.",
      meet: "42 Pertemuan",
      month: "4 Bulan",
      totalMember: "+43",
    },
    {
      imageUrl: "/images/CardIllustrationPhotograph.svg",
      title: "Kursus Fotografi (Tingkat Dasar)",
      description:
        "Dalam kursus ini, peserta kursus akan mempelajari dasar-dasar fotografi dan memperoleh keterampilan serta pengetahuan untuk mengambil foto yang memukau. Kursus ini akan dimulai dengan memperkenalkan peserta kursus pada berbagai jenis kamera dan berbagai fiturnya. Anda akan belajar cara menyusun foto dengan benar, termasuk aturan sepertiga dan garis terdepan.",
      meet: "32 Pertemuan",
      month: "2 Bulan",
      totalMember: "+32",
    },
    {
      imageUrl: "/images/CardIllustrationApt.svg",
      title: "Kursus Apt Kantor (Tingkat Dasar)",
      description:
        "Dalam kursus ini, peserta kursus akan mempelajari keterampilan dan pengetahuan dasar yang diperlukan untuk menggunakan rangkaian aplikasi Microsoft Office secara efektif. Kursus ini akan dimulai dengan memperkenalkan Anda ke rangkaian Microsoft Office dan berbagai aplikasinya, termasuk Word, Excel, PowerPoint, dan Outlook. Anda akan mempelajari cara menavigasi program ini dan menggunakan fitur dasarnya.",
      meet: "46 Pertemuan",
      month: "4 Bulan",
      totalMember: "+23",
    },
  ];
  return (
    <>
      <SectionParagraph
        title="Program - program terbaik untuk mengawali karirmu"
        titleStyle="TitleTwo"
      />
      <div className="lg:columns-2 px-4 gap-6 space-y-6">
        {Programs.map((program) => (
          <ProgramCard
            key={program.imageUrl}
            imageUrl={program.imageUrl}
            title={program.title}
            description={program.description}
            meet={program.meet}
            month={program.month}
            totalMember={program.totalMember}
          />
        ))}
      </div>
    </>
  );
};

export default Programs;

import React from "react";
import SectionParagraph from "../molecules/SectionParagraph";
import FaqListItem from "../molecules/FaqListItem";
interface ListType{
    title: string
    description: string
}
const Faq = () => {
    const Lists:ListType[] = [
        {
            title: "Apakah program kursus di LKP Mandiri dikenakan biaya?",
            description: "Kursus di LKP Mandiri tidak dipungut biaya, alias gratis. Peserta kursus tidak perlu mengeluarkan uang karena segala fasilitas telah disediakan oleh LKP Mandiri. Selama program kursus peserta akan diberikan fasilitas yang bisa digunakan selama program  kursus seperti alat dan bahan menjahit, kamera, komputer/laptop, dan fasilitas lainnya."
        },
        {
            title: "Apakah program kursus di LKP Mandiri bersertifikasi?",
            description: "Kursus di LKP Mandiri tidak dipungut biaya, alias gratis. Peserta kursus tidak perlu mengeluarkan uang karena segala fasilitas telah disediakan oleh LKP Mandiri. Selama program kursus peserta akan diberikan fasilitas yang bisa digunakan selama program  kursus seperti alat dan bahan menjahit, kamera, komputer/laptop, dan fasilitas lainnya."
        },
        {
            title: "Apa saja yang akan didapatkan oleh peserta didik?",
            description: "Kursus di LKP Mandiri tidak dipungut biaya, alias gratis. Peserta kursus tidak perlu mengeluarkan uang karena segala fasilitas telah disediakan oleh LKP Mandiri. Selama program kursus peserta akan diberikan fasilitas yang bisa digunakan selama program  kursus seperti alat dan bahan menjahit, kamera, komputer/laptop, dan fasilitas lainnya."
        },
        {
            title: "Berapa lama kursus yang di selenggarakan oleh LKP Mandiri?",
            description: "Kursus di LKP Mandiri tidak dipungut biaya, alias gratis. Peserta kursus tidak perlu mengeluarkan uang karena segala fasilitas telah disediakan oleh LKP Mandiri. Selama program kursus peserta akan diberikan fasilitas yang bisa digunakan selama program  kursus seperti alat dan bahan menjahit, kamera, komputer/laptop, dan fasilitas lainnya."
        },
        {
            title: "Apakah tersedia program kursus yang diselenggarakan secara online?",
            description: "Kursus di LKP Mandiri tidak dipungut biaya, alias gratis. Peserta kursus tidak perlu mengeluarkan uang karena segala fasilitas telah disediakan oleh LKP Mandiri. Selama program kursus peserta akan diberikan fasilitas yang bisa digunakan selama program  kursus seperti alat dan bahan menjahit, kamera, komputer/laptop, dan fasilitas lainnya."
        },
    ]
  return (
    <section className="w-full h-fit  py-20 flex flex-col items-center">
      <SectionParagraph
        title="Frequently Asked Questions"
        titleStyle="TitleTwo"
        description="Pertanyaan-pertanyaan yang sering ditanyakan oleh calon peserta didik sebelum mendaftar kursus LKP Mandiri"
        center
      />
      <ul className="w-8/12 space-y-8">
        {Lists.map((list) => (
            <FaqListItem 
                key={list.title}
                titleValue={list.title}
                descValue={list.description}
            />
        ))}
      </ul>
    </section>
  );
};
export default Faq;

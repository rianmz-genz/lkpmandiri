import React from "react";
import PageTemplate from "../components/templates/PageTemplate";
import Image from "next/image";
import Text from "../components/atoms/Text";
import SeminarCard, { SeminarProps } from "../components/molecules/SeminarCard";
import Container from "../components/templates/Container";

const Course = () => {
  const seminarRecap: SeminarProps[] = [
    {
      imageUrl: "/images/seminar1.svg",
      title: "Desainer Grafis Saat Pandemi",
      description:
        "Seminar tentang cara seorang desainer grafis menangani proyek dan klien pada saat pandemi.",
    },
    {
      imageUrl: "/images/seminar2.svg",
      title: "Dibalik Lensa Kamera",
      description:
        "Seminar fotografi yang dilaksanakan oleh LKP Mandiri dan Bandung Photography dalam rangka mengenalkan profesi fotografer kepada masyarakat.",
    },
    {
      imageUrl: "/images/seminar3.svg",
      title: "Menjahit Impian",
      description:
        "Seminar tentang kiat-kiat menjadi penjahit sukses yang diselenggarakan oleh LKP Mandiri bekerja sama dengan penjahit profesional Rudi Baharudin.",
    },
  ];
  return (
    <PageTemplate>
      <Container>
        <section className="w-full h-fit">
          <div className="w-full h-screen flex flex-col items-center justify-center">
            <Image
              src="/images/empty.svg"
              width={100}
              height={100}
              alt="404"
              className="lg:w-4/12 w-full"
            />
            <Text
              textStyle="TitleFour"
              value="Untuk sementara ini belum ada jadwal seminar yang akan digelar"
            />
          </div>
          <Text textStyle="TitleTwo" value="Rekap seminar-seminar LKP Mandiri" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
            {seminarRecap.map((seminar)=> (
              <SeminarCard key={seminar.imageUrl} imageUrl={seminar.imageUrl} title={seminar.title} description={seminar.description} />
            ))}
          </div>
        </section>
      </Container>
    </PageTemplate>
  );
};

export default Course;

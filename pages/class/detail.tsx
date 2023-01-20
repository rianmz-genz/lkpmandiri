import React from "react";
import PageTemplate from "../../components/templates/PageTemplate";
import Container from "../../components/templates/Container";
import Text from "../../components/atoms/Text";
import DescriptionDetailPage from "../../components/organisms/DescriptionDetailPage";
import GalleryCard from "../../components/molecules/GalleryCard";
import TopDescriptionCard from "../../components/molecules/TopDescriptionCard";
import { TfiArrowCircleDown, TfiArrowCircleUp } from "react-icons/tfi";
import Image from "next/image";
import SilabusList, {
  SilabusProps,
} from "../../components/molecules/SilabusList";
import UserReviewCard from "../../components/molecules/UserReviewCard";
const detail = () => {
  const whatUserGet: string[] = [
    "Ilmu dan keterampilan menjahit",
    "Produk produk bermanfaat",
    "Sertifikasi kemampuan menjahit tingkat dasar.",
  ];
  const silabusListItems: SilabusProps[] = [
    {
      title: "1. Membuat kemeja dengan kerah shiller",
      meet: "4 Pertemuan",
    },
    {
      title: "2. Rok lipat dengan kantong dalam",
      meet: "4 Pertemuan",
    },
    {
      title: "3. Princess dress dengan lengan serut",
      meet: "4 Pertemuan",
    },
    {
      title: "4. Baju control",
      meet: "7 Pertemuan",
    },
    {
      title: "5. Blus/Gaun dengan lengan kuncup mawar",
      meet: "4 Pertemuan",
    },
    {
      title: "6. Rok ½ klok atau Rok A line",
      meet: "6 Pertemuan",
    },
    {
      title: "7. Baju anak kerah matros dengan bordir",
      meet: "5 Pertemuan",
    },
    {
      title: "8. A Simetris dengan Kerah Setali / Selendang",
      meet: "3 Pertemuan",
    },
    {
      title: "9. Gaun pesta anak",
      meet: "5 Pertemuan",
    },
    {
      title: "10. Gaun A Simetris anak dengan hiasan",
      meet: "4 Pertemuan",
    },
    {
      title: "11. Baju anak dengan hiasan Rok Klok dan Strook",
      meet: "6 Pertemuan",
    },
    {
      title: "12. Shanghai Dress",
      meet: "2 Pertemuan",
    },
    {
      title: "13. Gaun pesta anak 2",
      meet: "6 Pertemuan",
    },
    {
      title: "14. Busana hiasan rompok & sengkelit kepang",
      meet: "5 Pertemuan",
    },
    {
      title: "15. Kemeja dengan hiasan/Kemeja pria lengan pendek",
      meet: "4 Pertemuan",
    },
    {
      title: "16. Busana Lebaran",
      meet: "3 Pertemuan",
    },
  ];
  return (
    <PageTemplate>
      {/* aboutCourse */}
      <section className="py-6 w-full h-fit">
        <div className="w-full h-fit relative">
          {/* banner */}
          <div className="w-full h-96 bg-[url('/images/detailanner.svg')]"></div>
          {/* description */}
          <DescriptionDetailPage />
          <aside className="w-3/12 h-fit z-20 absolute top-10 right-28 space-y-4">
            {/* aside description top */}
            <TopDescriptionCard whatUserGet={whatUserGet} />
            {/* gallery class */}
            <GalleryCard />
          </aside>
        </div>
      </section>
      {/* detailSilabus */}
      <section className="w-full h-fit my-6 min-h-screen">
        <Container>
          <Text
            textStyle="TitleTwo"
            value="Silabus Kelas Menjahit (Tingkat Dasar)"
          />
          {/* silabus list */}
          <ol className="w-full h-fit my-8 space-y-3">
            {silabusListItems.map((silabus) => (
              <SilabusList
                key={silabus.title}
                title={silabus.title}
                meet={silabus.meet}
              />
            ))}
          </ol>
          <div className="space-y-4 w-full h-fit">
            <Text textStyle="TitleTwo" value="Mentor" />
            <Text
              textStyle="Description"
              value="Mentor kelas ini memiliki pengalaman bertahun-tahun dalam menjahit, menghasilkan karya-karya yang juga pernah mengikuti fashion show ternama, dan juga mendirikan butik di beberapa kota di Indonesia"
            />
            <div className="w-full flex space-x-4">
              <UserReviewCard
                userName="Dudi hariyadi"
                imageProfile="/images/Ellipse 5.svg"
                review="Dudi adalah penjahit profesional yang kini memiliki butik yang berlokasi di Bogor. Keahlian Dudi sudah tidak diragukan lagi, karya-karyanya sudah banyak mengisi beberapa pameran nasional dan internasional. Kini Dudi ingin membagikan ilmu yang dimilikinya kepada orang-orang yang ingin menjadi penjahit profesional."
                course="Butik Asmara"
              />
              <UserReviewCard
                userName="Soeyono"
                imageProfile="/images/Ellipse 6.svg"
                review="Soeyono memulai karir menjahitnya sejak usia 16 tahun. Kirana ingin mengikuti jejak ibunya yang juga penjahit profesional. Setelah lulus SMA Kirana memutuskan untuk mengemban ilmu di sekolah desain busana hingga akhirnya Kirana mampu mendirikan butik yang karya-karyanya juga sudah dipakai oleh artis nasional maupun internasional."
                course="Butik Pencari Mangsa"
              />
            </div>
          </div>
        </Container>
      </section>
    </PageTemplate>
  );
};

export default detail;

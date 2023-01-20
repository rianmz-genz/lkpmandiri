import React from "react";
import PageTemplate from "../../components/templates/PageTemplate";
import Container from "../../components/templates/Container";
import Text from "../../components/atoms/Text";
import DescriptionDetailPage from "../../components/organisms/DescriptionDetailPage";
import GalleryCard from "../../components/molecules/GalleryCard";
import TopDescriptionCard from "../../components/molecules/TopDescriptionCard";
import SilabusList, {
  SilabusProps,
} from "../../components/molecules/SilabusList";
import UserReviewCard from "../../components/molecules/UserReviewCard";
import ProgramCard, {ProgramCards} from "../../components/molecules/ProgramCard";
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
  const moreCourse: ProgramCards[]  = [
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
  ]
  return (
    <PageTemplate>
      {/* aboutCourse */}
      <section className="lg:py-6 pt-12 w-full h-fit">
        <div className="w-full h-fit relative">
          {/* banner */}
          <div className="w-full h-96 bg-[url('/images/detailanner.svg')] hidden lg:block"></div>
          <aside className="lg:w-3/12 h-fit w-10/12 mx-auto  z-20 lg:absolute top-10 right-28 space-y-4">
            {/* aside description top */}
            <TopDescriptionCard whatUserGet={whatUserGet} />
            {/* gallery class */}
            <GalleryCard />
          </aside>
          {/* description */}
          <DescriptionDetailPage />
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
            <div className="w-full flex lg:flex-row flex-col space-y-4 lg:space-x-4">
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
          <div className="flex w-full justify-center flex-col items-center my-8">
              <Text textStyle="TitleTwo" value="Program kursus lainya" />
              <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
                {moreCourse.map((course) => (
                  <ProgramCard
                  key={course.imageUrl}
                  imageUrl={course.imageUrl}
                  title={course.title}
                  month={course.month}
                  description={course.description}
                  totalMember={course.totalMember}
                  meet={course.meet}
                />
                ))}
              </div>
          </div>
        </Container>
      </section>
    </PageTemplate>
  );
};

export default detail;

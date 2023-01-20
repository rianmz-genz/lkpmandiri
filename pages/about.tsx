import React from "react";
import PageTemplate from "../components/templates/PageTemplate";
import Container from "../components/templates/Container";
import Image from "next/image";
import Text from "../components/atoms/Text";
import SectionParagraph from "../components/molecules/SectionParagraph";
import UserReviewCard from "../components/molecules/UserReviewCard";
import SeminarCard from "../components/molecules/SeminarCard";
import TextLink from "../components/atoms/TextLink";
interface graduatedPeople {
  imageUrl: string;
  userName: string;
  role: string;
}
const about = () => {
  const graduatedPeoplesVertical: graduatedPeople[] = [
    {
      imageUrl: "/images/alumni1.svg",
      userName: "Anastasya Shuravea",
      role: "Owner of butik Anastasya",
    },
    {
      imageUrl: "/images/alumni2.svg",
      userName: "Sarah Annisa",
      role: "Co-Assistant Secretary of Skol Design Agency",
    },
  ];
  const graduatedPeoplesHorizontal: graduatedPeople[] = [
    {
      imageUrl: "/images/alumni3.svg",
      userName: "Reyhan Fahri",
      role: "Freelance Desainer Grafis",
    },
    {
      imageUrl: "/images/alumni4.svg",
      userName: "Andi Liaw",
      role: "Freelance Fotografer",
    },
  ];
  return (
    <PageTemplate>
      <section className="w-full h-fit min-h-screen pt-6">
        {/* banner */}
        <div className="w-full h-96 bg-[url('/images/aboutbanner.svg')] hidden lg:block"></div>
        {/* description */}
        <Container>
          <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-between my-8">
            <aside className="lg:w-6/12 flex flex-col justify-center space-y-4">
              <Text textStyle="TitleTwo" value="LKP Mandiri" />
              <Text
                textStyle="Description"
                value="LKP Mandiri didirikan dengan misi membantu orang mencapai tujuan karir mereka dan meningkatkan kehidupan mereka melalui pendidikan. Kami percaya bahwa setiap orang memiliki potensi untuk sukses, dan tugas kami adalah menyediakan alat dan sumber daya yang diperlukan bagi mereka untuk mencapai potensi penuh mereka."
              />
              <Text
                textStyle="Description"
                value="Sejak awal, kami telah membantu ribuan orang mendapatkan pekerjaan impian mereka dan membangun karier yang sukses. LKP Mandiri dirancang untuk memberikan pengetahuan dan keterampilan yang praktis, relevan, dan terkini yang sangat diminati di pasar kerja. Instruktur kami yang berpengalaman adalah pakar di bidangnya dan berdedikasi untuk membantu kesuksesan siswa kami."
              />
            </aside>
            <Image
              src="/images/aboutimage.svg"
              width={100}
              height={100}
              alt="about image"
              className="lg:w-5/12 w-11/12 mb-6 lg:mb-0"
            />
          </div>
          <div className="w-full h-fit my-8">
            <SectionParagraph
              title="Berdedikasi tinggi untuk menjadi yang terbaik"
              titleStyle="TitleTwo"
              description="Saat ini, LKP Mandiri berhasil menjadi salah satu lembaga kursus terbaik yang melahirkan lulusan-lulusan terbaik. Lebih dari 100 peserta didik sukses meraih karir yang mereka imipikan."
              full
            />
            <div className="w-full h-fit grid lg:grid-cols-3 grid-cols-1 gap-4">
              {graduatedPeoplesVertical.map((people) => (
                <SeminarCard
                  key={people.imageUrl}
                  imageUrl={people.imageUrl}
                  title={people.userName}
                  description={people.role}
                />
              ))}
              <div className="w-full flex flex-col space-y-3">
                {graduatedPeoplesHorizontal.map((people) => (
                  <div className="w-full h-fit space-y-2">
                    <Image
                      src={people.imageUrl}
                      height={100}
                      className="w-full"
                      alt="Card Image"
                      width={100}
                    />
                    <div className="space-y-1 w-full h-fit">
                      <TextLink
                        href="/class/detail"
                        textStyle="TitleFour"
                        value={people.userName}
                      />
                      <Text textStyle="Description" value={people.role} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </PageTemplate>
  );
};

export default about;

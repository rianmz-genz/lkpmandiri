import Image from "next/image";
import PageTemplate from "../components/templates/PageTemplate";
import SectionParagraph from "../components/molecules/SectionParagraph";

export default function Home() {
  return (
    <PageTemplate>
      <section className="font-ssp w-full h-fit min-h-screen bg-white flex justify-center items-center mx-auto">
        <SectionParagraph
          isButton={true}
          learnMore={true}
          buttonValue="Daftar Kursus"
          buttonStyle="ButtonBlue"
          titleStyle="TitleOne"
          title="Advance your career with LKP MANDIRI"
          description="Tingkatkan kemampuanmu untuk masa depan yang lebih baik dengan program pelatihan komprehensif secara gratis"
        />
        <aside className="w-6/12">
          <Image
            src="/images/HeroIllustration.svg"
            className="w-full"
            width={100}
            height={100}
            alt="Hero image"
          />
        </aside>
      </section>
    </PageTemplate>
  );
}

import Image from "next/image";
import PageTemplate from "../components/templates/PageTemplate";
import SectionParagraph from "../components/molecules/SectionParagraph";
import Head from "next/head";
import Partner from "../components/organisms/Partner";
import Programs from "../components/organisms/Programs";

export default function Home() {
  return (
    <PageTemplate>
      <Head>
        <meta
          name="description"
          content="Company Profile Slicing Design By Adrian Aji Septa"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/Logo.svg" />
      </Head>
      {/* hero section */}
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
      {/* partner brand */}
      <section id="brand" className="w-full py-8 flex flex-col justify-center items-center">
        <Partner />
      </section>
      <section className="w-full h-fit py-6">
        <Programs />
      </section>
    </PageTemplate>
  );
}

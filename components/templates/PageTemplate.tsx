import Head from "next/head";
import React, { ReactNode } from "react";
import Container from "./Container";
import NavBar from "../organisms/Navbar";
import BannerRegist from "../organisms/BannerRegist";
import Faq from "../organisms/Faq";
import Footer from "../organisms/Footer";
interface PageTemplateProps {
  children: ReactNode[] | JSX.Element;
  title?: string;
}
const PageTemplate = ({
  children,
  title = "LKP MANDIRI",
}: PageTemplateProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="w-full">
        <Container>
          <NavBar />
          <div className="h-[50px]"></div>
          {children}
          <BannerRegist />
          <Faq />
        </Container>
        <Footer />
      </div>
    </>
  );
};

export default PageTemplate;

import React from "react";
import SectionParagraph from "../molecules/SectionParagraph";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import UserReviewCard from "../molecules/UserReviewCard";
interface UserReviewListType {
  review: string;
  imageProfile: string;
  userName: string;
  course: string;
}
const UsersReview = () => {
  const UserReviewList: UserReviewListType[] = [
    {
      review:
        "LKP Mandiri itu bukan sekedar tempat kursus, tapi juga tempat untuk mengembangkan diri, Mentornya baik, sangat kompeten untuk mengajar pada tiap kelasnya, LKP Mandiri juga menjembatani saya dalam dunia Industri.",
      imageProfile: "/images/profileuser.svg",
      userName: "Amin W.",
      course: "Kelas Menjahit",
    },
    {
      review:
        "Banyak ilmu baru yang dipelajari untuk mendukung ketika bekerja disebuah perusahaan, Mentornya baik, calm, ngajarnya juga enak.",
      imageProfile: "/images/profileuser2.svg",
      userName: "Budi Budiyanto",
      course: "Kelas Fotografi",
    },
    {
      review:
        "Pelajaranya mudah dipahami untuk menggunakan teknologi pendukung yang baru. Setiap pertemuan bawaanya fun, enjoy, bikin siswa jadi senang.",
      imageProfile: "/images/profileuser3.svg",
      userName: "Tuti S.",
      course: "Kelas Menjahit",
    },
    {
      review:
        "LKP Mandiri is the best, jadi punya ilmu baru, temen baru. Belajarnya dibuat asik dengan materi dan metode belajar yang asik juga, pokonya keren!!!",
      imageProfile: "/images/profileuser4.svg",
      userName: "Ani H.",
      course: "Kelas Desain",
    },
  ];
  return (
    <>
      <div className="flex justify-between relative">
        <SectionParagraph
          title="Pendapat orang-orang tentang LKP Mandiri"
          titleStyle="TitleTwo"
        />
        <Image
          className=" right-24"
          src={`/images/AccentThumb.svg`}
          alt="Profile User"
          width={80}
          height={80}
        />
        <Image
          className=" right-0 z-0"
          src={`/images/AccentStar.svg`}
          alt="Profile User"
          width={80}
          height={80}
        />
      </div>
      <div className="w-full -mt-24">
        <Swiper
          breakpoints={{
            300: {
              spaceBetween: 10,
            },
            640: {
              spaceBetween: 20,
            },
            768: {
              spaceBetween: 40,
            },
            1024: {
              spaceBetween: 50,
            },
          }}
          loop={true}
          pagination={{
            clickable: true,
            type: "bullets",
            clickableClass: "swiper-pagination",
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
          }}
          modules={[Pagination]}
          slideClass="swiper-slide"
          slideActiveClass="swiper-slide-active"
        >
          {UserReviewList.map((reviewcard) => (
            <SwiperSlide key={reviewcard.imageProfile} className="mt-10">
              <UserReviewCard
                review={reviewcard.review}
                userName={reviewcard.userName}
                imageProfile={reviewcard.imageProfile}
                course={reviewcard.course}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default UsersReview;
export type { UserReviewListType };

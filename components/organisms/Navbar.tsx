import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Container from "../templates/Container";
import NavLink from "../atoms/Navlink";
import Navbrand from "../atoms/Navbrand";
import Button from "../molecules/Button";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, []);
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("h-screen");
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("h-screen");
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [isOpen]);
  return (
    <>
      <nav
        className={` w-full top-0 left-0 z-30 border-b  border-crayolalightest ${
          isScrolled ? "fixed border-none" : "absolute border-b"
        }`}
      >
        <Container>
          <div
            className={`px-6 py-4 w-full backdrop-blur-3xl lg:rounded-none rounded-lg ${
              isScrolled || isOpen ? "" : "bg-transparent lg:px-0"
            }`}
          >
            <div className="flex flex-col lg:flex-row w-full place-content-between lg:place-items-center">
              <div className="w-full flex flex-row place-content-between place-items-center lg:w-fit">
                <Navbrand logo="LogoNav" />
                <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                  <div className={` text-2xl cursor-pointer`}>
                    {isOpen ? <FiX /> : <FiMenu />}
                  </div>
                </div>
              </div>
              <div
                className={`${
                  isOpen ? "h-fit flex" : "h-0 hidden"
                }space-y-5 mt-4 lg:mt-0 lg:space-y-0 lg:space-x-16 lg:flex lg:place-items-center`}
              >
                <NavLink href="/class" isOpen={isOpen} value="Kelas" canActive={true} />
                <NavLink href="/course" isOpen={isOpen} value="seminar" canActive={true} />
                <NavLink href="/about" isOpen={isOpen} value="Tentang Kami" canActive={true} />
              </div>
              <div
                className={`${isOpen ? "" : "hidden"} lg:block mt-5 lg:mt-0`}
              >
                <Button buttonStyle="ButtonBlue" value="Daftar Kursus" />
              </div>
            </div>
          </div>
        </Container>
      </nav>
    </>
  );
};

export default NavBar;

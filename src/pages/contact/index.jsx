import React from "react";
import { BsFillTelephoneFill, BsFillBuildingFill } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";

const Contact = () => {
  return (
    <>
      <Navbar
        primary={"text-white"}
        bg={"desktop:bg-black/40 mobile:bg-transparant"}
        white={"text-white"}
      />
      <div className="grid desktop:pr-7 desktop:grid-cols-2 bg-white desktop:items-center justify-between">
        <div className="desktop:h-[664px] mobile:h-screen mobile:w-full">
          <img
            src="/hero.jpg"
            alt=""
            className="object-cover brightness-75 w-full h-full"
          />
        </div>
        <div className="desktop:bg-white absolute mobile:bg-black/80 desktop:px-10 desktop:py-16 mobile:py-10 mobile:px-4 rounded-lg shadow-md desktop:right-[15rem] mobile:w-[20rem] mobile:right-0 mobile:top-[15rem] mobile:left-0 mobile:mx-auto">
          <div className="desktop:ml-16 mobile:w-full mobile: mobile:space--4">
            <h1 className="text-black/90 mobile:text-2xl mobile:text-white/95 font-bold text-3xl mb-4">
              Hubungi Saya
            </h1>
            <h2 className="text-black/80 mobile:text-white/95 text-base desktop:w-[30rem] mb-7 font-medium mobile:text-sm">
              Jika ada pertanyaan atau konsultasi seputar property silahkan
              Hubungi saya di bawah.
            </h2>
            <div className="flex items-center gap-x-2 mb-4 mobile:text-white/95 text-black/75">
              <div>
                <BsFillTelephoneFill className="text-lg" />
              </div>
              <h1 className="font-semibold text-base mobile:text-sm">
                +62 877-89070-757
              </h1>
            </div>
            <div className="flex items-center gap-x-2 mb-4 mobile:text-white/95 text-black/75">
              <div>
                <BsFillBuildingFill className="text-lg" />
              </div>
              <h1 className="font-semibold text-base mobile:text-sm">
                +62 822-3333-5227
              </h1>
            </div>
            <div className="flex items-center gap-x-2 mobile:text-white/95 text-black/75">
              <div>
                <AiFillMail className="text-lg" />
              </div>
              <h1 className="font-semibold text-base mobile:text-sm">
                erickfuturaproperty@gmail.com
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

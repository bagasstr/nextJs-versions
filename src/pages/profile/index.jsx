import React from "react";
import { MdWork, MdLocationOn } from "react-icons/md";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";

const Profile = () => {
  return (
    <>
      <Navbar primary={"text-white"} bg={"text-white"} white={"text-primary"} />
      <div className="h-[50rem]">
        <img
          src="/profileImg.jpg"
          alt=""
          className="w-full h-[400px] object-top object-cover brightness-50"
        />
        <div className="w-full">
          <div className="bg-white shadow-lg absolute mx-auto px-4 pt-16 pb-10 rounded-md flex flex-col items-center left-0 right-0 top-60 w-[70rem] mobile:w-[22rem] mobile:px-2 desktop:w-[40rem]">
            <div class="absolute w-24 h-24 -top-11 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
              <img src="/profile.jpg" alt="" className="w-full" />
            </div>
            <h1 className="text-black/80 mt-4 mb-2 font-semibold text-3xl">
              Erick Futura
            </h1>
            <h2 className="text-black/60 mb-4 flex items-center gap-x-2 font-medium text-sm">
              <MdLocationOn />
              Cengkareng, Jakarta Barat
            </h2>
            <h3 className="text-black/60 mb-10 mobile:font-medium flex items-center gap-x-2 font-semibold text-sm">
              <MdWork className="text-lg mobile:text-base" />
              Principal Consultant at Futura Property
            </h3>
            <a
              href={`https://wa.me/+62xxxxxxxxx?text=Selamat siang. Saya ingin bertanya`}
              className="bg-primary px-16 py-3 text-center rounded-md text-sm font-medium text-white"
            >
              Contact
            </a>
            <hr className="bg-black/10 h-[.01rem] mt-10 w-full" />
            <div className="mt-10 px-14 mobile:px-2">
              <p className="text-black/80 desktop:text-center">
                Perkenalkan saya Erick, Profesi saya sebagai property
                consultant, Saya sudah bergerak di bidang ini sejak 2009.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;

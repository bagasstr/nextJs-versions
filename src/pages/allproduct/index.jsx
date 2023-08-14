import React, { useEffect, useState } from "react";
import data from "../Data/ListinganPopular/DataPopular.json";
// import { Link, useLocation, useNavigate } from "react-router-dom";

import { FaBath, FaBed, FaLocationDot } from "react-icons/fa6";
import { GiResize } from "react-icons/gi";
import { BsFillBuildingFill } from "react-icons/bs";

import { useRouter } from "next/router";
import Link from "next/link";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";

const AllProduct = () => {
  const router = useRouter();
  // const filterOption = new URLSearchParams(location.search).get("filter");
  const filterOption = router.query.filter;
  // const navigates = useRouter();
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    if (filterOption) {
      const filtered = data.filter(
        (product) =>
          product.area.toLowerCase().includes(filterOption.toLowerCase()) ||
          product.typeProperty
            .toLowerCase()
            .includes(filterOption.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(data);
    }
  }, [filterOption]);
  // console.log(filteredProducts);
  return (
    <div>
      <Navbar
        primary={"text-black/80"}
        bg={"bg-transparant"}
        white={"text-primary"}
      />
      <div className="w-full">
        <div className="containers px-2 mobile:pt-24 desktop:pt-40">
          {/* Listingan Terbaru */}
          <div className="ListinganTerbaru">
            <h1 className="desktop:font-bold text-black/80 desktop:text-3xl mobile:font-bold mobile:text-2xl">
              Semua Listingan
            </h1>
            <div className="mobile:grid-cols-1 desktop:justify-items-center grid desktop:grid-cols-3 mobile:items-center">
              {filteredProducts.map((res, index) => (
                <div
                  key={index}
                  className="shadow-lg rounded-md w-fit my-7 pb-4"
                >
                  <div className="relative">
                    <img
                      src={res.thumnail}
                      alt="thumnail"
                      className="rounded-md shadow-lg desktop:h-[200px] desktop:w-full"
                    />
                    <h1 className="absolute text-white bg-primary px-3 py-1 rounded-md font-semibold text-base top-0">
                      {res.market.toUpperCase()}
                    </h1>
                  </div>
                  <div className="p-4 rounded-md text-text">
                    <h1 className="font-semibold desktop:font-medium text-text/60 mb-2">
                      {res.type}
                    </h1>
                    <h1 className="text-2xl desktop:text-lg font-semibold desktop:font-bold">
                      {res.title}
                    </h1>
                    <div className="flex items-center gap-x-2 my-2 text-text/80">
                      <FaLocationDot className="text-xs" />
                      <h2 className="text-sm font-medium">{res.area}</h2>
                    </div>
                    <div className="mb-4">
                      <h1 className="text-lg desktop:text-base font-medium text-text/60">
                        Harga mulai dari
                      </h1>
                      <h3 className="text-xl desktop:text-xl desktop:font-semibold font-semibold">
                        {res.harga}
                      </h3>
                    </div>
                    <hr className="my-2 bg-text/20" />
                    <div className="flex gap-x-4 justify-center">
                      <div className="flex items-center gap-x-2">
                        <FaBath className="text-base" />
                        <h1 className="text-lg font-medium">{res.km}</h1>
                      </div>
                      <div className="flex items-center gap-x-2">
                        <FaBed className="text-base" />
                        <h1 className="text-lg font-medium">{res.kt}</h1>
                      </div>
                      <div className="flex items-center gap-x-2">
                        <GiResize className="text-base" />
                        <h1 className="text-lg font-medium">{res.lb}</h1>
                      </div>
                      <div className="flex items-center gap-x-2">
                        <BsFillBuildingFill className="text-base" />
                        <h1 className="text-lg font-medium">{res?.lbb}</h1>
                      </div>
                    </div>
                    <hr className="my-2 bg-text/20" />
                    <div className="mt-10 flex mobile:justify-around desktop:justify-center desktop:gap-x-5">
                      <Link
                        href={`/allproduct/${res.title}`}
                        className="border-2 border-text text-text mobile:px-4 mobile:py-3 desktop:px-2 desktop:py-1 desktop:text-sm uppercase rounded-md font-semibold shadow-md flex items-center"
                      >
                        Detail Unit
                      </Link>
                      <a
                        href={`https://wa.me/+62xxxxxxxxx?text=Saya ingin beli property ini ${res.title}`}
                        className="bg-text text-white px-4 py-3 desktop:py-[.80rem] desktop:px-[1rem] uppercase rounded-md desktop:text-sm font-semibold flex items-center shadow-md"
                      >
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllProduct;

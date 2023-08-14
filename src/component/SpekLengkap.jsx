import React, { useEffect, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { data } from "../pages/Data/ListingTerbaru/DataTerbaru.json";
// import { Link, useParams } from "react-router-dom";
import { useParams } from "next/navigation";
import Link from "next/link";

const SpekLengkap = ({ props }) => {
  const { title } = useParams();
  const myData = data.find((data) => data.title === String(title));
  useEffect(() => {}, [myData]);
  return (
    <div className="fixed overflow-y-scroll z-50 bottom-0 left-0 w-full bg-slate-200 h-screen">
      <div className="px-8 py-8">
        <div className="flex fixed w-full top-6 justify-between">
          <h1 className="font-semibold text-lg text-black/80">Deskripsi</h1>
          <Link href={`/listings/detail/${myData.title}`} className="mr-16">
            <AiFillCloseCircle className="text-3xl" />
          </Link>
        </div>
        <div className="pt-24">
          <div className="flex justify-between items-center border-t-2 border-black/20">
            <h1 className="py-4 font-medium text-sm text-black/70">
              Kamar Tidur
            </h1>
            <h2 className="py-4 font-medium text-black/60 text-sm ">
              {myData.kt}
            </h2>
          </div>
          <div className="flex justify-between items-center border-t-2 border-black/20">
            <h1 className="py-4 font-medium text-sm text-black/70">
              Kamar Mandi
            </h1>
            <h2 className="py-4 font-medium text-black/60 text-sm ">
              {myData.km}
            </h2>
          </div>
          <div className="flex justify-between items-center border-t-2 border-black/20">
            <h1 className="py-4 font-medium text-sm text-black/70">
              Luas Bangunan
            </h1>
            <h2 className="py-4 font-medium text-black/60 text-sm ">
              {myData.lb}
            </h2>
          </div>
          <div className="flex justify-between items-center border-t-2 border-black/20">
            <h1 className="py-4 font-medium text-sm text-black/70">
              Luas Bangunan + Balkon
            </h1>
            <h2 className="py-4 font-medium text-black/60 text-sm ">
              {myData?.lbb ? data.lbb : "-"}
            </h2>
          </div>
          <div className="flex justify-between items-center border-t-2 border-black/20">
            <h1 className="py-4 font-medium text-sm text-black/70">
              Luas Tanah
            </h1>
            <h2 className="py-4 font-medium text-black/60 text-sm ">
              {myData?.lt ? data.lt : "-"}
            </h2>
          </div>
          <div className="flex justify-between items-center border-t-2 border-black/20">
            <h1 className="py-4 font-medium text-sm text-black/70">Garasi</h1>
            <h2 className="py-4 font-medium text-black/60 text-sm ">
              {myData?.garasi ? data.garasi : "-"}
            </h2>
          </div>
          <div className="flex justify-between items-center border-t-2 border-black/20">
            <h1 className="py-4 font-medium text-sm text-black/70">Carport</h1>
            <h2 className="py-4 font-medium text-black/60 text-sm ">
              {myData?.garasi ? data.garasi : "parkiran umum"}
            </h2>
          </div>
          <div className="flex justify-between items-center border-t-2 border-black/20">
            <h1 className="py-4 font-medium text-sm text-black/70">
              Tipe Properti
            </h1>
            <h2 className="py-4 font-medium text-black/60 text-sm ">
              {myData?.type}
            </h2>
          </div>
          <div className="flex justify-between items-center border-t-2 border-black/20">
            <h1 className="py-4 font-medium text-sm text-black/70">
              Sertifikat
            </h1>
            <h2 className="py-4 font-medium text-black/60 text-sm ">
              {myData?.serti}
            </h2>
          </div>
          <div className="flex justify-between items-center border-t-2 border-black/20">
            <h1 className="py-4 font-medium text-sm text-black/70">Listrik</h1>
            <h2 className="py-4 font-medium text-black/60 text-sm ">
              {myData?.listrik}
            </h2>
          </div>
          <div className="flex justify-between items-center border-t-2 border-black/20">
            <h1 className="py-4 font-medium text-sm text-black/70">
              KT. Pembantu
            </h1>
            <h2 className="py-4 font-medium text-black/60 text-sm ">
              {myData?.ktp ? data.ktp : "-"}
            </h2>
          </div>
          <div className="flex justify-between items-center border-t-2 border-black/20">
            <h1 className="py-4 font-medium text-sm text-black/70">
              KM. Pembantu
            </h1>
            <h2 className="py-4 font-medium text-black/60 text-sm ">
              {myData?.kmp ? data.kmp : "-"}
            </h2>
          </div>
          <div className="flex justify-between items-center border-t-2 border-black/20">
            <h1 className="py-4 font-medium text-sm text-black/70">
              Jumlah Lantai
            </h1>
            <h2 className="py-4 font-medium text-black/60 text-sm ">
              {myData?.jl ? data.jl : "-"}
            </h2>
          </div>
          <div className="flex justify-between items-center border-t-2 border-black/20">
            <h1 className="py-4 font-medium text-sm text-black/70">
              Pemandangan
            </h1>
            <h2 className="py-4 font-medium text-black/60 text-sm ">
              {myData?.pemandang ? data.pemandang : "-"}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpekLengkap;

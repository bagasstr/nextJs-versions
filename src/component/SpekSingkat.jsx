import React, { useState } from "react";
import SpekLengkap from "./SpekLengkap";
import { data } from "autoprefixer";
import Link from "next/link";

const SpekSingkat = ({ props, datas }) => {
  const [spekLengkap, setSpekLengkap] = useState(false);
  return (
    <div className="pb-5">
      <div className="flex gap-x-3 px-4 overflow-auto py-4">
        <div className="bg-white py-2 shadow-lg text-center flex items-center flex-col justify-center px-3 rounded-md">
          <h1 className="font-semibold text-sm text-black/70">L.Bangunan</h1>
          <p className="text-medium text-black/60 text-sm">{props?.lb}</p>
        </div>

        <div className="bg-white py-2 shadow-lg text-center flex items-center flex-col justify-center px-3 rounded-md">
          <h1 className="font-semibold text-sm text-black/70">
            L.Tanah/Keseluruhan
          </h1>
          <p className="text-medium text-black/60 text-sm">{props?.lbb}</p>
        </div>
        <div className="bg-white py-2 shadow-lg text-center flex items-center flex-col justify-center px-3 rounded-md">
          <h1 className="font-semibold text-sm text-black/70">K.Mandi</h1>
          <p className="text-medium text-black/60 text-sm">{props?.km}</p>
        </div>
        <div className="bg-white py-2 shadow-lg text-center flex items-center flex-col justify-center px-3 rounded-md">
          <h1 className="font-semibold text-sm text-black/70">K.Tidur</h1>
          <p className="text-medium text-black/60 text-sm">{props?.kt}</p>
        </div>
        <div className="bg-white py-2 shadow-lg text-center flex items-center flex-col justify-center px-3 rounded-md">
          <h1 className="font-semibold text-sm text-black/70">Lantai</h1>
          <p className="text-medium text-black/60 text-sm">{props?.lantai}</p>
        </div>
        <div className="bg-white py-2 shadow-lg text-center flex items-center flex-col justify-center px-3 rounded-md">
          <h1 className="font-semibold text-sm text-black/70">Pemandangan</h1>
          <p className="text-medium text-black/60 text-sm">
            {props?.pemandang}
          </p>
        </div>
      </div>
      <div className="px-4 pt-4">
        <Link
          href={`/listings/detail/${props?.title}/spek-lengkap`}
          className="text-black/70 text-sm font-semibold cursor-pointer"
        >
          Lihat Selengkapnya
        </Link>
      </div>
      {/* {spekLengkap ? <SpekLengkap props={setSpekLengkap} data={datas} /> : null} */}
    </div>
  );
};

export default SpekSingkat;

import React, { useEffect, useState } from "react";
import data from "../Data/ListingTerbaru/DataTerbaru.json";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import PreviewImage from "../../component/PreviewImage";
import SpekSingkat from "../../component/SpekSingkat";
import ButtonWa from "../../component/ButtonWa";
import Navbar from "../../component/Navbar";
// import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import Link from "next/link";

const ProductDetail = () => {
  const router = useRouter();
  const { title } = router.query;

  const myData = data.find((datas) => datas.title === String(title));
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [myData]);
  const [preview, setPreview] = useState(false);
  const [mainImage, setMainImage] = useState(myData?.image[0]);

  console.log(mainImage);
  return (
    <>
      <Navbar primary={"text-primary"} white={"text-primary"} />
      <div key={myData?.id} className="">
        <div className="w-full">
          <div className="containers mobile:pt-16 desktop:pt-28">
            <div className="desktop:hidden">
              <Swiper
                modules={[Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}
                className="desktop:hidden"
              >
                {myData?.image.map((res, idx) => (
                  <div key={idx} className="desktop:hidden">
                    <SwiperSlide>
                      <div className="">
                        <Link href={`/detail/${myData?.title}`} className="">
                          <img
                            src={res}
                            alt=""
                            className="w-[500px] h-[300px] object-cover cursor-pointer"
                          />
                        </Link>
                      </div>
                    </SwiperSlide>
                  </div>
                ))}
              </Swiper>
            </div>
            <div className="mobile:hidden ">
              <PhotoProvider>
                <div className="desktop:flex desktop:gap-x-4 desktop:items-center desktop:flex-col">
                  <Link
                    href={`/detail/${myData?.title}`}
                    className="desktop:mb-10"
                  >
                    <img
                      src={mainImage}
                      className="w-[300px] h-[400px] rounded-md"
                      alt=""
                    />
                  </Link>
                  <div className="flex gap-x-5">
                    {myData?.image.map((item, index) => (
                      <img
                        key={index}
                        src={item}
                        onClick={() => setMainImage(item)}
                        className="w-[50px] h-[50px] rounded-sm"
                        alt=""
                      />
                    ))}
                  </div>
                </div>
              </PhotoProvider>
            </div>
            <hr className="mt-10 mobile:hidden bg-primary/10 h-[2px]" />

            <div className="desktop:flex desktop:gap-x-7 desktop:justify-between">
              <div className="">
                <div className="py-4 px-4">
                  <div className="">
                    <div className="bg-primary w-fit px-4 py-[.30rem] rounded-full">
                      <h1 className="text-white text-xs font-medium">
                        {myData?.type}
                      </h1>
                    </div>
                    <div className="mt-4">
                      <h2 className="font-medium text-black/70">
                        {myData?.market.toUpperCase()}
                      </h2>
                      <h1 className="font-bold text-2xl text-black/80">
                        Rp {myData?.harga}
                      </h1>
                      <h3 className="font-medium mt-2 text-lg text-black/80">
                        {myData?.title}
                      </h3>
                      <h4 className="font-medium text-black/80">
                        {myData?.area}
                      </h4>
                    </div>
                    <hr className="bg-black/10 my-3 rounded-full" />
                    <div className="">
                      <h1 className="font-bold text-lg text-black/70">
                        Informasi Properti
                      </h1>
                      <h2 className="font-medium text-black/70">Spesifikasi</h2>
                    </div>
                  </div>
                </div>
                <SpekSingkat props={myData} datas={myData} />
                <hr />
                <div className="py-4 px-4 z-[-1]">
                  <h1 className="font-medium text-black/70">Deskripsi</h1>
                  <h2 className="font-medium mt-2 text-sm text-black/80">
                    {myData?.deskripsi}
                  </h2>
                </div>
              </div>
              {/* Profile left */}
              <div className="flex flex-col mx-4">
                <div className="mt-10 gap-x-4 rounded-md w-[300px] mobile:w-full desktop:sticky desktop:top-28 bg-white shadow-lg px-5 py-5 h-fit">
                  <div className="flex justify-center items-center gap-x-3">
                    <div>
                      <img
                        src="/profile.jpg"
                        className="w-24 rounded-md"
                        alt=""
                      />
                    </div>
                    <div className="">
                      <h1 className="text-black/80 font-semibold text-xl mt-5 ">
                        Erick
                      </h1>
                      <h3 className="text-xs">
                        Principal Consultant at Futura Property
                      </h3>
                    </div>
                    <div className="">
                      <img src="/logo-futura.png" className="w-28" alt="" />
                    </div>
                  </div>
                  <div className="mobile:sticky mobile:hidden  mobile:bottom-0">
                    <ButtonWa pesanwa={myData?.title} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mobile:sticky desktop:hidden mobile:bottom-2">
            <ButtonWa pesanwa={myData?.title} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;

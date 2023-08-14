import React, { useState } from "react";
import data from "../pages/Data/ListingTerbaru/DataTerbaru.json";
import { useRouter } from "next/router";

const Filter = () => {
  // const [area, setArea] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const navigate = useRouter();

  const handleInput = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleChange = (e) => {
    const matchFilter = data.find(
      (produk) =>
        produk.area.toLowerCase() === e.toLowerCase() ||
        produk.typeProperty.toLowerCase() === e.toLowerCase()
    );
    if (matchFilter) {
      navigate.push(`/allproduct?filter=${searchQuery}`);
    } else {
      alert(`Listingan ${searchQuery} tidak ada`);
    }
  };

  // const handleChange = (e) => {
  //   if (e.trim() === "") {
  //     setFilteredData([]);
  //   } else {
  //     const filtered = data.filter(
  //       (product) =>
  //         product.area.toLowerCase().includes(e.toLowerCase()) ||
  //         product.typeProperty.toLowerCase().includes(e.toLowerCase()) ||
  //         product.type.toLowerCase().includes(e.toLowerCase())
  //     );
  //   }
  // };

  // const handlerFilter = () => {
  //   // console.log(area);
  //   // const valueInput = area.toLowerCase();
  //   // const filterd = setInputValue(valueInput);

  //   // setLowerCase(valueInput);
  //   const matchFilter = data.find(
  //     (produk) =>
  //       produk.area.toLowerCase() === area.toLowerCase() ||
  //       produk.typeProperty.toLowerCase() === typeProperty.toLowerCase()
  //   );
  //   if (matchFilter) {
  //     navigate(`/all-listings?area=${area}&type=${typeProperty}`);
  //   } else {
  //     alert(`Listingan ${area} tidak ada`);
  //   }
  // };

  return (
    <div
      id="filter"
      className="w-full bg-gradient-to-r from-primary to-bg shadow-md desktop:py-10 mobile:pb-8 mobile:pt-14"
    >
      <div className="max-w-[1024px] mx-auto px-2">
        <div className="">
          <h1 className="mb-3 desktop:mb-3 font-medium text-lg text-white">
            Cari Properti Dengan Mudah
          </h1>
          <div className="text-center mobile:space-y-5 desktop:flex desktop:items-center desktop:gap-x-5">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
            >
              Search
            </label>
            <div className="relative w-full">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Area, Type Property secondary atau primary"
                value={searchQuery} /* area state */
                onChange={handleInput} // setArea state
                required
              />
            </div>
            <button
              onClick={(e) => handleChange(searchQuery)}
              className="bg-white px-4 py-3 mobile:py-2 mobile:w-full rounded-md mobile:mt-6 shadow-md text-lg font-semibold text-primary"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;

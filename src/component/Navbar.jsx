import React, { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { BsFillHousesFill } from "react-icons/bs";
import Link from "next/link";

const Navbar = ({ primary, white, hidden, bg }) => {
  const [menu, setMenu] = useState(false);
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 10) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
  }, []);

  return (
    <>
      <div
        className={`w-full fixed top-0 left-0 z-[99] ${hidden} ${
          colorChange ? `bg-white shadow-md ${primary}` : `${white} ${bg}`
        }`}
      >
        <div className="max-w-[1024px] mx-auto py-5 mobile:px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-x-2">
              <BsFillHousesFill
                className={`mobile:text-xl desktop:text-lg ${
                  colorChange ? { primary } : { white }
                }`}
              />
              <h1
                className={`font-semibold  text-2xl ${
                  colorChange ? { primary } : { white }
                }`}
              >
                ERICKFUTURA
              </h1>
            </div>
            <div className="flex items-center flex-row-reverse justify-center">
              <FiMenu
                className={`ml-8 font-bold text-2xl desktop:hidden ${
                  colorChange ? "text-primary" : "text-white"
                }`}
                onClick={() => setMenu((prev) => !prev)}
              />
            </div>
            <ul
              className={`desktop:flex desktop:items-center desktop:gap-x-11 mobile:absolute mobile:transition-all  mobile:p-4 mobile:rounded-lg mobile:w-full mobile:left-0 mobile:shadow-lg mobile:space-y-3  ${
                menu ? "top-[4rem] mobile:bg-primary" : "top-[-15rem]"
              }`}
            >
              <Link
                href={"/"}
                onClick={() => setMenu((prev) => !menu)}
                className="font-medium text-lg  mobile:text-white hover:text-primary/75"
              >
                <li>Home</li>
              </Link>
              <Link
                href={"/allproduct"}
                onClick={() => setMenu((prev) => !menu)}
                className="font-medium text-lg  mobile:text-white hover:text-primary/75"
              >
                <li>Product</li>
              </Link>
              <Link
                href={"/profile"}
                onClick={() => setMenu((prev) => !menu)}
                className="font-medium text-lg  mobile:text-white hover:text-primary/75"
              >
                <li>Profile</li>
              </Link>
              <Link
                href={"/contact"}
                onClick={() => setMenu((prev) => !menu)}
                className="font-medium text-lg  mobile:text-white hover:text-primary/75"
              >
                <li>Contact</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

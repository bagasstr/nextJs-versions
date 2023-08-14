import React from "react";
import Hero from "../Components/Hero";
import Filter from "../Components/Filter";
import Product from "../Components/Product";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Helmet } from "react-helmet-async";

const HomePage = () => {
  return (
    <div>
      <Navbar
        primary={"text-primary"}
        bg={"text-white"}
        white={"text-primary"}
      />
      <Hero />
      <Filter />
      <Product />
      {/* <Produk /> */}
      <Footer />
    </div>
  );
};

export default HomePage;

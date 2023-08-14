// import Link from "next/link";
import Filter from "@/component/Filter";
import Hero from "@/component/Hero";
import Navbar from "@/component/Navbar";
import Product from "@/component/Product";

export default function Home() {
  return (
    <>
      <Navbar primary={"text-primary"} white={"text-white"} />
      <Hero />
      <Filter />
      <Product />
    </>
  );
}

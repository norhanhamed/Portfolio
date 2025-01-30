'use client'
import About from "@/Components/About";
// import About from "../Components/About";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Servicses from "@/Components/Services";
import Work from "@/Components/Work";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Servicses />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}

"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from 'next/image';
import NavBar from './components/Navbar'
import main from "@/public/images/main11.png";
import CarouselComponent from './components/Carousel';
import ReactLoading from 'react-loading';
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import OrderOnline from "./components/OnlineOrder";
import Hero from "./components/Sections/Hero";

export default function Home() {

  const [webPageLoading, setWebPageLoading] = useState(true);

  // Web page loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setWebPageLoading(false);
    }, 3000); // simulate network request time
    return () => clearTimeout(timer);
  }, []);

  return webPageLoading ? (
    <div className="flex h-screen justify-center items-center space-x-4">
      <ReactLoading type={"bubbles"} color={"#000"} />
    </div>
  ) : (
    <main className='bg-[#f4f5ef] overflow-x-hidden'>
      <NavBar />
      <Hero />
      <OrderOnline />
      
      <hr className="border-b-2" />
      <section className="h-screen">
            <Menu />
      </section>
      <Footer />
    </main >
  )
};

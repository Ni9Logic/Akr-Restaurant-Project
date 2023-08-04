"use client"
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from 'next/image';
import NavBar from './components/Navbar'
import main from "@/public/images/main11.png";
import Footer from './components/Footer';
import CarouselComponent from './components/Carousel';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  function logit() {
    setScrollY(window.pageYOffset);
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    // Remove listener (like componentWillUnmount)
    return () => {
      window.removeEventListener("scroll", logit);
    };
  }, []);

  return (
    <main className='bg-[#f4f5ef]'>
      <NavBar />
      <motion.div className='h-[78vh] flex items-center justify-center overflow-hidden' style={{ x: -scrollY }}>
        <div className='flex flex-col overflow-hidden items-center justify-center'>
          <div className='max-sm:object-fit h-[89vh] overflow-hidden'>
            <Image src={main} alt='main' width={1300} height={1300} className='max-sm:transform h-[89.3vh] object-cover max-sm:w-full' />
          </div>
          <div className='absolute grid mx-auto my-auto justify-center items-center self-center mt-[250px]'>
            <CarouselComponent />
          </div>
        </div>
      </motion.div>
      <section className="h-screen">

      </section>
      <Footer />
    </main>
  )
};

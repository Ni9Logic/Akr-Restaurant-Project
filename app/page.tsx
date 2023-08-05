"use client"
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from 'next/image';
import NavBar from './components/Navbar'
import main from "@/public/images/main11.png";
import Footer from './components/Footer';
import CarouselComponent from './components/Carousel';

export default function Home() {

  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 0.5], ['100vm', '50vw']);

  return (
    <main className='bg-[#f4f5ef] overflow-x-hidden'>
      <NavBar />
      <div className='h-[89.3vh] flex items-center justify-center overflow-hidden'>
        <div className='flex flex-col overflow-hidden items-center justify-center'>
          <div className='max-sm:object-fit h-[89vh] overflow-hidden'>
            <Image src={main} alt='main' width={1300} height={1300} className='max-sm:transform h-[89.3vh] object-cover max-sm:w-full' />
          </div>
          <div className='absolute grid mx-auto my-auto justify-center items-center self-center mt-[250px]'>
            <CarouselComponent />
          </div>
        </div>
      </div>
      <hr className="border-b-2"></hr>
      <section className="h-screen" id="Menu">
        <motion.div className="flex container items-end justify-end max-sm:ml-[200px]" style={{ x }} id="phone_mockup">
          <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
            <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
            <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
            <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
              {/* Images */}
              <h1 className="text-4xl font-mono transform rotate-90 mt-[200px]">
                  Available <span className="border-b-2 border-black">Soon!</span>
              </h1>
            </div>
          </div>
        </motion.div>
      </section>
      <Footer />
    </main>
  )
};

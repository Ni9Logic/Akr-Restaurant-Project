"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import HungerStation from "@/public/images/assets/Hunger-Station.svg";
import Image from 'next/image';
import NavBar from './components/Navbar'
import main from "@/public/images/main11.png";
import Footer from './components/Footer';
import CarouselComponent from './components/Carousel';
import JahezSS from "@/public/mockups/Jahez.jpeg";
import ReactLoading from 'react-loading';
import Jahez from "@/public/images/assets/jahez.svg";

export default function Home() {
  // For Navigation
  const router = useRouter();

  const [webPageLoading, setWebPageLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const [isMobile, setIsMobile] = useState(false);

  // Web page loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setWebPageLoading(false);
    }, 3000); // simulate network request time
    return () => clearTimeout(timer);
  }, []);
  // Mobile check
  useEffect(() => {
    const handleResize = () => {
      // Adjust the breakpoint as needed
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // call once to set the initial state
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Phone Mockup Size
  const phoneMockup = useTransform(scrollYProgress, [0, 0.5], isMobile ? ['100vw', '-40vw'] : ['100vw', '35vw']);
  const phoneMockupTitle = useTransform(scrollYProgress, [0.6, 1], isMobile ? ['-100vw', '0vw'] : ['-100vw', '20vw']);

  // Online Delivery Buttons
  const [isJahezLoading, setJahezLoading] = useState(false);
  const [isHungerStationLoading, setHungerStationLoading] = useState(false);


  return webPageLoading ? (
    <div className="flex h-screen justify-center items-center space-x-4">
      <ReactLoading type={"bubbles"} color={"#000"} />
    </div>
  ) : (
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

      {/* Order Online Section */}
      <hr className="border-b-2"></hr>
      <section className="h-screen overflow:hidden max-sm:flex max-sm:flex-col" id="Order Online Now">
        <motion.div className="flex max-sm:ml-[200px] mt-[80px]" style={{ x: phoneMockup }} id="phone_mockup">
          <div className="relative  mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
            <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
            <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
            <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
              {/* Images */}
              <Image src={JahezSS} alt="JahezSS" loading="lazy" />
            </div>
          </div>
        </motion.div>
        <motion.h1 className="text-3xl font-bold leading-relaxed flex container justify-center max-sm:ml-[150px]" style={{ x: phoneMockup }}>
          Order Online Now
        </motion.h1>

        {/* Left Portion of Mockup */}
        <motion.div id="Left Portion Of Mockup" className="relative mt-[-400px]  max-sm:mt-[50px] lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center" style={{ x: phoneMockupTitle }}>
          {
            !isMobile && (
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-black">
                Order Now For Home Delivery!
              </h1>
            )
          }
          <div className="flex flex-row justify-center text-center items-center border gap-2">
            <button onClick={
              () => {
                setJahezLoading(true);
                router.push('https://www.jahez.net/index-en.html');
              }}
              className="relative px-4 py-2 font-medium group w-[157px] flex flex-row gap-2 items-center self-center justify-center">
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-red-500 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-red-500"></span>
              <span className="relative text-black group-hover:text-white">Jahez</span>
              {isJahezLoading &&
                <svg aria-hidden="true" className="h-5 w-5 text-gray-200 animate-spin dark:text-gray-600 fill-black" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
              }
            </button>
            <button onClick={
              () => {
                setHungerStationLoading(true);
                router.push('https://hungerstation.com/sa-ar');
              }}
              className="relative px-4 py-2 font-medium group w-[157px] flex flex-row gap-2 items-center self-center justify-center">
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-red-500 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-red-500"></span>
              <span className="relative text-black group-hover:text-white">Huger Station</span>
              {isHungerStationLoading &&
                <svg aria-hidden="true" className="h-5 w-5 text-gray-200 animate-spin dark:text-gray-600 fill-black" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
              }
            </button>
          </div>
        </motion.div>
      </section >
      <Footer />
    </main >
  )
};

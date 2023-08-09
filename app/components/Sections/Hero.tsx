"use client"
import Image from 'next/image';
import main from "@/public/images/main/main11.png";
import CarouselComponent from "../Carousel";
import swipe from "@/public/gif/Swipe.gif";
import { useEffect, useState } from 'react';

export default function Hero() {
    const [isMobile, setIsMobile] = useState(false);
    // Check if its mobile phone
    useEffect(() => {
        const handleResize = () => {
            // Adjust the breakpoint as needed
            setIsMobile(window.innerWidth <= 1000);
        };

        handleResize(); // call once to set the initial state
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <>
            <div id="home" className='h-[89.3vh] flex items-center justify-center overflow-hidden'>
                <div className='flex flex-col overflow-hidden items-center justify-center'>
                    <div className='max-sm:object-fit h-[89vh] overflow-hidden'>
                        <Image src={main} alt='main' width={1300} height={1300} className='max-sm:transform h-[89.3vh] object-cover max-sm:w-full' />
                    </div>
                    <div className='absolute grid mx-auto my-auto justify-center items-center self-center mt-[250px]'>
                        <CarouselComponent />
                        <div className='flex justify-between'>
                            <Image src={swipe} alt='swipeLeft' className='mix-blend-multiply' />
                            <p className={`${isMobile ? 'text-sm' : 'text-sm font-extrabold'}`}>{isMobile ? 'Swipe Left or Right' : 'Try Using Left or Right Key'}</p>
                            <Image src={swipe} alt='swipeLeft' className='transform rotate-180 mix-blend-multiply' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
"use client"
import Image from 'next/image';
import main from "@/public/images/main/main11.png";
import CarouselComponent from "../Carousel";

export default function Hero() {
    return (
        <>
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
        </>
    );
}
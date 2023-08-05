"use client"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import 'tailwindcss/tailwind.css'; // import tailwindcss
import Image from "next/image";
import biryani from "@/public/images/dishes/biryaniCanva.svg";
import fish from "@/public/images/dishes/fishCanva.svg";
import chickenCurry from "@/public/images/dishes/chickenCurryCanva.svg";
import muttonKarahi from "@/public/images/dishes/muttonKarahi.svg";
import loader from "react-loading";

const CarouselComponent = () => {
    return (
        <Carousel  autoPlay={true} interval={3000} showIndicators={false} useKeyboardArrows={true} showThumbs={false} infiniteLoop={true} showArrows={false} showStatus={false} className='w-[300px] max-[400px]:w-auto mt-[40px] max-sm:mt-[100px]'>
            <div>
                <Image src={biryani} alt='biryani' quality={1} loading='lazy' />
            </div>
            <div>
                <Image src={fish} alt='fish' quality={1} loading='lazy' />
            </div>
            <div>
                <Image src={chickenCurry} quality={1} alt='chickenCurry' loading='lazy' />
            </div>
            <div>
                <Image src={muttonKarahi} quality={1} alt='muttonCurry' loading='lazy' />
            </div>
        </Carousel>
    );
};

export default CarouselComponent;
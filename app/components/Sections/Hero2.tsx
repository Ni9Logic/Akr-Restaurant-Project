import React, { useState } from 'react';
import Image from 'next/image';
import main from "@/public/images/main/main11.png";
import CarouselComponent from "../Carousel";
import biryani from "@/public/images/dishes/biryaniCanva.svg";
import muttonKarahi from "@/public/images/dishes/muttonKarahi.svg";
import chickenCurry from "@/public/images/dishes/chickenCurryCanva.svg";
import { motion } from 'framer-motion';
import Carousel2 from '../Carousel2';

export default function Hero() {


    return (
        <>
            <div id="home" className='h-[4000px] overflow-hidden'>
                <div className='flex flex-col items-center justify-center'>
                    <div className='max-sm:object-fit h-[89vh] overflow-hidden'>
                        <Image src={main} alt='main' className='max-sm:transform h-screen object-cover max-sm:w-full' />
                    </div>
                    <Carousel2 />
                </div>
            </div>
        </>
    );
}

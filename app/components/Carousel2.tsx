import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import muttonKarahi from "@/public/images/dishes/muttonKarahi.svg";
import biryani from "@/public/images/dishes/biryaniCanva.svg";
import chickenCurry from "@/public/images/dishes/chickenCurryCanva.svg";
import { motion, useScroll } from 'framer-motion';

export default function Carousel2() {
    const { scrollY } = useScroll();
    const [isFixed, setIsFixed] = useState(false);

    const threshold = typeof window !== 'undefined' ? window.innerHeight * 0.5 : 600;
    const dishHeight = 500;  // Adjust this to match the height of your dishes

    useEffect(() => {
        const unsubscribe = scrollY.onChange((currentY) => {
            if (currentY > threshold && !isFixed) {
                setIsFixed(true);
            } else if (currentY <= threshold && isFixed) {
                setIsFixed(false);
            }
        });

        return unsubscribe;
    }, [scrollY, isFixed, threshold]);

    const computeTopOffset = (index: number) => {
        if (isFixed) {
            const offset = index * dishHeight;
            return `calc(100vh - ${offset}px)`;
        } else {
            return 'auto';
        }
    };

    return (
        <>
            <div className={`${isFixed ? 'fixed top-0 z-10' : 'absolute mb-[40vh] z-10'}`}>
                <Image src={muttonKarahi} alt='mutton' />
            </div>

            {/* These dishes move up and stack on the fixed muttonKarahi dish */}
            <div className={`relative z-20`} style={{ top: computeTopOffset(1) }}>
                <Image src={biryani} alt='biryani' />
            </div>

            <div className={`relative z-30`} style={{ top: computeTopOffset(2) }}>
                <Image src={chickenCurry} alt='chicken' />
            </div>
        </>
    );
}

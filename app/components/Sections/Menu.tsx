import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import Image from 'next/image';
import { useEffect, useRef, useState } from "react";
import line from "@/public/images/assets/lines.png";
import Button from "../ui/Button";
import Dish from "../ui/Dish";
import biryani from "@/public/images/dishes/biryaniCanva.svg";
import rice from "@/public/images/dishes/Rice.png"
import meatRice from "@/public/images/dishes/meatRice.png";
import potatoMeat from "@/public/images/dishes/PotatoMeat.png";
import chickenCurry from "@/public/images/dishes/chickenCurryCanva.svg";
import daalChanna from "@/public/images/dishes/daalChanna.png";

function SpecialFoodDishes() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["0 1", "1.33 1"],
    })

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    const [isMobile, setIsMobile] = useState(false);

    // Mobile check
    useEffect(() => {
        const handleResize = () => {
            // Adjust the breakpoint as needed
            setIsMobile(window.innerWidth <= 1000);
        };

        handleResize(); // call once to set the initial state
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isMobile ?
        <div id="Special Food" className="grid grid-cols-3 container items-center mt-[100px] justify-center self-center max-sm:flex max-sm:flex-col max-sm:space-y-2">
            <Dish fullPrice={20} halfPrice={10} title="Biryani" image={biryani} category="Special Food" />
            <Dish fullPrice={38} halfPrice={19} title="Rice" image={rice} category="Special Food" />
            <Dish fullPrice={50} halfPrice={25} title="Meat Rice" image={meatRice} category="Special Food" width={200} height={200} />
            <Dish fullPrice={12} halfPrice={7} title="Potato Meat" image={potatoMeat} category="Special Food" width={200} height={200} />
            <Dish fullPrice={12} halfPrice={7} title="Chkicken Curry" image={chickenCurry} category="Special Food" width={200} height={200} />
            <Dish fullPrice={5} halfPrice={10} title="Daal Channa" image={daalChanna} category="Special Food" width={200} height={200} />
        </div>
        :
        <motion.div ref={targetRef} id="Special Food" className="grid grid-cols-3 container items-center mt-[100px] justify-center self-center max-sm:flex max-sm:flex-col max-sm:space-y-2"
            style={{ scale: scaleProgress, opacity: opacityProgress }}>
            <Dish fullPrice={20} halfPrice={10} title="Biryani" image={biryani} category="Special Food" />
            <Dish fullPrice={38} halfPrice={19} title="Rice" image={rice} category="Special Food" />
            <Dish fullPrice={50} halfPrice={25} title="Meat Rice" image={meatRice} category="Special Food" width={200} height={200} />
            <Dish fullPrice={12} halfPrice={7} title="Potato Meat" image={potatoMeat} category="Special Food" width={200} height={200} />
            <Dish fullPrice={12} halfPrice={7} title="Chkicken Curry" image={chickenCurry} category="Special Food" width={200} height={200} />
            <Dish fullPrice={5} halfPrice={10} title="Daal Channa" image={daalChanna} category="Special Food" width={200} height={200} />
        </motion.div>
}

export default function Menu() {
    const navMotionVariants = {
        initial: { y: 20 }, // starts 20px above its original position
        animate: { y: 0 }, // animate to its original position
        exit: { y: -0 } // animate back to 20px above when exiting
    };
    const [isMobile, setIsMobile] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const categoryNavBar = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll();

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

    // Listen for scroll changes to determine whether navbar should be sticky
    useEffect(() => {
        let navbarTopPosition: any;

        const handleScroll = () => {
            // Get the initial position of the navbar when the component is mounted
            if (categoryNavBar.current && !navbarTopPosition) {
                const rect = categoryNavBar.current.getBoundingClientRect();
                navbarTopPosition = window.pageYOffset + rect.top;
            }

            // Make the navbar sticky when the scroll position reaches its initial position
            if (window.pageYOffset >= navbarTopPosition) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);


    const line1 = useTransform(scrollYProgress, [0, 1], isMobile ? ['-100vw', '10vw'] : ['-100vw', '0vw']);
    const line2 = useTransform(scrollYProgress, [0, 1], isMobile ? ['100vw', '-10vw'] : ['100vw', '0vw']);
    return (
        <>
            <hr className="border-b-2" />
            <section id="Menu" className="h-screen max-[375px]:mt-[200px] relative">
                <div className="flex flex-row max-sm:flex-col justify-center items-center w-full gap-3">
                    {/* Only single line on phone */}
                    <motion.div className={""} style={{ x: line1 }}>
                        <Image src={line} alt={"line1"} width={300} height={50} />
                    </motion.div>
                    <div ref={categoryNavBar} className='max-sm:flex max-sm:container max-sm:overflow-x-auto flex flex-row justify-center self-center'>
                        <div className="max-sm:overflow-y-hidden">
                            <nav className='flex flex-row justify-center items-center gap-3 self-center'>
                                <Button title={"Special Food"} width={157} />
                                <Button title={"Dum Pukht"} width={157} />
                                <Button title={"Food Menu"} width={157} />
                                <Button title={"BBQ"} width={157} />
                                <Button title={"Drink"} width={157} />
                            </nav>
                        </div>

                        {/* Gets attached once the menu bar starts */}
                        <AnimatePresence>
                            {isSticky && (
                                <motion.div
                                    ref={categoryNavBar}
                                    className={`max-sm:flex max-sm:overflow-x-auto fixed top-0 z-50 w-full p-4 max-sm:backdrop-blur-sm`}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    variants={navMotionVariants}
                                    transition={{ ease: "easeInOut", duration: 0.3 }}
                                >
                                    <div className="overflow-y-hidden">
                                        <nav className='flex flex-row justify-center items-center gap-3 self-center'>
                                            <Button title={"Special Food"} width={157} />
                                            <Button title={"Dum Pukht"} width={157} />
                                            <Button title={"Food Menu"} width={157} />
                                            <Button title={"BBQ"} width={157} />
                                            <Button title={"Drink"} width={157} />
                                        </nav>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                    <motion.div style={{ x: line2 }}>
                        <Image src={line} alt={"line2"} width={300} height={50} />
                    </motion.div>
                </div>
                <SpecialFoodDishes />
            </section>

        </>
    )
}

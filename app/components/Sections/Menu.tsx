import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import SpecialFoodDishes, { BBQ, Drink, DumPukht, FoodMenuDishes } from "../Dishes/Dishes";
import { useEffect, useRef, useState } from "react";
import menu from "@/public/images/assets/menuu.png";
import Button from "../ui/Button";
import Image from 'next/image';
import biryani from "@/public/images/dishes/biryaniCanva.svg";
import rice from "@/public/images/dishes/Rice.png"
import meatRice from "@/public/images/dishes/meatRice.png";
import potatoMeat from "@/public/images/dishes/PotatoMeat.png";
import chickenCurry from "@/public/images/dishes/chickenCurryCanva.svg";
import pepsi from "@/public/images/dishes/Pepsi.png";
import mirinda from "@/public/images/dishes/Mirinda.png";
import sevenUp from "@/public/images/dishes/7up.png";
import lassi from "@/public/images/dishes/Lassi.png";
import chickenBoti from "@/public/images/dishes/chickenBoti.png";
import falooda from "@/public/images/dishes/Falooda1.png";
import muttonKarahi from "@/public/images/dishes/muttonKarahi.svg";
import iceCream from "@/public/images/dishes/iceCream.png";
import Haleem from "@/public/images/dishes/Haleem.png";
import Nihari from "@/public/images/dishes/Nihari.png";
import chickenRice from "@/public/images/dishes/chicken rice.png";
import chickenRiceFaham from "@/public/images/dishes/chicken rice faham.png";


export default function Menu() {
    const [isSpecialFoodInView, setIsSpecialFoodInView] = useState(false);
    const [isFoodMenuInView, setIsFoodMenuInView] = useState(false);
    const [isDumPukhtInView, setDumPuktInView] = useState(false);
    const [isBBQInView, setBBQInView] = useState(false);
    const [isDrinksInView, setDrinkInView] = useState(false);
    const [isMenu, setIsMenu] = useState(false);

    useEffect(() => {

        if (!isSpecialFoodInView && !isFoodMenuInView && !isDumPukhtInView && !isBBQInView && !isDrinksInView)
            setIsMenu(false);
        else
            setIsMenu(true);
    }, [isSpecialFoodInView, isFoodMenuInView, isDumPukhtInView, isBBQInView, isDrinksInView])


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


    const randomDishesLine = useTransform(scrollYProgress, isMobile ? [0, 0.2] : [0, 0.5], isMobile ? ['0vw', '-100vw'] : ['10vw', '-50vw']);
    return (
        <>
            {/* Border */}
            <hr className="border-b-2" />
            <section id="menu" className="max-[375px]:mt-[200px] relative max-sm:w-full">
                <div className="min-[1000px]:flex min-[1000px]:flex-row max-sm:flex-col min-[1000px]:justify-center min-[1000px]:items-center gap-3">
                    <div ref={categoryNavBar} className='max-sm:flex min-[1000px]:flex min-[1000px]:flex-row min-[1000px]:justify-center min-[1000px]:self-center gap-3 max-sm:w-auto'>
                        <motion.div style={{ x: randomDishesLine }} className="relative flex flex-row">
                            <div className="flex flex-row items-center justify-center self-center max-sm:mt-[20px]">
                                <Image src={menu} alt="menu" width={150} height={150} className="object-contain h-[200px]" />
                                <Image src={menu} alt="menu" width={150} height={150} className="object-contain h-[200px]" />
                                <Image src={menu} alt="menu" width={150} height={150} className="object-contain h-[200px]" />
                                <Image src={menu} alt="menu" width={150} height={150} className="object-contain h-[200px]" />
                                <Image src={menu} alt="menu" width={150} height={150} className="object-contain h-[200px]" />
                                <Image src={menu} alt="menu" width={150} height={150} className="object-contain h-[200px]" />
                                <Image src={menu} alt="menu" width={150} height={150} className="object-contain h-[200px]" />
                                <Image src={menu} alt="menu" width={150} height={150} className="object-contain h-[200px]" />
                                <Image src={biryani} alt="menu" width={150} height={150} className="object-contain h-[200px]" />
                                <Image src={rice} alt="menu" width={150} height={150} className="object-contain h-[200px]" />
                                <Image src={meatRice} alt="menu" width={150} height={150} className="object-contain h-[200px]" />
                                <Image src={potatoMeat} alt="menu" width={150} height={150} className="object-contain h-[200px]" />
                                <Image src={chickenBoti} alt="menu" width={150} height={150} className="object-contain h-[200px]" />
                                <Image src={chickenCurry} alt="menu" width={150} height={150} className="object-contain h-[200px]" />
                                <Image src={chickenRiceFaham} alt="menu" width={150} height={150} className="object-contain h-[200px]" />
                                <Image src={chickenRice} alt="menu" width={150} height={150} className="object-contain h-[200px]" />
                                <Image src={chickenCurry} alt="menu" width={150} height={150} className="object-contain h-[200px]" />
                                <Image src={muttonKarahi} alt="menu" width={150} height={150} className="object-contain h-[200px]" />
                                <Image src={falooda} alt="menu" width={150} height={150} className="object-contain h-[200px]" />
                                <Image src={iceCream} alt="menu" width={150} height={150} className="object-contain h-[200px]" />
                                <Image src={lassi} alt="menu" width={150} height={150} className="object-contain h-[200px]" />
                                <Image src={Haleem} alt="menu" width={150} height={150} className="object-contain h-[200px]" />
                                <Image src={Nihari} alt="menu" width={150} height={150} className="object-contain h-[200px]" />
                                <Image src={meatRice} alt="menu" width={150} height={150} className="object-contain h-[200px]" />
                                <Image src={mirinda} alt="menu" width={150} height={150} className="object-contain h-[200px]" />
                                <Image src={pepsi} alt="menu" width={150} height={150} className="object-contain h-[200px]" />
                                <Image src={sevenUp} alt="menu" width={150} height={150} className="object-contain h-[200px]" />
                            </div>
                        </motion.div>
                        {/* Gets attached once the menu bar starts */}
                        <AnimatePresence>
                            {isSticky && (
                                <motion.div
                                    ref={categoryNavBar}
                                    className={`${isMenu ? 'fixed top-0 z-50 bg-white max-sm:max-w-full max-sm:overflow-x-auto' : 'bg-white'}`}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    variants={navMotionVariants}
                                    style={{ overflow: isMobile ? 'auto' : 'hidden'} }
                                >
                                    {isMobile ?
                                        <nav className='flex flex-row justify-center items-center gap-3 max-sm:gap-0 w-full' style={{ minWidth: '785px' }}>
                                            <Button id="specialFoods" title={"Special Food"} width={157} inView={isSpecialFoodInView} />
                                            <Button id="foodMenus" title={"Food Menu"} width={157} inView={isFoodMenuInView} />
                                            <Button id="dumPukhts" title={"Dum Pukht"} width={157} inView={isDumPukhtInView} />
                                            <Button id="BBQS" title={"BBQ"} width={157} inView={isBBQInView} />
                                            <Button id="DRINKSS" title={"Drink"} width={157} inView={isDrinksInView} />
                                        </nav>
                                        :
                                        <nav className='flex flex-row justify-center items-center gap-3 w-full'>
                                            <Button id="specialFoods" title={"Special Food"} width={157} inView={isSpecialFoodInView} />
                                            <Button id="foodMenus" title={"Food Menu"} width={157} inView={isFoodMenuInView} />
                                            <Button id="dumPukhts" title={"Dum Pukht"} width={157} inView={isDumPukhtInView} />
                                            <Button id="BBQS" title={"BBQ"} width={157} inView={isBBQInView} />
                                            <Button id="DRINKSS" title={"Drink"} width={157} inView={isDrinksInView} />
                                        </nav>
                                    }

                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </section >
            <SpecialFoodDishes setInView={setIsSpecialFoodInView} />
            <FoodMenuDishes setInView={setIsFoodMenuInView} />
            <DumPukht setInView={setDumPuktInView} />
            <BBQ setInView={setBBQInView} />
            <Drink setInView={setDrinkInView} />
            <div className="mb-[20px]" />
        </>
    )
}

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import SpecialFoodDishes, { BBQ, Drink, DumPukht, FoodMenuDishes } from "../Dishes/Dishes";
import { useEffect, useRef, useState } from "react";
import line from "@/public/images/assets/lines.png";
import flippedLine from "@/public/images/assets/linesFlipped.png";
import Button from "../ui/Button";
import Image from 'next/image';


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


    const line1 = useTransform(scrollYProgress, [0, 0.3], isMobile ? ['-100vw', '10vw'] : ['-100vw', '40vw']);
    const line2 = useTransform(scrollYProgress, [0, 0.3], isMobile ? ['100vw', '-10vw'] : ['150vw', '40vw']);
    return (
        <>
            {/* Border */}
            <hr className="border-b-2" />
            <section id="menu" className="h-screen max-[375px]:mt-[200px] relative">
                <div className="min-[1000px:]flex min-[1000px]:flex-row max-sm:flex-col min-[1000px]:justify-center min-[1000px]:items-center gap-3">
                    <motion.div className={""} style={{ x: line1 }}>
                        <Image src={line} alt={"line1"} width={300} height={50} />
                    </motion.div>
                    <div ref={categoryNavBar} className='max-sm:flex max-sm:overflow-x-auto flex flex-row justify-center self-center gap-3'>
                        <div className="max-sm:overflow-y-hidden">
                            <nav className='flex flex-row justify-center items-center gap-3 max-sm:gap-0 self-center overflow-hidden h-auto'>
                                <Button title={"Special Food"} width={157} inView={isSpecialFoodInView} />
                                <Button title={"Dum Pukht"} width={157} inView={isDumPukhtInView} />
                                <Button title={"Food Menu"} width={157} inView={isFoodMenuInView} />
                                <Button title={"BBQ"} width={157} inView={isBBQInView} />
                                <Button title={"Drink"} width={157} inView={isDrinksInView} />
                            </nav>
                        </div>

                        {/* Gets attached once the menu bar starts */}
                        <AnimatePresence>
                            {isSticky && (
                                <motion.div
                                    ref={categoryNavBar}
                                    className={`${isMenu && 'fixed top-0 z-50 bg-white'}`}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    variants={navMotionVariants}
                                >
                                    <div className="overflow-y-hidden">
                                        <nav className='flex flex-row justify-center items-center gap-3 self-center overflow-hidden'>
                                            <Button title={"Special Food"} width={157} inView={isSpecialFoodInView} />
                                            <Button title={"Dum Pukht"} width={157} inView={isDumPukhtInView} />
                                            <Button title={"Food Menu"} width={157} inView={isFoodMenuInView} />
                                            <Button title={"BBQ"} width={157} inView={isBBQInView} />
                                            <Button title={"Drink"} width={157} inView={isDrinksInView} />
                                        </nav>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                    <motion.div style={{ x: line2 }}>
                        <Image src={flippedLine} alt={"line2"} width={300} height={50} />
                    </motion.div>
                </div>
                <SpecialFoodDishes setInView={setIsSpecialFoodInView} />
            </section>
            <FoodMenuDishes setInView={setIsFoodMenuInView} />
            <DumPukht setInView={setDumPuktInView} />
            <BBQ setInView={setBBQInView} />
            <Drink setInView={setDrinkInView} />
            <div className="mb-[20px]" />
        </>
    )
}

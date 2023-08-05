import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import Image from 'next/image';
import { useEffect, useRef, useState } from "react";
import line from "@/public/images/assets/lines.png";
import menuLogo from "@/public/images/logos/menuLogo.png";
import Button from "../ui/Button";

export default function Menu() {
    const navMotionVariants = {
        initial: { y: -20 }, // starts 20px above its original position
        animate: { y: 0 }, // animate to its original position
        exit: { y: -30 } // animate back to 20px above when exiting
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
            </section>
        </>
    )
}

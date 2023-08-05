import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from 'next/image';
import { useEffect, useRef, useState } from "react";
import line from "@/public/images/assets/lines.png";
import menuLogo from "@/public/images/logos/menuLogo.png";
import Button from "../ui/Button";

export default function Menu() {
    const { scrollYProgress } = useScroll();
    const [isMobile, setIsMobile] = useState(false);
    const categoryNavBar = useRef<HTMLDivElement>(null);
    const isInView = useInView(categoryNavBar);

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

    // Check if the navbar is in view
    useEffect(() => {
        console.log("Element in view: ", isInView);
        console.log(categoryNavBar.current?.offsetHeight, categoryNavBar.current?.scrollHeight, categoryNavBar.current?.clientHeight, window.scrollY);
    }, [isInView]);
    const line1 = useTransform(scrollYProgress, [0, 1], isMobile ? ['-100vw', '10vw'] : ['-100vw', '0vw']);
    const line2 = useTransform(scrollYProgress, [0, 1], isMobile ? ['100vw', '-50vw'] : ['100vw', '0vw']);
    return (
        <>
            <hr className="border-b-2" />
            <section id="Menu" className="h-screen max-[375px]:mt-[200px] relative">
                <div className="flex flex-row max-sm:flex-col justify-center items-center w-full gap-3">
                    <motion.div className={""} style={{ x: line1 }}>
                        <Image src={line} alt={"line1"} width={300} height={50} />
                    </motion.div>
                    <div className="max-sm:flex max-sm:container max-sm:overflow-x-auto max-sm:overflow-y-hidden">
                        <nav className="flex flex-row justify-center items-center gap-3 self-center">
                            <Button title={"Special Food"} width={157} />
                            <Button title={"Dum Pukht"} width={157} />
                            <Button title={"Food Menu"} width={157} />
                            <Button title={"BBQ"} width={157} />
                            <Button title={"Drink"} width={157} />
                        </nav>
                    </div>
                    {!isMobile &&
                        <motion.div style={{ x: line2 }}>
                            <Image src={line} alt={"line2"} width={300} height={50} />
                        </motion.div>
                    }
                </div>

            </section>
        </>
    )
}

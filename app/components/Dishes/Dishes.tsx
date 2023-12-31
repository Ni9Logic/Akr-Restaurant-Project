import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Dish from "../ui/Dish";
import biryani from "@/public/images/dishes/biryaniCanva.svg";
import rice from "@/public/images/dishes/chawal.png"
import meatRice from "@/public/images/dishes/meatRice.png";
import potatoMeat from "@/public/images/dishes/PotatoMeat.png";
import chickenCurry from "@/public/images/dishes/chickenCurryCanva.svg";
import daalChanna from "@/public/images/dishes/daalChanna.png";
import pepsi from "@/public/images/dishes/Pepsi.png";
import mirinda from "@/public/images/dishes/Mirinda.png";
import sevenUp from "@/public/images/dishes/7up.png";
import lassi from "@/public/images/dishes/Lassi.png";
import dumPukht from "@/public/images/dishes/dumPukht.png";
import seekhTikka from "@/public/images/dishes/seekhTikka.png";
import fish from "@/public/images/dishes/fishCanva.svg";
import chickenBoti from "@/public/images/dishes/chickenBoti.png";
import meatChanp from "@/public/images/dishes/meatChanp.png";
import falooda from "@/public/images/dishes/Falooda1.png";
import muttonKarahi from "@/public/images/dishes/muttonKarahi.svg";
import chickenKarahi from "@/public/images/dishes/Chicken Karahi.png";
import iceCream from "@/public/images/dishes/iceCream.png";
import Haleem from "@/public/images/dishes/Haleem.png";
import Nihari from "@/public/images/dishes/Nihari.png";
import Soup from "@/public/images/dishes/soup.png";
import chickenRice from "@/public/images/dishes/chickenrice2.jpeg";
import chickenRiceFaham from "@/public/images/dishes/chicken rice faham.png";
import chapliKabab from "@/public/images/dishes/chapli.png";
import daalMaash from "@/public/images/dishes/daalMash.png";
import SeekhKabab from "@/public/images/dishes/SeekhKabab.png";
import BanuBeefPulao from "@/public/images/dishes/BanuBeefPulao.png";
import MatkaBiryani from "@/public/images/dishes/MatkaBiryani.png";
import MurghRoast from "@/public/images/dishes/MurghRoast.png";
import CharsadWaliRice from "@/public/images/dishes/charsadwalirice1.jpeg";

export default function SpecialFoodDishes({ setInView }: any) {
    const ref = useRef(null);
    const inView = useInView(ref);

    useEffect(() => {
        setInView(inView);
    }, [inView]);
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
        <div ref={ref}>
            <motion.div id="special food" className="mt-[100px] justify-center self-center max-sm:flex max-sm:flex-col max-sm:space-y-2 max-sm:justify-center max-sm:items-center"
                style={{ scale: scaleProgress, opacity: opacityProgress }}>
                <div className="flex container items-center justify-center">
                    <h1 className="text-3xl font-sans leading-relaxed">SPECIAL FOOD</h1>
                </div>
                <Dish fullPrice={"Full 20"} halfPrice={"Half 10"} title="Biryani" image={biryani} category="Special Food" />
                <Dish fullPrice={"Full 38"} halfPrice={"Half 19"} title="Rice" image={rice} category="Special Food" />
                <Dish fullPrice={"Full 50"} halfPrice={"Half 25"} title="Meat Rice" image={meatRice} category="Special Food" width={200} height={200} />
                <Dish fullPrice={"Full 12"} halfPrice={"Half 7"} title="Potato Meat" image={potatoMeat} category="Special Food" width={200} height={200} />
                <Dish fullPrice={"Full 12"} halfPrice={"Half 7"} title="Chkicken Curry" image={chickenCurry} category="Special Food" width={200} height={200} className="h-[200px] object-contain" />
                <Dish fullPrice={"30"} title="Banu Beef Pulao" category="Special Food" image={BanuBeefPulao} width={200} height={200} className="h-[200px] object-contain" />
                <Dish fullPrice={"Full 50"} halfPrice={"Half 25"} title="Matka Biryani" image={MatkaBiryani} category="Special Food" width={200} height={200} className="h-[200px]" />
                <Dish fullPrice={"40"} title="Murgh Roast" category="Special Food" image={MurghRoast} width={200} height={200} className="h-[200px]" />

            </motion.div >
        </div>
        :
        <div ref={ref}>
            <motion.div ref={targetRef} id="special food" className="grid grid-cols-3 container items-center mt-[100px] justify-center self-center max-sm:flex max-sm:flex-col max-sm:space-y-2"
                style={{ scale: scaleProgress, opacity: opacityProgress }}>
                <Dish fullPrice={"Full 20"} halfPrice={"Half 10"} title="Biryani" image={biryani} category="Special Food" />
                <Dish fullPrice={"Full 38"} halfPrice={"Half 19"} title="Rice" image={rice} category="Special Food" />
                <Dish fullPrice={"Full 50"} halfPrice={"Half 25"} title="Meat Rice" image={meatRice} category="Special Food" width={200} height={200} />
                <Dish fullPrice={"Full 12"} halfPrice={"Half 7"} title="Potato Meat" image={potatoMeat} category="Special Food" width={200} height={200} />
                <Dish fullPrice={"Full 12"} halfPrice={"Half 7"} title="Chkicken Curry" image={chickenCurry} category="Special Food" width={200} height={200} className="h-[200px] object-contain" />
                <Dish fullPrice={"Full 5"} halfPrice={"Half 10"} title="Daal Channa" image={daalChanna} category="Special Food" width={200} height={200} className="h-[200px]" />
                <Dish fullPrice={"30"} title="Banu Beef Pulao" category="Special Food" image={BanuBeefPulao} width={200} height={200} className="h-[200px] object-contain" />
                <Dish fullPrice={"Full 50"} halfPrice={"Half 25"} title="Matka Biryani" image={MatkaBiryani} category="Special Food" width={200} height={200} className="h-[200px]" />
                <Dish fullPrice={"40"} title="Murgh Roast" category="Special Food" image={MurghRoast} width={200} height={200} className="h-[200px]" />

            </motion.div>
        </div>
}

export function FoodMenuDishes({ setInView }: any) {
    const ref = useRef(null);
    const inView = useInView(ref);

    useEffect(() => {
        setInView(inView);
    }, [inView]);
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
        <div ref={ref}>
            <motion.div id="food menu" className="mt-[100px] justify-center self-center max-sm:flex max-sm:flex-col max-sm:space-y-2 max-sm:justify-center max-sm:items-center"
                style={{ scale: scaleProgress, opacity: opacityProgress }}>
                <div className="flex items-center justify-center mt-[5vh]">
                    <h1 className="text-3xl font-sans leading-relaxed">FOOD MENU</h1>
                </div>
                <Dish fullPrice={"Full 100"} halfPrice={"Half 50"} title="Mutton Karahi" image={muttonKarahi} category="Food Menu" className="h-[200px] object-contain" />
                <Dish fullPrice={"Full 60"} halfPrice={"Half 30"} title="Chicken Karahi" image={chickenKarahi} category="Food Menu" className="h-[200px] object-contain" />
                <Dish fullPrice={"Full 48"} halfPrice={"Half 24"} title="Chapli Kabab" image={chapliKabab} category="Food Menu" width={200} height={200} className="h-[200px] object-contain" />
                <Dish fullPrice={"Full 70"} halfPrice={"Half 35"} title="Chicken Handi" image={potatoMeat} category="Food Menu" width={200} height={200} className="h-[200px] object-contain" />
                <Dish fullPrice={"Full 55"} halfPrice={"Half 35"} title="Fish" image={fish} category="Food Menu" width={200} height={200} className="h-[200px] object-contain" />
                <Dish fullPrice={"Full 10"} halfPrice={"Half 5"} title="Daal Mash" image={daalMaash} category="Food Menu" width={200} height={200} className="h-[200px] object-contain" />
                <Dish fullPrice={"Full 15"} halfPrice={"Half 8"} title="Haleem" image={Haleem} category="Food Menu" width={200} height={200} className="h-[200px] object-contain" />
                <Dish fullPrice={"Full 15"} halfPrice={"Half 8"} title="Nihari" image={Nihari} category="Food Menu" width={200} height={200} className="h-[200px] object-contain" />
                <Dish fullPrice={"Full 10"} halfPrice={"Half 5"} title="Soup" image={Soup} category="Food Menu" width={200} height={200} className="h-[200px] object-contain" />
                <Dish fullPrice={"Full 15"} halfPrice={"Half 15"} title="Charsad Waali Rice" image={CharsadWaliRice} category="Food Menu" width={200} height={200} className="object-contain mt-[20px]" />
                <Dish fullPrice={"Full 40"} halfPrice={"Half 20"} title="Chicken Rice Faham" image={chickenRiceFaham} category="Food Menu" width={200} height={200} className="h-[200px] object-contain" />
                <Dish fullPrice={"Full 38"} halfPrice={"Half 19"} title="Chicken Rice" image={chickenRice} category="Food Menu" width={200} height={200} className="object-contain mt-[50px]" />
            </motion.div >
        </div>
        :
        <div ref={ref}>
            <motion.div ref={targetRef} id="food menu" className="grid grid-cols-3 container items-center mt-[100px] justify-center self-center max-sm:flex max-sm:flex-col max-sm:space-y-2"
                style={{ scale: scaleProgress, opacity: opacityProgress }}>
                <Dish fullPrice={"Full 100"} halfPrice={"Half 50"} title="Mutton Karahi" image={muttonKarahi} category="Food Menu" className="h-[200px] object-contain" />
                <Dish fullPrice={"Full 60"} halfPrice={"Half 30"} title="Chicken Karahi" image={chickenKarahi} category="Food Menu" className="h-[200px] object-contain" />
                <Dish fullPrice={"Full 48"} halfPrice={"Half 24"} title="Chapli Kabab" image={chapliKabab} category="Food Menu" width={200} height={200} className="h-[200px] object-contain" />
                <Dish fullPrice={"Full 70"} halfPrice={"Half 35"} title="Chicken Handi" image={potatoMeat} category="Food Menu" width={200} height={200} className="h-[200px] object-contain" />
                <Dish fullPrice={"Full 55"} halfPrice={"Half 35"} title="Fish" image={fish} category="Food Menu" width={200} height={200} className="h-[200px] object-contain" />
                <Dish fullPrice={"Full 10"} halfPrice={"Half 5"} title="Daal Mash" image={daalMaash} category="Food Menu" width={200} height={200} className="h-[200px] object-contain" />
                <Dish fullPrice={"Full 15"} halfPrice={"Half 8"} title="Haleem" image={Haleem} category="Food Menu" width={200} height={200} className="h-[200px] object-contain" />
                <Dish fullPrice={"Full 15"} halfPrice={"Half 8"} title="Nihari" image={Nihari} category="Food Menu" width={200} height={200} className="h-[200px] object-contain" />
                <Dish fullPrice={"Full 10"} halfPrice={"Half 5"} title="Soup" image={Soup} category="Food Menu" width={200} height={200} className="h-[200px] object-contain" />
                <Dish fullPrice={"Full 15"} halfPrice={"Half 15"} title="Charsad Waali Rice" image={CharsadWaliRice} category="Food Menu" width={200} height={200} className="h-[200px] object-contain" />
                <Dish fullPrice={"Full 40"} halfPrice={"Half 20"} title="Chicken Rice Faham" image={chickenRiceFaham} category="Food Menu" width={200} height={200} className="h-[200px] object-contain" />
                <Dish fullPrice={"Full 38"} halfPrice={"Half 19"} title="Chicken Rice" image={chickenRice} category="Food Menu" width={200} height={200} className="h-[200px] object-contain" />
            </motion.div>
        </div>
}

export function DumPukht({ setInView }: any) {
    const ref = useRef(null);
    const inView = useInView(ref);

    useEffect(() => {
        setInView(inView);
    }, [inView]);
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
        <div ref={ref}>
            <motion.div id="dum pukht" className="mt-[100px] justify-center self-center max-sm:flex max-sm:flex-col max-sm:space-y-2 max-sm:justify-center max-sm:items-center"
                style={{ scale: scaleProgress, opacity: opacityProgress }}>
                <div className="flex items-center justify-center mt-[5vh]">
                    <h1 className="text-3xl font-sans leading-relaxed">DUM PUKHT</h1>
                </div>
                <Dish fullPrice={600} title="Half Dum Puhkt" image={dumPukht} category="Dum Pukht" className="h-[200px]" />
                <Dish fullPrice={1150} title="Full Dum Puhkt" image={dumPukht} category="Dum Pukht" className="h-[200px]" />
                <Dish fullPrice={120} halfPrice={60} title="Platter" image={dumPukht} category="Dum Pukht" className="h-[200px]" />
            </motion.div >
        </div>
        :
        <div ref={ref}>
            <motion.div ref={targetRef} id="dum pukht" className="grid grid-cols-3 container items-center mt-[100px] justify-center self-center max-sm:flex max-sm:flex-col max-sm:space-y-2"
                style={{ scale: scaleProgress, opacity: opacityProgress }}>
                <Dish fullPrice={600} title="Half Dum Puhkt" image={dumPukht} category="Dum Pukht" className="h-[200px] object-contain" />
                <Dish fullPrice={1150} title="Full Dum Puhkt" image={dumPukht} category="Dum Pukht" className="h-[200px] object-contain" />
                <Dish fullPrice={120} halfPrice={60} title="Platter" image={dumPukht} category="Dum Pukht" className="h-[200px] object-contain" />

            </motion.div>
        </div>
}

export function BBQ({ setInView }: any) {
    const ref = useRef(null);
    const inView = useInView(ref);

    useEffect(() => {
        setInView(inView);
    }, [inView]);
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
        <div ref={ref}>
            <motion.div id="bbq" className="mt-[100px] justify-center self-center max-sm:flex max-sm:flex-col max-sm:space-y-2 max-sm:justify-center max-sm:items-center"
                style={{ scale: scaleProgress, opacity: opacityProgress }}>
                <div className="flex items-center justify-center mt-[5vh]">
                    <h1 className="text-3xl font-sans leading-relaxed">BBQ</h1>
                </div>
                <Dish fullPrice={"15 Per Piece"} title="Seekh Tikka" image={seekhTikka} category="BBQ" className="h-[200px] object-contain" />
                <Dish fullPrice={"15 Per Piece"} title="Seekh Kabab" image={SeekhKabab} category="BBQ" className="h-[200px] object-contain" />
                <Dish fullPrice={"15 Per Piece"} title="Meat Chanp" image={meatChanp} category="BBQ" width={200} height={200} />
                <Dish fullPrice={"15 Per Piece"} title="Chicken Boti" image={chickenBoti} category="BBQ" className="h-[200px] object-contain" />

            </motion.div >
        </div>
        :
        <div ref={ref}>
            <motion.div ref={targetRef} id="bbq" className="grid grid-cols-3 container items-center mt-[100px] justify-center self-center max-sm:flex max-sm:flex-col max-sm:space-y-2"
                style={{ scale: scaleProgress, opacity: opacityProgress }}>
                <Dish fullPrice={"15 Per Piece"} title="Seekh Tikka" image={seekhTikka} category="BBQ" className="h-[200px] object-contain" />
                <Dish fullPrice={"15 Per Piece"} title="Seekh Kabab" image={SeekhKabab} category="BBQ" className="h-[200px] object-contain" />
                <Dish fullPrice={"15 Per Piece"} title="Chicken Boti" image={chickenBoti} category="BBQ" className="h-[200px] object-contain" />
                <Dish fullPrice={"15 Per Piece"} title="Meat Chanp" image={meatChanp} category="BBQ" width={200} height={200} />

            </motion.div>
        </div>
}

export function Drink({ setInView }: any) {
    const ref = useRef(null);
    const inView = useInView(ref);

    useEffect(() => {
        setInView(inView);
    }, [inView]);
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
        <div ref={ref}>
            <motion.div id="drink" className="mt-[100px] justify-center self-center max-sm:flex max-sm:flex-col max-sm:space-y-2 max-sm:justify-center max-sm:items-center"
                style={{ scale: scaleProgress, opacity: opacityProgress }}>
                <div className="flex items-center justify-center mt-[5vh]">
                    <h1 className="text-3xl font-sans leading-relaxed">COLD DRINKS</h1>
                </div>
                <Dish fullPrice={"Large 9"} midPrice={"Small 2.5"} halfPrice={"Medium 5"} title="Mirinda" image={mirinda} width={200} height={200} category="Drink" className="h-[200px] object-contain" />
                <Dish fullPrice={"Large 9"} midPrice={"Small 2.5"} halfPrice={"Medium 5"} title="Pepsi" image={pepsi} category="Drink" width={200} height={200} className="h-[200px] object-contain" />
                <Dish fullPrice={"Large 9"} midPrice={"Small 2.5"} halfPrice={"Medium 5"} title="7 up" image={sevenUp} category="Drink" width={200} height={200} className="h-[200px] object-contain" />
                <Dish fullPrice={7} title="Lassi" image={lassi} category="Drink" width={200} height={200} className="h-[200px] object-contain" />
            </motion.div >
        </div>
        :
        <div ref={ref}>
            <motion.div ref={targetRef} id="drink" className="grid grid-cols-3 container items-center mt-[100px] justify-center self-center max-sm:flex max-sm:flex-col max-sm:space-y-2"
                style={{ scale: scaleProgress, opacity: opacityProgress }}>
                <Dish fullPrice={"Large 9"} midPrice={"Small 2.5"} halfPrice={"Medium 5"} title="Mirinda" image={mirinda} width={200} height={200} category="Drink" className="h-[200px] object-contain" />
                <Dish fullPrice={"Large 9"} midPrice={"Small 2.5"} halfPrice={"Medium 5"} title="Pepsi" image={pepsi} category="Drink" width={200} height={200} className="h-[200px] object-contain" />
                <Dish fullPrice={"Large 9"} midPrice={"Small 2.5"} halfPrice={"Medium 5"} title="7 up" image={sevenUp} category="Drink" width={200} height={200} className="h-[200px] object-contain" />
                <Dish fullPrice={7} title="Lassi" image={lassi} category="Drink" width={200} height={200} className="h-[200px] object-contain" />
            </motion.div>
        </div>
}

export function IceCream({ setInView }: any) {
    const ref = useRef(null);
    const inView = useInView(ref);

    useEffect(() => {
        setInView(inView);
    }, [inView]);
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
        <div ref={ref} id="ice cream">
            <motion.div id="ice cream" className="mt-[100px] justify-center self-center max-sm:flex max-sm:flex-col max-sm:space-y-2 max-sm:justify-center max-sm:items-center"
                style={{ scale: scaleProgress, opacity: opacityProgress }}>
                <div className="flex items-center justify-center mt-[5vh]">
                    <h1 className="text-3xl font-sans leading-relaxed">ICE CREAMS</h1>
                </div>
                <Dish fullPrice={"Large 10"} halfPrice={"Small 6"} title="Ice Cream" image={iceCream} category="Drink" width={200} height={200} className="h-[200px] object-contain" />
                <Dish fullPrice={15} title="Falooda Special" image={falooda} category="Drink" width={200} height={200} className="h-[200px] object-contain" />
            </motion.div >
        </div>
        :
        <div ref={ref} id="ice cream">
            <motion.div ref={targetRef} id="ice cream" className="grid grid-cols-3 container items-center mt-[100px] justify-center self-center max-sm:flex max-sm:flex-col max-sm:space-y-2"
                style={{ scale: scaleProgress, opacity: opacityProgress }}>
                <Dish fullPrice={"Large 10"} halfPrice={"Small 6"} title="Ice Cream" image={iceCream} category="Drink" width={200} height={200} className="h-[200px] object-contain" />
                <Dish fullPrice={15} title="Falooda Special" image={falooda} category="Drink" width={200} height={200} className="h-[200px] object-contain" />
            </motion.div>
        </div>
}
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Dish from "../ui/Dish";
import biryani from "@/public/images/dishes/biryaniCanva.svg";
import rice from "@/public/images/dishes/Rice.png"
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
import chickenRice from "@/public/images/dishes/chicken rice.png";
import chickenRiceFaham from "@/public/images/dishes/chicken rice faham.png";
import chapliKabab from "@/public/images/dishes/chapli.png";


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
            <div id="special food" className="mt-[100px] justify-center self-center max-sm:flex max-sm:flex-col max-sm:space-y-2 max-sm:justify-center max-sm:items-center">
                <Dish fullPrice={20} halfPrice={10} title="Biryani" image={biryani} category="Special Food" />
                <Dish fullPrice={38} halfPrice={19} title="Rice" image={rice} category="Special Food" />
                <Dish fullPrice={50} halfPrice={25} title="Meat Rice" image={meatRice} category="Special Food" width={200} height={200} />
                <Dish fullPrice={12} halfPrice={7} title="Potato Meat" image={potatoMeat} category="Special Food" width={200} height={200} />
                <Dish fullPrice={12} halfPrice={7} title="Chkicken Curry" image={chickenCurry} category="Special Food" width={200} height={200} className="h-[200px]" />
                <Dish fullPrice={5} halfPrice={10} title="Daal Channa" image={daalChanna} category="Special Food" width={200} height={200} className="h-[200px]" />
            </div >
        </div>
        :
        <div ref={ref}>
            <motion.div ref={targetRef} id="special food" className="grid grid-cols-3 container items-center mt-[100px] justify-center self-center max-sm:flex max-sm:flex-col max-sm:space-y-2"
                style={{ scale: scaleProgress, opacity: opacityProgress }}>
                <Dish fullPrice={20} halfPrice={10} title="Biryani" image={biryani} category="Special Food" />
                <Dish fullPrice={38} halfPrice={19} title="Rice" image={rice} category="Special Food" />
                <Dish fullPrice={50} halfPrice={25} title="Meat Rice" image={meatRice} category="Special Food" width={200} height={200} />
                <Dish fullPrice={12} halfPrice={7} title="Potato Meat" image={potatoMeat} category="Special Food" width={200} height={200} className="h-[200px] object-contain" />
                <Dish fullPrice={12} halfPrice={7} title="Chkicken Curry" image={chickenCurry} category="Special Food" width={200} height={200} className="h-[200px]" />
                <Dish fullPrice={5} halfPrice={10} title="Daal Channa" image={daalChanna} category="Special Food" width={200} height={200} />
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
            <div id="food menu" className="mt-[100px] justify-center self-center max-sm:flex max-sm:flex-col max-sm:space-y-2 max-sm:justify-center max-sm:items-center">
                <Dish fullPrice={100} halfPrice={50} title="Mutton Karahi" image={biryani} category="Food Menu" />
                <Dish fullPrice={60} halfPrice={30} title="Chicken Karahi" image={chickenKarahi} category="Food Menu" />
                <Dish fullPrice={48} halfPrice={24} title="Chapli Kabab" image={meatRice} category="Food Menu" width={200} height={200} />
                <Dish fullPrice={70} halfPrice={35} title="Chicken Handi" image={potatoMeat} category="Food Menu" width={200} height={200} />
                <Dish fullPrice={55} halfPrice={35} title="Fish" image={fish} category="Food Menu" width={200} height={200} />
                <Dish fullPrice={10} halfPrice={5} title="Daal Mash" image={daalChanna} category="Food Menu" width={200} height={200} />
                <Dish fullPrice={15} halfPrice={8} title="Haleem" image={Haleem} category="Food Menu" width={200} height={200} />
                <Dish fullPrice={15} halfPrice={8} title="Nihari" image={Nihari} category="Food Menu" width={200} height={200} />
                <Dish fullPrice={10} halfPrice={5} title="Soup" image={Soup} category="Food Menu" width={200} height={200} />
                <Dish fullPrice={15} halfPrice={15} title="Charsad Waali Rice" image={daalChanna} category="Food Menu" width={200} height={200} />
                <Dish fullPrice={40} halfPrice={20} title="Chicken Rice Faham" image={chickenRiceFaham} category="Food Menu" width={200} height={200} />
                <Dish fullPrice={38} halfPrice={19} title="Chicken Rice" image={chickenRice} category="Food Menu" width={200} height={200} />
            </div >
        </div>
        :
        <div ref={ref}>
            <motion.div ref={targetRef} id="food menu" className="grid grid-cols-3 container items-center mt-[100px] justify-center self-center max-sm:flex max-sm:flex-col max-sm:space-y-2"
                style={{ scale: scaleProgress, opacity: opacityProgress }}>
                <Dish fullPrice={100} halfPrice={50} title="Mutton Karahi" image={muttonKarahi} category="Food Menu" className="h-[200px] object-contain" />
                <Dish fullPrice={60} halfPrice={30} title="Chicken Karahi" image={chickenKarahi} category="Food Menu" className="h-[200px] object-contain" />
                <Dish fullPrice={48} halfPrice={24} title="Chapli Kabab" image={chapliKabab} category="Food Menu" width={200} height={200} className="h-[200px] object-contain" />
                <Dish fullPrice={70} halfPrice={35} title="Chicken Handi" image={potatoMeat} category="Food Menu" width={200} height={200} className="h-[200px] object-contain" />
                <Dish fullPrice={55} halfPrice={35} title="Fish" image={fish} category="Food Menu" width={200} height={200} className="h-[200px] object-contain" />
                <Dish fullPrice={10} halfPrice={5} title="Daal Mash" image={daalChanna} category="Food Menu" width={200} height={200} className="h-[200px] object-contain" />
                <Dish fullPrice={15} halfPrice={8} title="Haleem" image={Haleem} category="Food Menu" width={200} height={200} className="h-[200px] object-contain" />
                <Dish fullPrice={15} halfPrice={8} title="Nihari" image={Nihari} category="Food Menu" width={200} height={200} className="h-[200px] object-contain" />
                <Dish fullPrice={10} halfPrice={5} title="Soup" image={Soup} category="Food Menu" width={200} height={200} className="h-[200px] object-contain" />
                <Dish fullPrice={15} halfPrice={15} title="Charsad Waali Rice" image={daalChanna} category="Food Menu" width={200} height={200} className="h-[200px] object-contain" />
                <Dish fullPrice={40} halfPrice={20} title="Chicken Rice Faham" image={chickenRiceFaham} category="Food Menu" width={200} height={200} className="h-[200px] object-contain" />
                <Dish fullPrice={38} halfPrice={19} title="Chicken Rice" image={chickenRice} category="Food Menu" width={200} height={200} className="h-[200px] object-contain" />
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
            <div id="dum pukht" className="mt-[100px] justify-center self-center max-sm:flex max-sm:flex-col max-sm:space-y-2 max-sm:justify-center max-sm:items-center">
                <Dish fullPrice={600} halfPrice={600} title="Half Dum Puhkt" image={dumPukht} category="Dum Pukht" className="h-[200px]" />
                <Dish fullPrice={1150} halfPrice={1150} title="Full Dum Puhkt" image={dumPukht} category="Dum Pukht" className="h-[200px]" />
            </div >
        </div>
        :
        <div ref={ref}>
            <motion.div ref={targetRef} id="dum pukht" className="grid grid-cols-3 container items-center mt-[100px] justify-center self-center max-sm:flex max-sm:flex-col max-sm:space-y-2"
                style={{ scale: scaleProgress, opacity: opacityProgress }}>
                <Dish fullPrice={600} halfPrice={600} title="Half Dum Puhkt" image={dumPukht} category="Dum Pukht" className="h-[200px] object-contain" />
                <Dish fullPrice={1150} halfPrice={1150} title="Full Dum Puhkt" image={dumPukht} category="Dum Pukht" className="h-[200px] object-contain" />
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
            <div id="bbq" className="mt-[100px] justify-center self-center max-sm:flex max-sm:flex-col max-sm:space-y-2 max-sm:justify-center max-sm:items-center">
                <Dish fullPrice={"15 Per Piece"} title="Seekh Tikka" image={seekhTikka} category="BBQ" className="h-[200px] object-contain" />
                <Dish fullPrice={"15 Per Piece"} title="Chicken Boti" image={chickenBoti} category="BBQ" className="h-[200px] object-contain" />
                <Dish fullPrice={"15 Per Piece"} title="Meat Chanp" image={meatChanp} category="BBQ" width={200} height={200} />
            </div >
        </div>
        :
        <div ref={ref}>
            <motion.div ref={targetRef} id="bbq" className="grid grid-cols-3 container items-center mt-[100px] justify-center self-center max-sm:flex max-sm:flex-col max-sm:space-y-2"
                style={{ scale: scaleProgress, opacity: opacityProgress }}>
                <Dish fullPrice={"15 Per Piece"} title="Seekh Tikka" image={seekhTikka} category="BBQ" className="h-[200px] object-contain" />
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
            <div id="drink" className="mt-[100px] justify-center self-center max-sm:flex max-sm:flex-col max-sm:space-y-2 max-sm:justify-center max-sm:items-center">
                <Dish fullPrice={"Large 9"} midPrice={"Small 2.5"} halfPrice={"Medium 5"} title="Mirinda" image={mirinda} width={200} height={200} category="Drink" className="h-[200px] object-contain" />
                <Dish fullPrice={"Large 9"} midPrice={"Small 2.5"} halfPrice={"Medium 5"} title="Pepsi" image={pepsi} category="Drink" width={200} height={200} className="h-[200px] object-contain" />
                <Dish fullPrice={"Large 9"} midPrice={"Small 2.5"} halfPrice={"Medium 5"} title="7 up" image={sevenUp} category="Drink" width={200} height={200} className="h-[200px] object-contain" />
                <Dish fullPrice={"Large 10"} halfPrice={"Small 5"} title="Ice Cream" image={iceCream} category="Drink" width={200} height={200} className="h-[200px] object-contain" />
                <Dish fullPrice={15} title="Falooda Special" image={falooda} category="Drink" width={200} height={200} className="h-[200px] object-contain" />
                <Dish fullPrice={7} title="Lassi" image={lassi} category="Drink" width={200} height={200} className="h-[200px] object-contain" />
            </div >
        </div>
        :
        <div ref={ref}>
            <motion.div ref={targetRef} id="drink" className="grid grid-cols-3 container items-center mt-[100px] justify-center self-center max-sm:flex max-sm:flex-col max-sm:space-y-2"
                style={{ scale: scaleProgress, opacity: opacityProgress }}>
                <Dish fullPrice={"Large 9"} midPrice={"Small 2.5"} halfPrice={"Medium 5"} title="Mirinda" image={mirinda} width={200} height={200} category="Drink" className="h-[200px] object-contain" />
                <Dish fullPrice={"Large 9"} midPrice={"Small 2.5"} halfPrice={"Medium 5"} title="Pepsi" image={pepsi} category="Drink" width={200} height={200} className="h-[200px] object-contain" />
                <Dish fullPrice={"Large 9"} midPrice={"Small 2.5"} halfPrice={"Medium 5"} title="7 up" image={sevenUp} category="Drink" width={200} height={200} className="h-[200px] object-contain" />
                <Dish fullPrice={"Large 10"} halfPrice={"Small 5"} title="Ice Cream" image={iceCream} category="Drink" width={200} height={200} className="h-[200px] object-contain" />
                <Dish fullPrice={15} title="Falooda Special" image={falooda} category="Drink" width={200} height={200} className="h-[200px] object-contain" />
                <Dish fullPrice={7} title="Lassi" image={lassi} category="Drink" width={200} height={200} className="h-[200px] object-contain" />
            </motion.div>
        </div>
}
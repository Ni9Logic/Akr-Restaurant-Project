"use client"
import {useEffect, useState} from "react";
import NavBar from './components/Navbar'
import ReactLoading from 'react-loading';
import Footer from "./components/Footer";
import Menu from "./components/Sections/Menu";
import OrderOnline from "./components/Sections/OnlineOrder";
import Hero from "./components/Sections/Hero";
import Testimonials from "./components/Sections/Locations";

export default function Home() {

    const [webPageLoading, setWebPageLoading] = useState(true);

    // Web page loading
    useEffect(() => {
        const timer = setTimeout(() => {
            setWebPageLoading(false);
        }, 3000); // simulate network request time
        return () => clearTimeout(timer);
    }, []);

    return webPageLoading ? (
        <div className="flex h-screen justify-center items-center space-x-4">
            <ReactLoading type={"bubbles"} color={"#F8B61E"}/>
        </div>
    ) : (
        <main className='bg-[#f4f5ef] overflow-x-hidden'>
            {/* NavBar */}
            <NavBar/>
            {/* Sections */}
            <Hero/>
            <OrderOnline/>
            <Menu/>
            <Testimonials />
            {/* Footer */}
            <Footer/>
        </main>
    )
};

"use client"
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import Menu from "../components/Sections/Menu";
import logo from "@/public/images/logos/logo8.svg";
import menuLogo from "@/public/images/assets/MenuLogo.png";
import Image from "next/image";

const Page = () => {
    return (
        <div className="overflow-hidden">
            <NavBar />
        <div className="hidden max-sm:visible absolute mt-[30vh] max-sm:flex items-center justify-center flex-col space-y-2">
                <h1 className="flex items-center justify-center text-3xl font-serif ">
                    <Image src={menuLogo} alt="MenuLogo" className="w-full"/>
                </h1>
                <h1 className="flex items-center justify-center text-3xl font-serif">AKR RESTAURANT</h1>
                <Image src={logo} alt="logo" width={150} height={300} className="object-contain"/>
            </div>
            <Menu />
            <Footer />
        </div>
    );
}

export default Page;
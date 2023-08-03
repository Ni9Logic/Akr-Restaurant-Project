'use client'
import Image from "next/image";
import logo from "@/public/images/logo4.svg";
import { useState } from "react";
export default function NavBar() {
    const [isMenu, setMenu] = useState(true);
    const toggleMenu = () => {
        isMenu ? setMenu(false) : setMenu(true);
    };
    return (

        <nav className="sticky top-0 z-50 opacity-100 bg-white/30 backdrop-blur-sm mx-auto my-auto">
            <div className="items-center justify-between flex flex-row">
                <div className="mx-auto container flex flex-row justify-between text-center items-center">
                    <a href="http://localhost:3000/">
                        <Image src={logo} alt="logo" width={300} className="py-2 px-3" />
                    </a>
                    <div className="text-base justify-center font-bold cursor-pointer max-[1026px]:hidden">
                        <a className="mr-5 hover:bg-black hover:text-[#d72300] py-3 px-3 transition-all ease-in font-serif border-black border-[2px]">Menus</a>
                        <a className="mr-5 hover:bg-black hover:text-[#ffd700] py-3 px-3 transition-all ease-in font-serif border-black border-[2px]">About Us</a>
                        <a className="mr-5 hover:bg-black hover:text-[#ffd700] py-3 px-3 transition-all ease-in font-serif border-black border-[2px]">Contact Us</a>
                        <a className="mr-5 hover:bg-black hover:text-[#ffd700] py-3 px-3 transition-all ease-in font-serif border-black border-[2px]">Order Online</a>
                    </div>
                    <div className="min-[1026px]:hidden transition-all ease-in-out cursor-pointer scale-50">
                        <a id="menuTrigger" onClick={toggleMenu}>

                            {isMenu ?
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                                    <path d="M 3 9 A 1.0001 1.0001 0 1 0 3 11 L 47 11 A 1.0001 1.0001 0 1 0 47 9 L 3 9 z M 3 24 A 1.0001 1.0001 0 1 0 3 26 L 47 26 A 1.0001 1.0001 0 1 0 47 24 L 3 24 z M 3 39 A 1.0001 1.0001 0 1 0 3 41 L 47 41 A 1.0001 1.0001 0 1 0 47 39 L 3 39 z"></path>
                                </svg>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                                    <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
                                </svg>
                            }

                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}
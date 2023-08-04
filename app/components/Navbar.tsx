'use client'
import Image from "next/image";
import logo from "@/public/images/logo7.png";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CloseIcon from "@mui/icons-material/Close";

export default function NavBar() {
    const router = useRouter();
    const [isLoading, setLoading] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);

    // To check for scrolling
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const onScroll = () => {
            const scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
            if (scrollPos > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);


    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    function onOrderOnline() {
        setLoading(true);
        router.push('/OrderOnline');
    }

    const MenuModal = ({ isOpen, onClose }: any) => (
        <div
            className={`fixed top-0 h-screen w-full opacity-100 bg-black/40 backdrop-blur-sm z-50 transition-all ease-in ${isOpen ? "transition-all ease-in transform translate-y-0" : "transform -translate-y-full"}`}
        >
            <div className="flex w-full ml-auto items-end justify-end self-end">
                <button onClick={onClose} className="relative px-2 py-1 font-medium group flex items-center justify-center mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 50 50" className="fill-black">
                        <path d="M 14.40625 13 L 13 14.40625 L 23.625 25 L 13 35.59375 L 14.40625 37 L 25.0625 26.40625 L 35.6875 37 L 37.09375 35.59375 L 26.46875 25 L 37.09375 14.40625 L 35.6875 13 L 25.0625 23.59375 Z"></path>
                    </svg>
                </button>
            </div>
            <div className="flex flex-col justify-center items-center h-full text-white space-y-4">
                {/* Add the menu items here */}
                <button className="relative inline-block px-4 py-2 font-medium group w-[200px]">
                    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                    <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                    <span className="relative text-black group-hover:text-white">Home</span>
                </button>
                <button className="relative inline-block px-4 py-2 font-medium group w-[200px]">
                    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                    <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                    <span className="relative text-black group-hover:text-white">Menu</span>
                </button>
                <button className="relative inline-block px-4 py-2 font-medium group w-[200px]">
                    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                    <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                    <span className="relative text-black group-hover:text-white">About Us</span>
                </button>
                <button className="relative inline-block px-4 py-2 font-medium group w-[200px]">
                    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                    <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                    <span className="relative text-black group-hover:text-white">Contact Us</span>
                </button>
                <button onClick={() => onOrderOnline()} className="relative px-4 py-2 font-medium group w-[200px] flex flex-row items-center text-center justify-center gap-2">
                    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                    <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                    <span className="relative text-black group-hover:text-white">Order Online</span>
                    {isLoading &&
                        <svg aria-hidden="true" className="h-5 w-5 text-gray-200 animate-spin dark:text-gray-600 fill-black" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                    }
                </button>
            </div>
        </div>
    );

    return (
        <>
            <nav className={`sticky top-0 z-50 opacity-100 backdrop-blur-sm mx-auto my-auto ${isScrolled && 'border-b-2 border-black/10 border-opacity-40'}`}>
                <div className="items-center justify-between">
                    <div className="mx-auto flex flex-row justify-between text-center items-center">
                        <a href="#">
                            <Image src={logo} alt="logo" className="max-sm:w-120px max-[500px]:scale-75 max-sm:py-0 max-sm:px-0 max-sm:ml-[-120px] h-[100px] object-contain ml-[-200px]" />
                        </a>
                        <div className="flex flex-row mr-2 text-base justify-center font-bold cursor-pointer max-[1357px]:hidden gap-2 transition-all ease-in-out">
                            <button className="relative inline-block px-4 py-2 font-medium group w-[157px]">
                                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                                <span className="relative text-black group-hover:text-white">Home</span>
                            </button>
                            <button className="relative inline-block px-4 py-2 font-medium group w-[157px]">
                                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                                <span className="relative text-black group-hover:text-white">Menu</span>
                            </button>
                            <button className="relative inline-block px-4 py-2 font-medium group w-[157px]">
                                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                                <span className="relative text-black group-hover:text-white">About Us</span>
                            </button>
                            <button className="relative inline-block px-4 py-2 font-medium group w-[157px]">
                                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                                <span className="relative text-black group-hover:text-white">Contact Us</span>
                            </button>
                            <button onClick={() => onOrderOnline()} className={`relative px-4 py-2 font-medium group w-[157px] flex flex-row gap-2 items-center justify-center`}>
                                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                <span className={`absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black ${isLoading && 'bg-black text-white'}`}></span>
                                <span className={`relative text-black group-hover:text-white`}>Order Online</span>
                                {isLoading &&
                                    <svg aria-hidden="true" className="h-5 w-5 text-gray-200 animate-spin dark:text-gray-600 fill-black" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                    </svg>
                                }
                            </button>
                        </div>
                        <div className="min-[1357px]:hidden transition-all ease-in-out cursor-pointer max-sm:mr-2">
                            <a id="menuTrigger" onClick={toggleMenu}>
                                {
                                    isMenuOpen ?
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 50 50" className="fill-black">
                                            <path d="M 14.40625 13 L 13 14.40625 L 23.625 25 L 13 35.59375 L 14.40625 37 L 25.0625 26.40625 L 35.6875 37 L 37.09375 35.59375 L 26.46875 25 L 37.09375 14.40625 L 35.6875 13 L 25.0625 23.59375 Z"></path>
                                        </svg>
                                        :
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="70" viewBox="0 0 50 50">
                                            <path d="M 3 9 A 1.0001 1.0001 0 1 0 3 11 L 47 11 A 1.0001 1.0001 0 1 0 47 9 L 3 9 z M 3 24 A 1.0001 1.0001 0 1 0 3 26 L 47 26 A 1.0001 1.0001 0 1 0 47 24 L 3 24 z M 3 39 A 1.0001 1.0001 0 1 0 3 41 L 47 41 A 1.0001 1.0001 0 1 0 47 39 L 3 39 z"></path>
                                        </svg>
                                }

                            </a>
                        </div>
                    </div>
                </div>
            </nav >
            <MenuModal isOpen={isMenuOpen} onClose={closeMenu} />
        </>
    )
}
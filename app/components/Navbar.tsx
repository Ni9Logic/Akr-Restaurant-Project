'use client'
import Image from "next/image";
import logo from "@/public/images/logo7.png";
import { useState } from "react";
import { useRouter } from "next/navigation";

type CurrentPage = "Home" | "Menus" | "About" | "Contact Us" | "Order Online"
export default function NavBar() {
    const router = useRouter();
    const [isMenu, setMenu] = useState(true);
    const [isLoading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState<CurrentPage>('Home');

    const toggleMenu = () => {
        isMenu ? setMenu(false) : setMenu(true);
    };

    function onOrderOnline() {
        console.log(currentPage);
        if (currentPage === 'Order Online') return;
        setLoading(true);
        setCurrentPage('Order Online');
        router.push('/OrderOnline');
    }
    return (

        <nav className="sticky top-0 z-50 opacity-100 backdrop-blur-sm mx-auto my-auto">
            <div className="items-center justify-between">
                <div className="mx-auto flex flex-row justify-between text-center items-center">
                    <a href="http://localhost:3000/">
                        <Image src={logo} alt="logo" className="max-sm:w-120 max-[500px]:scale-75 max-sm:py-0 max-sm:px-0 max-sm:ml-[-120px] h-[100px] object-contain ml-[-200px]" />
                    </a>
                    <div className="flex flex-row mr-2 text-base justify-center font-bold cursor-pointer max-[1026px]:hidden">
                        <a className="mr-5 hover:bg-black hover:text-white py-3 px-3 transition-all ease-in font-serif border-black border-[2px]">Home</a>
                        <a className="mr-5 hover:bg-black hover:text-white py-3 px-3 transition-all ease-in font-serif border-black border-[2px]">Menus</a>
                        <a className="mr-5 hover:bg-black hover:text-white py-3 px-3 transition-all ease-in font-serif border-black border-[2px]">About Us</a>
                        <a onClick={onOrderOnline} className="mr-5 hover:bg-black hover:text-white py-3 px-3 transition-all ease-in font-serif border-black border-[2px]">
                            Contact Us
                        </a>
                        <button disabled={isLoading} onClick={() => onOrderOnline()} className={`hover:bg-black hover:text-white py-3 px-3 transition-all ease-in font-serif border-black border-[2px] flex flex-row gap-2 items-center ${isLoading && 'bg-black text-white cursor-default'}`}>
                            Order Online
                            {isLoading &&
                                <svg aria-hidden="true" className="h-5 w-5 text-gray-200 animate-spin dark:text-gray-600 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                </svg>
                            }
                        </button>
                    </div>
                    <div className="min-[1026px]:hidden transition-all ease-in-out cursor-pointer max-sm:mr-2">
                        <a id="menuTrigger" onClick={toggleMenu}>

                            {isMenu ?
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="70" viewBox="0 0 50 50">
                                    <path d="M 3 9 A 1.0001 1.0001 0 1 0 3 11 L 47 11 A 1.0001 1.0001 0 1 0 47 9 L 3 9 z M 3 24 A 1.0001 1.0001 0 1 0 3 26 L 47 26 A 1.0001 1.0001 0 1 0 47 24 L 3 24 z M 3 39 A 1.0001 1.0001 0 1 0 3 41 L 47 41 A 1.0001 1.0001 0 1 0 47 39 L 3 39 z"></path>
                                </svg>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="70" viewBox="0 0 50 50">
                                    <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
                                </svg>
                            }

                        </a>
                    </div>
                </div>
            </div>
        </nav >
    )
}
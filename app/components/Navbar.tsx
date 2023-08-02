'use client'
import Image from "next/image";
import logo from "@/public/images/logo.svg";
export default function NavBar() {
    return (

        <nav className="bg-[#ffd700]">
            <div className="items-center justify-between flex flex-row">
                <div className="mx-auto container flex flex-row justify-between text-center items-center">
                    <a href="http://localhost:3000/">
                        <Image src={logo} alt="logo" width={300} className="py-2 px-3" />
                    </a>
                    <div className="text-base justify-center font-bold cursor-pointer max-[800px]:hidden">
                        <a className="mr-5 hover:bg-black hover:text-[#ffd700] py-3 px-3 transition-all ease-in font-serif border-black border-[2px]">Menus</a>
                        <a className="mr-5 hover:bg-black hover:text-[#ffd700] py-3 px-3 transition-all ease-in font-serif border-black border-[2px]">About Us</a>
                        <a className="mr-5 hover:bg-black hover:text-[#ffd700] py-3 px-3 transition-all ease-in font-serif border-black border-[2px]">Contact Us</a>
                    </div>
                    <div className="min-[800px]:hidden transition-all ease-in-out">
                        <a id="menuTrigger" onClick={() => console.log('Hello World')}>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="64" height="64" viewBox="0 0 256 256">
                                <path fill="#ffa91a" d="M200.578,81.242H55.422c-8.284,0-15-6.716-15-15s6.716-15,15-15h145.156c8.284,0,15,6.716,15,15 S208.862,81.242,200.578,81.242z"></path><path fill="#ffc91d" d="M46.42,68.24c-1.1,0-2-0.89-2-2c0-1.1,0.9-2,2-2s1.99,0.89,2,1.99v0.01C48.42,67.35,47.52,68.24,46.42,68.24z M49.75,61.26c-0.6,0-1.17-0.27-1.55-0.74c-0.7-0.86-0.57-2.12,0.29-2.81c1.95-1.59,4.41-2.47,6.93-2.47h134.84c1.11,0,2,0.9,2,2 c0,1.11-0.89,2-2,2H55.42c-1.62,0-3.15,0.54-4.41,1.57C50.66,61.1,50.21,61.26,49.75,61.26z"></path><path fill="#f79219" d="M204.935,51.885c0.418,1.379,0.643,2.842,0.643,4.357c0,8.284-6.716,15-15,15H45.422 c-1.515,0-2.978-0.225-4.357-0.643c1.867,6.159,7.588,10.643,14.357,10.643h145.156c8.284,0,15-6.716,15-15 C215.578,59.473,211.094,53.751,204.935,51.885z"></path><path fill="#ffa91a" d="M200.578,143H55.422c-8.284,0-15-6.716-15-15s6.716-15,15-15h145.156c8.284,0,15,6.716,15,15 S208.862,143,200.578,143z"></path><path fill="#f79219" d="M204.935,113.643c0.418,1.379,0.643,2.842,0.643,4.357c0,8.284-6.716,15-15,15H45.422 c-1.515,0-2.978-0.225-4.357-0.643C42.932,138.516,48.653,143,55.422,143h145.156c8.284,0,15-6.716,15-15 C215.578,121.231,211.094,115.51,204.935,113.643z"></path><path fill="#ffa91a" d="M200.578,204.758H55.422c-8.284,0-15-6.716-15-15s6.716-15,15-15h145.156c8.284,0,15,6.716,15,15 S208.862,204.758,200.578,204.758z"></path><path fill="#f79219" d="M204.935,175.401c0.418,1.379,0.643,2.842,0.643,4.357c0,8.284-6.716,15-15,15H45.422 c-1.515,0-2.978-0.225-4.357-0.643c1.867,6.159,7.588,10.643,14.357,10.643h145.156c8.284,0,15-6.716,15-15 C215.578,182.99,211.094,177.268,204.935,175.401z"></path><path fill="#ef7816" d="M208.387,176.949c1.39,2.275,2.191,4.948,2.191,7.809c0,8.284-6.716,15-15,15H50.422 c-2.861,0-5.534-0.801-7.809-2.191c2.635,4.312,7.386,7.191,12.809,7.191h145.156c8.284,0,15-6.716,15-15 C215.578,184.335,212.699,179.584,208.387,176.949z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}
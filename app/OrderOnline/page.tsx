'use client'
import Image from "next/image";
import NavBar from "../components/Navbar";
import Jahez from "@/public/images/assets/jahez.svg";
import HungerStation from "@/public/images/assets/Hunger-Station.svg";
import Footer from "../components/Footer";
import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter();
    return (
        <main className="bg-[#f4f5ef]">
            <NavBar />
            <div className="h-[79vh] max-sm:h-screen flex items-center justify-center">
                <div className="text-gray-600 body-font">
                    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center max-sm:mt-[200px] max-md:mt-[200px]">
                            <h1 className="title-font sm:text-4xl text-3xl mb-4 text-black font-bold font-mono">
                                AVAILABLE SOON ON <span className="border-black border-b-[2px]">JAHEZ</span> AND <span className="border-black border-b-[2px]">HUNGRY</span> <span className="border-black border-b-[2px]">STATION</span>
                            </h1>
                            <div className="flex justify-center gap-2">
                                <button
                                    onClick={() => router.push('https://www.jahez.net/index-en.html')}
                                    className="inline-flex text-white border-0 py-2 px-6 focus:outline-none rounded text-lg w-48" control-id="ControlID-78">
                                    <Image src={Jahez} alt="Jahez Button" height={48} className="self-center flex container" />
                                </button>
                                <button
                                    onClick={() => router.push('https://hungerstation.com/sa-ar')}
                                    className="inline-flex text-white border-0 focus:outline-none rounded text-lg w-48" control-id="ControlID-78">
                                    <Image src={HungerStation} alt="Hunger Station Button" width={120} className="flex container mt-[-34px] mb-[-50px]" />
                                </button>
                            </div>
                        </div>
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                            <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
                                <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                                <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                                <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                                <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                                <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2344.0399941717274!2d46.696807439655714!3d24.630641701291452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f05ae11a053a1%3A0xc01a6725799619bd!2sAKR%20restaurant!5e0!3m2!1sen!2s!4v1691109003652!5m2!1sen!2s" width="600" height="1000" loading="lazy" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-sm:hidden">
                <Footer />
            </div>
        </main>
    );
}
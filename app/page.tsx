"use client"
import Image from 'next/image';
import NavBar from './components/Navbar'
import main from "@/public/images/main9.png";


export default function Home() {

  return (
    <main className='bg-[#f4f5ef]'>
      <NavBar />
      <div className='h-[89vh] flex items-center justify-center'>
        <div className='flex max-sm:bject-fit h-[89vh] overflow-hidden'>
          <Image src={main} alt='main' width={1300} height={1300} className='max-sm:transform max-sm:scale-110 max-sm:w-full bg-center bg-no-repeat bg-cover'/>
        </div>

        <div className='h-screen'>

        </div>
      </div>
    </main>
  )
};
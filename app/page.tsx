"use client"
import Image from 'next/image';
import NavBar from './components/Navbar'
import main from "@/public/images/main9.png";


export default function Home() {

  return (
    <main className='bg-[#f4f5ef]'>
      <NavBar />
      <div className='min-h-[89.3vh]'>
      <div className='flex max-sm:bject-fit h-[89.3vh] max-sm:overflow-hidden'>
        <Image src={main} alt='main' width={1300} height={1000} className='max-sm:transform max-sm:scale-70 max-sm:w-full max-sm:object-cover'/>
      </div>

      <div className='h-screen'>

      </div>
      </div>
    </main>
  )
};
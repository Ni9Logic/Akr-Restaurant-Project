"use client"
import Image from 'next/image';
import NavBar from './components/Navbar'
import main from "@/public/images/main9.png";


export default function Home() {

  return (
    <main className='bg-[#f4f5ef]'>
      <NavBar />
      <div className='h-[89vh] flex items-center justify-center overflow-hidden'>
        <div className='flex max-sm:bject-fit h-[89vh] overflow-hidden items-center'>
          <Image src={main} alt='main' width={1300} height={1300} className='max-sm:transform h-[89.3vh] object-cover max-sm:w-full'/>
        </div>
      </div>
      <div className='h-screen'>
        
      </div>
    </main>
  )
};
"use client"
import Image from 'next/image';
import NavBar from './components/Navbar'
import main from "@/public/images/main9.png";


export default function Home() {

  return (
    <main className='bg-[#f4f5ef]'>
      <NavBar />
      <div className='min-h-[89.3vh] flex flex-col items-center justify-center'>
      <div className='container flex flex-col items-center justify-center self-center'>
        <Image src={main} alt='main' width={1300} height={1000}/>
      </div>

      <div className='h-screen'>

      </div>
      </div>
    </main>
  )
};
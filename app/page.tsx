"use client"
import Image from 'next/image';
import NavBar from './components/Navbar'
import main from "@/public/images/main.png";


export default function Home() {

  return (
    <main>
      <NavBar />
      <div className='min-h-[89.3vh]'>
      <div className='flex flex-col items-center justify-center'>
        <Image src={main} alt='main' width={1200} height={1200} />
      </div>
      </div>
    </main>
  )
};
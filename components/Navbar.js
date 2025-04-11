import React from 'react'
import Link from "next/link"
const Navbar = () => {
  return (
    <div>
      <nav className='w-full max-h-max'>
        <ul className='h-20 flex justify-around items-center outline-1 outline-slate-600'>
            <Link href="/"className='font-extrabold text-3xl hover:bg-slate-900 cursor-pointer p-3 rounded-full'><li className='text-yellow-400'>Url Shortener</li></Link>
            <li className='flex max-[405px]:block max-[330px]:text-[10px] '>Made By - <div>Aadim Gyawali</div></li>
            <li className='max-[1000px]:hidden'>Tech Stack : Next JS, MongoDB, React JS, Tailwind CSS</li>
            <Link href="/shorten"className='h-10 bg-yellow-400 hover:bg-yellow-600 font-extrabold text-2xl hover:bg-slate-900 cursor-pointer p-1 px-5 rounded-full max-[550px]:hidden'><li className='text-black'>Try Now</li></Link>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar

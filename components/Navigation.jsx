import React from 'react'
import Image from 'next/image'
import WRKR from '../public/WRKR.svg'
const Navigation = () => {
  return (
    <div className='bg-black'>
        <nav className='max-w-[1440px] mx-auto flex items-center text-white justify-between px-20 py-8'>
            <div>
            <Image  src={WRKR} alt='/'/>

            </div>
            <div className='space-x-4  justify-between '>
                <a href='/'>Products</a>
                <a href='/'>Usecases</a>
                <a href='/'>Developers</a>
                <a href='/'>Company</a>
            </div>
            <div>
                <button className='border-[1px] rounded-md px-[75px] py-[15px] font-medium text-[#BFDCFF] border-[#BFDCFF]'>
                    Schedule Demo
                </button>
            </div>
        </nav>
    </div>
  )
}

export default Navigation
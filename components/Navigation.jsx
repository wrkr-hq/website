import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import WRKR from '../public/WRKR.svg'
const Navigation = () => {
  return (
    <div className='bg-black w-full'>
        <nav className='max-w-[1440px] mx-auto w-full flex items-center text-white justify-between px-20 py-8'>
            <div>
                <Image  src={WRKR} alt='/'/>
            </div>
            <div className='hidden lg:block lg:space-x-4 lg:justify-between '>
                <Link href='/'>
                    Products
                </Link>
                <Link href='/'>
                    Usecases
                </Link>
                <Link href='/'>
                    Developers
                </Link>
                <Link href='/'>
                    Company
                </Link>
            </div>
            <div>
                <button className='border-[1px] rounded-md lg:px-[75px] lg:py-[15px] font-medium text-[#BFDCFF] border-[#BFDCFF]'>
                    Schedule Demo
                </button>
            </div>
        </nav>
    </div>
  )
}

export default Navigation

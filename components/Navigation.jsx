import React from 'react'
import Image from 'next/image'
import WRKR from '../public/WRKR.svg'
const Navigation = () => {
  return (
    <div>
        <nav className='max-w-[1440px] flex bg-black text-white justify-between px-20 py-8'>
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
                <button className=' border rounded px-8 py-1 text-teal-100 border-teal-100'>
                    Schedule Demo
                </button>
            </div>
        </nav>
    </div>
  )
}

export default Navigation
import React from 'react'
import home from '../public/home.svg'
import overlay from '../public/overlay.svg'
import Image from 'next/image'
const Landing = () => {
  return (
<div className='bg-[#02000B] pt-20 lg:pt-[151px]'>
 {/* <Image src={overlay} alt='/' className='bg-black '  /> */}
<div className='flex flex-col-reverse w-full px-10 lg:flex-row max-w-[1440px] mx-auto justify-between lg:px-20 py-14 text-white'>
        <div>
            <h1 className='text-xl lg:text-4xl font-bold pb-6 lg:pb-14'> 
            The Portable Way of Proving <br />
            Identity and Reputation.
            </h1>
            <p className='text-sm lg:text-base'>
            Empower your customers&apos; to continue with 1-click using authenticated personal <br />
             data they have generated from trusted companies within our Identity network.
            </p>
            <br />
            <p className='text-sm lg:text-base text-[#BFDCFF] mb-14'>
            Realtime, No long forms, document scan or selfies
            </p>
            <button className=' border-[1px] rounded-md px-[75px] py-[15px] font-medium text-black bg-[#BFDCFF]'>
                Get Started
            </button>
        </div>
        <div className='place-content-center'>
          <Image  src={home} alt='/' />
        </div>
    </div>

</div>
  )
}

export default Landing

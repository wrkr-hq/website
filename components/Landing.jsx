import React from 'react'
import home from '../public/home.svg'
import overlay from '../public/overlay.svg'
import Image from 'next/image'
const Landing = () => {
  return (
<div className='bg-black'>
 {/* <Image src={overlay} alt='/' className='bg-black '  /> */}
<div className='flex max-w-[1440px] mx-auto justify-between px-20 py-14 text-white'>
        <div>
            <h1 className='text-4xl font-bold pb-14'> 
            The Portable Way of Proving <br />
            Identity and Reputation.
            </h1>
            <p>
            Empower your customers&apos; to continue with 1-click using authenticated personal <br />
             data they have generated from trusted companies within our Identity network.
            </p>
            <br />
            <p className='text-[#BFDCFF] mb-14'>
            Realtime, No long forms, document scan or selfies
            </p>
            <button className=' border rounded-md px-[75px] py-[15px] font-medium text-black bg-[#BFDCFF]'>
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
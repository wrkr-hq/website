import React from 'react'
import home from '../public/home.svg'
import overlay from '../public/overlay.svg'
import Image from 'next/image'
const Landing = () => {
  return (
<div>
 {/* <Image src={overlay} alt='/' className='bg-black '  /> */}
<div className='flex justify-between px-14 py-14 text-white bg-black flex-wrap'>
        <div>
            <h1 className='text-4xl font-bold pb-14'> 
            The Portable Way of Proving <br />
            Identity and Reputation.
            </h1>
            <p>
            Empower your customers' to continue with 1-click using authenticated personal <br />
             data they have generated from trusted companies within our Identity network.
            </p>
            <br />
            <p className='text-teal-200 mb-14'>
            Realtime, No long forms, document scan or selfies
            </p>
            <button className=' border rounded px-8 py-1 text-black bg-teal-100'>
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
import React from 'react'
import Image from 'next/image'
import group from '../public/group.png'

const DetectFraud = () => {
  return (
    <div id="detect-fraud" className='max-w-[1440px] flex flex-col lg:flex-row justify-between px-10 py-10 lg:px-14 lg:py-20 text-black bg-white mx-auto
     bg-[url("../public/vector2.png")] bg-no-repeat bg-left bg-half max-h-[800px] lg:pb-[241px] scroll-mt-20'>
      <div className='mb-10 lg:mb-0'>
        <Image src={group} alt='/'
          width='500' />
      </div>
      <div className='grid content-center'>
        <h3 className='text-xl lg:text-3xl font-semibold pb-8'>
          Fraud. No longer your problem.
        </h3>
        <p className='text-sm lg:text-base max-w-xl'>
          Eliminates the tradeoffs between security and privacy by connecting account
          registration to account access and account recovery using state-of-the-art
          decentralized turnkey biometric authentication and other phone centric
          Identity attributes.
        </p>
      </div>
    </div>
  )
}

export default DetectFraud

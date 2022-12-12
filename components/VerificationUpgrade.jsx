import React from 'react'
import Image from 'next/image'
import upgradeVerification from '../public/upgradeVerification.svg'

const VerificationUpgrade = () => {
  return (
    <div id="authentication" className='bg-[#FCFBFF] scroll-mt-24'>
      <div className='max-w-[1440px] flex flex-wrap lg:flex-nowrap justify-between px-10 lg:px-20 py-14 text-black
       mx-auto bg-[url("../public/vector2.png")] bg-no-repeat bg-left bg-half max-h-[800px]'>
        <div className='mb-8 lg:mb-0'>
          <Image src={upgradeVerification} alt='/'/>
        </div>
        <div className='grid content-center lg:w-[566px]'>
          <h3 className='text-xl lg:text-3xl font-semibold pb-8'>
          Upgrade your verification process. <br />
          Go Passwordless
          </h3>
          <p className='text-sm lg:text-base'>
          Frictionlessly authenticate your customers from any channel, without relying <br /> 
          on password and OTP, with our simple and secure 1-click authentication <br />
          solution.
          </p>
        </div>
      </div>
    </div>
  )
}

export default VerificationUpgrade

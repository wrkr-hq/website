import React from 'react'
import Image from 'next/image'
import upgradeVerification from '../public/upgradeVerification.svg'

const VerificationUpgrade = () => {
  return (
    <div className='bg-[#FCFBFF]'>
      <div className='max-w-[1440px] flex justify-between px-20 py-14 text-black
      flex-wrap mx-auto bg-[url("../public/vector2.png")] bg-no-repeat bg-left bg-half max-h-[800px]'>
        <div>
          <Image src={upgradeVerification} alt='/'/>
        </div>
        <div className='grid content-center'>
          <h3 className='text-3xl font-semibold pb-8'>
          Upgrade your verification process. <br />
          Go Passwordless
          </h3>
          <p>
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
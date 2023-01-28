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
          Login with a blink and smile <br />
          Go Passwordless
          </h3>
          <p className='text-sm lg:text-base'>
          Instead of requiring your customers to identify themselves repeatedly,gift them the convenience & efficiency of bringing their pre-verified Identity and account to you.
         No need to fill out another signup or login form again.
          </p>
        </div>
      </div>
    </div>
  )
}

export default VerificationUpgrade

import React from 'react'
import landing from '../public/landing.png'
import Image from 'next/image'
const hero = <p className='text-sm lg:text-base lg:min-w-[600px]'>
  Empower your customers&apos; to continue with 1-click using authenticated personal <br />
  data they have generated from trusted companies within our Identity network.
</p>
const Landing = () => {
  return (
    <div className='bg-[#02000B] pt-20 bg-[url("../public/hero_section_rectangles.png")] lg:bg-no-repeat bg-cover bg-bottom'>
      <div className='flex flex-col-reverse w-full px-10 lg:flex-row max-w-[1400px] mx-auto lg:items-center justify-center h-screen lg:px-20 text-white'>
        <div>
          <h1 className='text-xl lg:text-[37px] lg:leading-[57.4px] font-bold pb-6 lg:pb-14'>
          Passwordless MFA with<br />verified identity.
          </h1>
          {hero}
          <br />
         
          <button className=' border-[1px] rounded-md px-[75px] py-[15px] font-medium text-black bg-[#BFDCFF]'>
            Get Started
          </button>
        </div>
        <div className='place-content-center'>
          {<Image src={landing} alt='/' />}
        </div>
      </div>
    </div>
  )
}

export default Landing

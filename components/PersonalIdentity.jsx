import React from 'react'
import Image from 'next/image'
import phone from '../public/phone.svg'
import AppStore from '../public/AppStore.svg'
import GooglePlay from '../public/GooglePlay.svg'
import Link from 'next/link'


const PersonalIdentity = () => {
  return (
    <div className='max-w-[1440px] flex flex-col-reverse lg:flex-row justify-evenly px-10 py-10 lg:px-14 lg:py-20 text-black bg-white mx-auto bg-[url("../public/vector2.png")] bg-no-repeat bg-right bg-half max-h-[800px]'>
     
      <div className='grid content-center self-center'>
        <h3 className='text-xl lg:text-3xl font-semibold pb-8'>
        Personal Identity Verification
        </h3>
        <p className='text-sm lg:text-base'>
        Unlock access to services. Own and control your  <br />
         identity. Lorem ipsum dolor sit amet consectetur. <br />
         Lorem ipsum dolor sit amet consectetur. Ascelem risque <br /> 
         phasellus 
        </p>
        <div>
          <div className='flex space-x-4 mt-24'>
            <Link href="/">
              <Image src={AppStore} alt='App Store' className='w-[150px]'/>
            </Link>
            <Link href="/">
              <Image src={GooglePlay} className='w-[150px]' alt='Google Play' />
            </Link>
          </div>
        </div>
      </div>
      <div>
        <Image src={phone} alt='Personal Identity'
        width='700'/>
      </div>
    </div>
  )
}

export default PersonalIdentity

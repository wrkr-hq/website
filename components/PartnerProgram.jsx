import React from 'react'
import Image from 'next/image'
import accelerate from '../public/accelerate.svg'
import friction from '../public/friction.svg'
import Secure from '../public/Secure.svg'
import Link from 'next/link'


const PartnerProgram = () => {
  return (
    <div className='place-content-center px-10 lg:px-0 bg-white'>
     <div className='text-center'>
         <div className='text-xl lg:text-3xl font-semibold pb-8'>
        Partner Program
        </div>
        <p className='text-sm mb-8 lg:mb-0 lg:text-base'>
        Partner with WRKR to help other businesses modernize the way they engage with customers <br />
         and mitigate fraud. Our solutions enable companies to
        </p>
     </div>
     <div className='flex flex-col lg:flex-row lg:place-content-center lg:p-32 text-center lg:space-x-36 font-semi-bold text-base'>
        <div className='grid place-items-center mb-10 lg:mb-0'>
            <Image src={accelerate} alt='Accelerate' />
            <p className='text-sm lg:text-base'>
            Accelerate revenue and secure digital <br />
             acquisition & onboarding
            </p>
        </div>
        <div className='grid place-items-center mb-10 lg:mb-0'>
            <Image src={Secure} alt='Secure'/>
            <p className='text-sm lg:text-base'>
            Manage identities to secure <br />
             digital servicing
            </p>
        </div>
        <div className='grid place-items-center mb-10 lg:mb-0'>
            <Image src={friction} alt='Reduce friction'/>
            <p className='text-sm lg:text-base'>
            Reduce friction, fraud and KYC <br />
             false positives
            </p>
        </div>
     </div>
     <div className='grid place-items-center'>
        <Link href="/">
            <button className=' border rounded-md m-8 px-[55px] text-sm lg:px-[75px] py-[15px] font-medium text-black bg-[#BFDCFF]'>
                Let&apos;s Talk
            </button>
        </Link>
     </div>
    </div>
    
  )
}

export default PartnerProgram

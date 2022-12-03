import React from 'react'
import Image from 'next/image'
import accelerate from '../public/accelerate.svg'
import friction from '../public/friction.svg'
import Secure from '../public/Secure.svg'
import Link from 'next/link'


const PartnerProgram = () => {
  return (
    <div className='place-content-center'>
     <div className='text-center'>
         <div className='text-3xl font-semibold pb-8'>
        Partner Program
        </div>
        <p className='text text-base'>
        Partner with WRKR to help other businesses modernize the way they engage with customers <br />
         and mitigate fraud. Our solutions enable companies to
        </p>
     </div>
     <div className='flex place-content-center p-32 text-center space-x-36 font-semi-bold text-base'>
        <div className='grid place-items-center '>
            <Image src={accelerate} alt='Accelerate' />
            <p>
            Accelerate revenue and secure digital <br />
             acquisition & onboarding
            </p>
        </div>
        <div className='grid place-items-center'>
            <Image src={Secure} alt='Secure'/>
            <p>
            Manage identities to secure <br />
             digital servicing
            </p>
        </div>
        <div className='grid place-items-center'>
            <Image src={friction} alt='Reduce friction'/>
            <p>
            Reduce friction, fraud and KYC <br />
             false positives
            </p>
        </div>
     </div>
     <div className='grid place-items-center'>
        <Link href="/">
            <button className=' border rounded-md m-8 px-[75px] py-[15px] font-medium text-black bg-[#BFDCFF]'>
                Let's Talk
            </button>
        </Link>
     </div>
    </div>
    
  )
}

export default PartnerProgram
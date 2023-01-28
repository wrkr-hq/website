import React from 'react'
import Image from 'next/image'
import accelerate from '../public/accelerate.svg'
import friction from '../public/friction.svg'
import Secure from '../public/Secure.svg'
import Link from 'next/link'
import { Icon } from '@iconify/react'


const PartnerProgram = () => {
  return (
    <div className='place-content-center px-10 py-[47px] space-y-8 lg:px-0 bg-white text-[#02000B]'>
      <div className='text-center max-w-md mx-auto'>
        <div className='text-xl lg:text-3xl font-semibold pb-8'>
          Partner Program
        </div>
        <p className='text-sm mb-8 lg:mb-0 lg:text-base'>
          Partner with us to help other businesses modernize the way they engage with customers
          and mitigate fraud. <br /> Our solutions enable companies to.
        </p>
      </div>
      <div className='flex flex-col max-w-4xl mx-auto space-y-8 lg:space-y-0 lg:flex-row lg:place-content-center text-center lg:space-x-8 font-semi-bold text-base'>
        <div className='flex flex-col items-center space-y-2 px-6'>
          <Icon icon="material-symbols:speed" style={{ fontSize: '64px', color: '#A1CCFF' }} />
          <p className='text-sm lg:text-base'>
            Accelerate revenue and secure digital
            acquisition & onboarding
          </p>
        </div>
        <div className='flex flex-col items-center space-y-2 px-6'>
          <Icon icon="vaadin:unlock" style={{ fontSize: '64px', color: '#A1CCFF' }} />
          <p className='text-sm lg:text-base'>
            Manage identities to secure
            digital servicing
          </p>
        </div>
        <div className='flex flex-col items-center space-y-2 px-6'>
          <Icon icon="ic:sharp-search" style={{ fontSize: '64px', color: '#A1CCFF' }} />
          <p className='text-sm lg:text-base'>
            Reduce friction, fraud and KYC
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

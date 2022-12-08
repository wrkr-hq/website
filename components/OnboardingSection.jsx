import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import e2e from '../public/endToEnd.svg'

const OnboardingSection = () => {
  return (
    <div id='onboarding' className='bg-white'>
        <main className='max-w-[1440px] mx-auto w-full lg:bg-[url("../public/vector2.png")] lg:bg-no-repeat lg:bg-right lg:bg-half max-h-[800px] pb-[3.75rem]'>

            <div className='flex flex-col text-[#02000B]'>
              <div className='hidden lg:flex self-center mx-auto border-[1px] border-[#BFDCFFF7] rounded my-[3.75rem]'>
                <div className='px-[30px] py-[11px] border-r-[1px] flex items-center border-[#BFDCFFF7] bg-[#BFDCFFF7]'>
                  <span className='mr-[10px]'>PortableOS</span> 
                  <span>
                    <Image src={'/arrows.svg'} alt='' width={22} height={16.5} />
                  </span>
                </div>
                <div className='px-[30px] py-[11px] border-r-[1px] border-[#BFDCFFF7]'><Link href={'#onboarding'}>Onboarding</Link></div>
                <div className='px-[30px] py-[11px] border-r-[1px] border-[#BFDCFFF7]'><Link href={'#authentication'}>Authentication</Link></div>
                <div className='px-[30px] py-[11px] border-r-[1px] border-[#BFDCFFF7]'><Link href={'#verify-claims'}>Claims</Link></div>
                <div className='px-[30px] py-[11px]'><Link href={'#detect-fraud'}>Fraud</Link></div>
              </div>

              <div className='flex flex-col py-10 lg:flex-row  items-center lg:pl-[160px] text-[#02000B]'>
                <div className='px-10 lg:w-[498px] lg:mr-[100px]'>
                  <div className='text-xl lg:text-3xl font-semibold pb-8'>End-to-End identity verification for onboarding in 10 seconds</div>
                  <div className='text-sm lg:text-base'>
                  Reduce friction and abandonment rates at a fragment of legacy system costs, through fully compliant pre-approved KYC from trusted companies within our Identity network, consented and controlled by the customer in under 10 seconds.
                  </div>
                </div>

                <div className='px-10 py-10 lg:py-0 lg:px-0 lg:pr-14 lg:ml-[100px]'>
                  <Image 
                    src={e2e}
                    alt="end-to-end encryption"
                    width={306}
                    height={495} />
                </div>
              </div>
            </div>
        </main>
    </div>
  )
}

export default OnboardingSection

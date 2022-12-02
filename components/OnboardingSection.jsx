import React from 'react'
import Image from 'next/image'
import e2e from '../public/endToEnd.svg'

const OnboardingSection = () => {
  return (
    <div>
        <main className='max-w-[1440px] mx-auto bg-[url("../public/vector2.png")] bg-no-repeat bg-right bg-half max-h-[800px] pb-[3.75rem]'>

            <div className='flex flex-col'>
              <div className='flex self-center mx-auto border-[1px] border-[#BFDCFFF7] rounded my-[3.75rem]'>
                <div className='px-[30px] py-[11px] border-r-[1px] border-[#BFDCFFF7]'>PortableOS</div>
                <div className='px-[30px] py-[11px] border-r-[1px] border-[#BFDCFFF7]'>Onboarding</div>
                <div className='px-[30px] py-[11px] border-r-[1px] border-[#BFDCFFF7]'>Authentication</div>
                <div className='px-[30px] py-[11px] border-r-[1px] border-[#BFDCFFF7]'>Claims</div>
                <div className='px-[30px] py-[11px]'>Fraud</div>
              </div>

              <div className='flex  items-center pl-[160px]'>
                <div className='w-[498px] mr-[100px]'>
                  <div className='text-3xl font-semibold'>End-to-End identity verification for onboarding in 10 seconds</div>
                  <div>
                  Reduce friction and abandonment rates at a fragment of legacy system costs, through fully compliant pre-approved KYC from trusted companies within our Identity network, consented and controlled by the customer in under 10 seconds.
                  </div>
                </div>

                <div>
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
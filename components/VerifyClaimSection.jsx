import React from 'react'
import Image from 'next/image'
import verifyclaim from '../public/verifyclaim.svg'

const VerifyClaimSection = () => {
  return (
    <div id='verify-claims' className='bg-white'>
        <main className='max-w-[1440px] px-10 mx-auto max-h-[600px] py-[50px]'>

            <div className='flex flex-col'>

            <div className='flex flex-col-reverse lg:flex-row  items-center lg:pl-[160px]'>
                <div className='w-full lg:w-[498px] lg:mr-[100px] text-[#02000B]'>
                  <div className='text-xl lg:text-3xl font-semibold'>Verify claims from different industries</div>
                  <div className='text-sm lg:text-base'>
                  Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Ascelem risque phasellus elit nulla urna mollis sagittis gravn ac. Mollis netus venenatis lacus leo tellus at.
                  </div>
                </div>

                <div className='lg:pr-[160px] mb-10 lg:mb-0'>
                    <Image 
                        src={verifyclaim}
                        alt="verify claim" />
                </div>
            </div>
            </div>
        </main>
    </div>
  )
}

export default VerifyClaimSection

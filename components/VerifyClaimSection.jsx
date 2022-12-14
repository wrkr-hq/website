import React from 'react'
import Image from 'next/image'
import verifyclaim from '../public/verifyclaim.svg'

const VerifyClaimSection = () => {
  return (
    <div id='verify-claims' className='bg-white scroll-mt-32'>
        <main className='max-w-[1440px] px-10 lg:px-20 mx-auto max-h-[600px] py-[50px] lg:py-[212px] lg:bg-[url("../public/claimsgroup.svg")] lg:bg-no-repeat lg:bg-right'>

            <div className='flex flex-col '>

            <div className='flex flex-col-reverse lg:flex-row  items-center'>
                <div className='w-full lg:w-[498px] lg:mr-[100px] text-[#02000B]'>
                  <div className='text-xl lg:text-[32px] lg:mb-[32px] font-semibold lg:leading-[46.37px]'>Verify claims from different industries</div>
                  <div className='text-sm lg:text-base lg:leading-[29.02px]'>
                  Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Ascelem risque phasellus elit nulla urna mollis sagittis gravn ac. Mollis netus venenatis lacus leo tellus at.
                  </div>
                </div>

                <div className='mb-10 lg:mb-0'>
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

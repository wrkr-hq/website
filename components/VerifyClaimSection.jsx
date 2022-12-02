import React from 'react'
import Image from 'next/image'
import verifyclaim from '../public/verifyclaim.svg'

const VerifyClaimSection = () => {
  return (
    <div>
        <main className='max-w-[1440px] mx-auto'>

            <div className='flex flex-col'>

            <div className='flex  items-center h-screen pl-[160px]'>
                <div className='w-[498px] mr-[100px]'>
                <div className='text-3xl font-semibold'>Verify claims from different industries</div>
                <div>
                Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Ascelem risque phasellus elit nulla urna mollis sagittis gravn ac. Mollis netus venenatis lacus leo tellus at.
                </div>
                </div>

                <div>
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
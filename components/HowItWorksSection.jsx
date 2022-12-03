import React from 'react'
import Image from 'next/image'

import step1 from '../public/step1.svg'
import step2 from '../public/step2.svg'
import step3 from '../public/step3.svg'
import step4 from '../public/step4.svg'
import step5 from '../public/step5.svg'
import union from '../public/Union.svg'
import uniondwn from '../public/Uniondown.svg'
import unionleft from '../public/Unionleft.svg'

const HowItWorksSection = () => {
  return (
    <div className='bg-[#02000B] bg-[url("../public/howitworksbg.svg)] lg:bg-[#02000B]'>
        <main className='w-full lg:min-w-[1440px] mx-auto pb-[88px] px-[100px]'>

            <div className='flex flex-col'>

                <div className='self-center mx-auto my-[3.75rem]'>
                    <div className='text-[32px] font-semibold text-[#BFDCFF] text-center'>How it works</div>
                    <div className='text-white w-[538px] text-center'>
                    Create workflows that work for your business, from customer onboarding to fraud detection and everything in between.
                    </div>
                </div>

            <div className='flex w-full flex-wrap lg:flex-nowrap lg:flex lg:flex-col lg:items-center'>
                <div className='flex items-center mb-[84px]'>
                    <div className='flex flex-col items-center justify-center w-[178px] mr-[84px]'>
                        <div>
                            <Image src={step1} alt="step 1" />
                        </div>
                        <div>
                            <div className='text-white text-center text-[32px] font-semibold'>Step 1</div>
                            <div className='text-white text-center'>
                            A user want to sign up or access your services online 
                            </div>
                        </div>
                    </div>

                    <div className='mr-[84px]'>
                        <div>
                            <Image src={union} alt="step 1" />
                        </div>
                    </div>

                    <div className='flex flex-col items-center justify-center w-[178px] mr-[84px]'>
                        <div>
                            <Image src={step2} alt="step 2" />
                        </div>
                        <div>
                            <div className='text-white text-center text-[32px] font-semibold'>Step 2</div>
                            <div className='text-white text-center'>
                            The user is asked to verify their identity through WRKR 
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className='invisible mr-[84px]'>
                            <Image src={union} alt="step 1" />
                        </div>
                    </div>

                    <div className='flex flex-col items-center justify-center w-[178px] mr-[84px]'>
                        <div>
                            <Image src={step3} alt="step 3" />
                        </div>
                        <div>
                            <div className='text-white text-center text-[32px] font-semibold'>Step 3</div>
                            <div className='text-white text-center'>
                            The user selects WRKR and share a unique ID to WRKR
                            </div>
                        </div>
                    </div>
                </div>

                <div className='self-end w-[178px]  mb-[84px]'>
                    <div>
                        <Image src={uniondwn} alt="step 1" />
                    </div>
                </div>

                <div className='flex items-center'>
                    <div className='flex flex-col items-center justify-center invisible'>
                        <div>
                            <Image src={step1} alt="step 1" />
                        </div>
                        <div>
                            <div className='text-white text-center'>Step 1</div>
                            <div className='text-white text-center'>
                            A user want to sign up or access your services online 
                            </div>
                        </div>
                    </div>

                    <div className='invisible'>
                        <div>
                            <Image src={union} alt="step 1" />
                        </div>
                    </div>

                    <div className='flex flex-col items-center justify-center w-[268px]'>
                        <div>
                            <Image src={step5} alt="step 5" />
                        </div>
                        <div>
                            <div className='text-white text-center text-[32px] font-semibold'>Step 5</div>
                            <div className='text-white text-center'>
                            Consumer's info is encrypted and securely passed through WRKR to your company. 
                            </div>
                        </div>
                    </div>

                    <div className='mx-[84px]'>
                        <div className=''>
                            <Image src={unionleft} alt="step 1" />
                        </div>
                    </div>

                    <div className='flex flex-col items-center justify-center w-[311px] '>
                        <div>
                            <Image src={step4} alt="step 4" />
                        </div>
                        <div>
                            <div className='text-white text-center text-[32px] font-semibold'>Step 4</div>
                            <div className='text-white text-center'>
                            The user reviews, confirms and consent to share their personal information with the relying party.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </main>
    </div>
  )
}

export default HowItWorksSection
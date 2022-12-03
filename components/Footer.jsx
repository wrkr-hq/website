import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#02000B] text-white border-2 border-red-500'>
        <main className='max-w-[1440px] mx-auto px-[100px] py-[96px] '>
            <div className='flex flex-col lg:flex lg:flex-row'>
                <div className='max-w-[491px] mr-[81px]'>
                    <div className='text-[33.54px] font-[900]'>WRKR</div>
                    <div>
                        <p>we're a real-time reusable, interoperable digital identity & claims infrastructure that enables businesses to verify the reputation of their customer before they serve them while prioritizing user privacy.
                        </p>
                    </div>
                </div>

                <div className='flex justify-between w-full'>
                    <div>
                        <div className='text-2xl font-semibold mb-[16px]'>Business</div>

                        <div>
                            <ul>
                                <li className='mb-[8px]'>PortableOS</li>
                                <li className='mb-[8px]'>Checkout</li>
                                <li className='mb-[8px]'>Integration</li>
                                <li className='mb-[8px]'>Authentication</li>
                                <li className='mb-[8px]'>Payment</li>
                                <li className='mb-[8px]'>Retention</li>
                                <li className='mb-[8px]'>Fraud</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className='text-2xl font-semibold mb-[16px]'>Personal</div>

                        <div>
                            <ul>
                                <li className='mb-[8px]'>Your Account</li>
                                <li className='mb-[8px]'>Security</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className='text-2xl font-semibold mb-[16px]'>Developer</div>

                        <div>
                            <ul>
                                <li className='mb-[8px]'>Documentation</li>
                                <li className='mb-[8px]'>API Reference</li>
                                <li className='mb-[8px]'>API Status</li>
                                <li className='mb-[8px]'>Latest Release</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className='text-2xl font-semibold mb-[16px]'>Company</div>

                        <div>
                            <ul>
                                <li className='mb-[8px]'>About Us</li>
                                <li className='mb-[8px]'>Contact Us</li>
                                <li className='mb-[8px]'>Pricing</li>
                                <li className='mb-[8px]'>Privacy Policy</li>
                                <li className='mb-[8px]'>FAQ</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}

export default Footer
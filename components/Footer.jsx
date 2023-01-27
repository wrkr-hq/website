import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#02000B] text-white'>
        <main className='max-w-[1440px] mx-auto px-10 py-[76px] lg:px-[100px] lg:py-[96px] '>
            <div className='flex flex-col lg:flex-row'>
                <div className='max-w-[491px] mb-8 lg:mb-0 lg:mr-[81px]'>
                    <div className='text-[33.54px] font-[900]'>WRKR</div>
                    <div>
                        <p>WRKR is creating the modern path for our distributed world where identities are secure, and customer acquisition is uncomplicated.
                            Through our infrastructure we empower companies and users to perform verified identity-based authentication and store 
                            reusable Identity on the secure enclave of their device, eliminating the need for passwords, one-time codes, and more.
                        </p>
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row justify-between w-full'>
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

import React from 'react'
import Image from 'next/image'
import group from '../public/group.png'

const DetectFraud = () => {
  return (
    <div className='max-w-[1440px] flex justify-between px-14 py-20 text-black bg-white static flex-wrap'>
      <div>
        <Image src={group} alt='/'
        width='500'/>
      </div>
      <div className='grid content-center'>
        <h3 className='text-3xl font-semibold pb-8'>
        Detect fraud automatically. <br />
        100% fraud covered
        </h3>
        <p>
        Eliminates the tradeoffs between security and privacy by connecting account <br />
         registration to account access and account recovery using state-of-the-art <br />
         decentralized turnkey biometric authentication and using other phone centric <br />
         Identity attributes.


        </p>
      </div>
    </div>
  )
}

export default DetectFraud
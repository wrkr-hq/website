import React, { useState } from 'react'
import Footer from './Footer'
import styles from '../styles/Input.module.css'

const ScheduleDemo = () => {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [phone, setPhone] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [companyEmail, setCompanyEmail] = useState('')
  const [companyDo, setCompanyDo] = useState('')

  return (
    <div>
      <div className='mx-auto w-full p-2 py-28 lg:py-[60px]'>

        <form className='flex flex-col items-center bg-white rounded-lg px-6 py-4 lg:max-w-[905px] lg:mx-auto lg:px-[60px] lg:py-[80px]'>

          <div className='py-4 lg:w-full'>
            <h1 className='text-[#02000B] text-xl font-medium lg:text-[24px] lg:mb-[32px]'>Schedule a Demo With Our Representative!</h1>
            <p className='text-[#02000B] text-[14px] lg:text-[16px]'>Tell us a little about yourself, and we&apos;ll get back to you as soon as possible.</p>
          </div>

          <div className="text-[#02000B] self-start py-2">
            <label htmlFor="">Your Name</label>
          </div>
          <div className='flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 w-full'>
            <input onChange={(e) => setFirstname(e.target.value)}
              className={`${styles['custom-input']} lg:!rounded-r-none lg:!border-r-0`}
              placeholder="First name" type="text" value={firstname}>
            </input>

            <input onChange={(e) => setLastname(e.target.value)}
              className={`${styles['custom-input']} lg:!rounded-l-none lg:!border-l-0`}
              placeholder="Last name" type="text" value={lastname}>
            </input>
          </div>

          <div className="text-[#02000B] self-start py-2">
            <label htmlFor="">Phone Number</label>
          </div>
          <div className='w-full'>
            <input onChange={(e) => setPhone(e.target.value)}
              className={styles['custom-input']}
              placeholder="Your phone number" type="tel" pattern='[0-9]{11}|\+[0-9]{10,}' value={phone}>
            </input>
          </div>

          <div className="text-[#02000B] self-start py-2">
            <label htmlFor="">Company Name</label>
          </div>
          <div className='w-full'>
            <input onChange={(e) => setCompanyName(e.target.value)}
              className={styles['custom-input']}
              placeholder="Your company's name" type="text" value={companyName} >
            </input>
          </div>

          <div className="text-[#02000B] self-start py-2">
            <label htmlFor="">Company Email</label>
          </div>
          <div className='w-full'>
            <input onChange={(e) => setCompanyEmail(e.target.value)}
              className={styles['custom-input']}
              placeholder="Your company's email address" type="email" value={companyEmail}>
            </input>
          </div>

          <div className="text-[#02000B] self-start py-2">
            <label htmlFor="">What Does Your Company Do?</label>
          </div>
          <div className='w-full'>
            <textarea onChange={(e) => setCompanyDo(e.target.value)}
              value={companyDo}
              className={`${styles['custom-input']}`}
              cols="25" rows="4">
            </textarea>
          </div>

          <div className='w-full flex justify-center px-4 lg:w-[203px] lg:justify-start lg:self-start lg:px-0'>
            <button className='py-[15px] my-4 bg-[#BFDCFF] w-full rounded-lg text-[14px] text-[#02000B] lg:text-[16px]' type='submit'>Submit</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default ScheduleDemo


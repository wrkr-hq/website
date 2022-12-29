import Head from 'next/head'
import React from 'react'
import Navigation from '../components/Navigation'
import ScheduleDemo from '../components/ScheduleDemo'

const Demo = () => {
  return (
    <div className='bg-[url("../public/demobg.svg")]'>
      <Head>
        <title>Schedule Demo</title>
      </Head>
      <div>
        <Navigation />
      </div>
      <div className='lg:pt-[151px]'>
        <ScheduleDemo />
      </div>
    </div>
  )
}

export default Demo
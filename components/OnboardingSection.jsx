import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'
import e2e from '../public/endToEnd.svg'

const OnboardingSection = () => {

  const [portableOS, setPortableOS] = React.useState(false)
  const [onboarding, setOnboarding] = React.useState(false)
  const [authentication, setAuthentication] = React.useState(false)
  const [claims, setClaims] = React.useState(false)
  const [fraud, setFraud] = React.useState(false)
  const [tab, setTab] = React.useState('PortableOS')

  const router = useRouter()
  console.log(router.asPath);

  return (
    <div id='onboarding' className='bg-white scroll-mt-16'>
      <main className='max-w-[1440px] mx-auto w-full lg:bg-[url("../public/vector2.png")] lg:bg-no-repeat lg:bg-right lg:bg-half max-h-[800px] pb-[3.75rem]'>

        <div className='flex flex-col text-[#02000B]'>
          <div className='hidden lg:flex self-center mx-auto border-[1px] border-[#BFDCFFF7] rounded my-[3.75rem] bg-white'>

            <Link href={'/'} className={`hover:bg-[#BFDCFFF7] ${router.asPath == '/' ? 'bg-[#BFDCFFF7]' : ''}`} onClick={() => setTab('PortableOS')} onMouseEnter={() => setPortableOS(true)} onMouseLeave={() => setPortableOS(false)}>
              <div className='px-[30px] py-[11px] flex items-center'>
                <span className='mr-[10px]'>PortableOS</span>
                <span className={`${router.asPath == '/' ? 'block' : 'hidden'} `}>
                  <Image src={'/arrows.svg'} alt='' width={22} height={16.5} />
                </span>
              </div>
            </Link>

            <Link href={'#onboarding'} className={`hover:bg-[#BFDCFFF7] ${router.asPath == '/#onboarding' ? 'bg-[#BFDCFFF7]' : ''}`} onMouseEnter={() => setOnboarding(true)} onMouseLeave={() => setOnboarding(false)}>
              <div className='px-[30px] flex items-center py-[11px]'>
                <span className='mr-[10px]'>Onboarding</span>
                <span className={`${router.asPath == '/#onboarding' ? 'block' : 'hidden'}`}>
                  <Image src={'/arrows.svg'} alt='' width={22} height={16.5} />
                </span>
              </div>
            </Link>

            <Link href={'#authentication'} className={`hover:bg-[#BFDCFFF7] ${router.asPath == '/#authentication' ? 'bg-[#BFDCFFF7]' : ''}`} onMouseEnter={() => setAuthentication(true)} onMouseLeave={() => setAuthentication(false)}>
              <div className='px-[30px] py-[11px] flex items-center'>
                <span className='mr-[10px]'>Authentication</span>
                <span className={`${router.asPath == '/#authentication' ? 'block' : 'hidden'}`}>
                  <Image src={'/arrows.svg'} alt='' width={22} height={16.5} />
                </span>
              </div>
            </Link>

            <Link href={'#verify-claims'} className={`hover:bg-[#BFDCFFF7] ${router.asPath == '/#verify-claims' ? 'bg-[#BFDCFFF7]' : ''}`} onMouseEnter={() => setClaims(true)} onMouseLeave={() => setClaims(false)}>
              <div className='px-[30px] py-[11px] flex items-center'>
                <span className='mr-[10px]'>Claims</span>
                <span className={`${router.asPath == '/#verify-claims' ? 'block' : 'hidden'}`}>
                  <Image src={'/arrows.svg'} alt='' width={22} height={16.5} />
                </span>
              </div>
            </Link>

            <Link href={'#detect-fraud'} className={`hover:bg-[#BFDCFFF7] ${router.asPath == '/#detect-fraud' ? 'bg-[#BFDCFFF7]' : ''}`} onMouseEnter={() => setFraud(true)} onMouseLeave={() => setFraud(false)}>
              <div className='px-[30px] py-[11px] flex items-center'>
                <span className='mr-[10px]'>Fraud</span>
                <span className={`${router.asPath == '/#detect-fraud' ? 'block' : 'hidden'}`}>
                  <Image src={'/arrows.svg'} alt='' width={22} height={16.5} />
                </span>
              </div>
            </Link>

          </div>

          <div className='flex lg:justify-between flex-col py-10 lg:flex-row mx-auto items-center text-[#02000B]'>
            <div className='px-10 lg:w-[498px] lg:mr-[100px]'>
              <div className='text-xl lg:text-4xl font-semibold pb-9'>Simple, easy onboarding</div>
              <div className='text-sm lg:text-base'>
                Onboard  authenticated consumers in 10 seconds through fully compliant preapproved identity information from
                companies within our network, consented and controlled by the customer. Reduce consumer friction and fraud.
              </div>
            </div>

            <div className='px-10 py-10 lg:py-0 lg:px-0 lg:pr-14 lg:ml-[100px]'>
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

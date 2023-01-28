import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navigation from '../components/Navigation'
import Landing from '../components/Landing'
import OnboardingSection from '../components/OnboardingSection'
import VerifyClaimSection from '../components/VerifyClaimSection'
import VerificationUpgrade from '../components/VerificationUpgrade'
import DetectFraud from '../components/DetectFraud'
import HowItWorksSection from '../components/HowItWorksSection'
import PersonalIdentity from '../components/PersonalIdentity'
import PartnerProgram from '../components/PartnerProgram'
import Footer from '../components/Footer'
import Image from 'next/image'
import point from '../public/point.svg'
import briefcase from '../public/briefcase.svg'
import user from '../public/user.svg'
import { Icon } from '@iconify/react'

export default function Home() {
  return (
    <div className=''>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="../public/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="../public/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="../public/favicon-16x16.png" />
        <link rel="manifest" href="../public/site.webmanifest" />
        <link rel="mask-icon" href="../public/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="msapplication-config" content="../public/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
        <title>GETWRKR: Your Passport for the web</title>
      </Head>
      {/* <main className='max-w-[1440px] mx-auto'>
        <h1 className='bg-black w-full text-white text-center lg:text-left'>In the middle, and full!</h1>
      </main> */}
      <main className='bg-white'>
        <div>
          <Navigation />
        </div>
        <div>
          <Landing />
        </div>
        <div>
          <OnboardingSection />
        </div>
        <div>
          <VerificationUpgrade />
        </div>
        <div>
          <VerifyClaimSection />
        </div>
        <div>
          <DetectFraud />
        </div>
        {/* <div>
            <HowItWorksSection />
          </div> */}
        <div>
          <PersonalIdentity />
        </div>

        <section className='bg-[#FCFBFF] py-20'>
          <div className='w-full max-w-[1440px] mx-auto flex flex-col lg:flex-row px-10 mb-10 lg:mb-[107px]'>
            <div className='bg-[#02000B] text-white rounded-md mb-6 p-8 lg:px-[32px] lg:py-[42px] lg:mb-0  lg:mr-[1rem]'>
              <div className='flex items-center mb-6 lg:mb-[26px]'>
                <div className='mr-[1rem] bg-white w-[60px] h-[60px] grid place-items-center rounded-full'>
                  {/* <Image src={briefcase} alt='' /> */}
                  <Icon icon="material-symbols:business-center-rounded" style={{ fontSize: '35px', color: '#A1CCFF' }} />
                </div>
                <div className='lg:text-3xl'>For businesses</div>
              </div>
              <div className='space-y-3'>
                <div className='flex items-center lg:mb-[1rem]'>
                  <div className='mr-2 w-[22px] h-[22px]'><Image className={`${styles.points} dots`} src={point} alt='' width={22} height={22.16} /></div>
                  <div className='text-sm lg:text-base'>Increase conversion rates and optimize customer acquisition costs.</div>
                </div>
                <div className='flex items-center lg:mb-[1rem]'>
                  <div className='mr-2 w-[22px] h-[22px]'><Image className={`${styles.points} dots`} src={point} alt='' width={22} height={22.16} /></div>
                  <div className='text-sm lg:text-base'>Create a frictionless user access flow experience that just works no matter where.</div>
                </div>
                <div className='flex items-center lg:mb-[1rem]'>
                  <div className='mr-2 w-[22px] h-[22px]'><Image className={`${styles.points} dots`} src={point} alt='' width={22} height={22.16} /></div>
                  <div className='text-sm lg:text-base'>Enforce consistent access, authentication, and authorization policies across distributed infrastructure.</div>
                </div>
                <div className='flex items-center lg:mb-[1rem]'>
                  <div className='mr-2 w-[22px] h-[22px]'><Image className={`${styles.points} dots`} src={point} alt='' width={22} height={22.16} /></div>
                  <div className='text-sm lg:text-base'>Plan, integrate, test, validate and head into production — all in a few days.</div>
                </div>
              </div>
            </div>

            <div className='bg-[#02000B] text-white rounded-md mb-6 p-8 lg:px-[32px] lg:py-[42px] lg:mb-0  lg:mr-[1rem]'>

              <div className='flex items-center mb-6 lg:mb-[26px]'>
                <div className='mr-[1rem] bg-white w-[60px] h-[60px] grid place-items-center rounded-full'>
                  <Icon icon="mdi:user" style={{ fontSize: '35px', color: '#A1CCFF' }} />
                </div>
                <div className='lg:text-3xl'>For personal users</div>
              </div>
              <div className='space-y-3'>
                <div className='flex items-center lg:mb-[1rem]'>
                  <div className='mr-2 w-[22px] h-[22px]'><Image className={`${styles.points} dots`} src={'/point.svg'} alt='' width={22} height={22.16} /></div>
                  <div className='text-sm lg:text-base'>Better account opening experience by reusing existing verified identities.</div>
                </div>
                <div className='flex items-center lg:mb-[1rem]'>
                  <div className='mr-2 w-[22px] h-[22px]'><Image className={`${styles.points} dots`} src={'/point.svg'} alt='' width={22} height={22.16} /></div>
                  <div className='text-sm lg:text-base'>No passwords or user names to remember. Identify yourself in a few seconds with biometrics</div>
                </div>
                <div className='flex items-center lg:mb-[1rem]'>
                  <div className='mr-2 w-[22px] h-[22px]'><Image className={`${styles.points} dots`} src={point} alt='' width={22} height={22.16} /></div>
                  <div className='text-sm lg:text-base'>Retain control of your Identity Information, private keys and associated data.</div>
                </div>
                <div className='flex items-center lg:mb-[1rem]'>
                  <div className='mr-2 w-[22px] h-[22px]'><Image className={`${styles.points} dots`} src={point} alt='' width={22} height={22.16} /></div>
                  <div className='text-sm lg:text-base'>Use a single click to sign-in to apps you&apos;ve never used before.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div>
          <PartnerProgram />
        </div>

        <footer>
          <Footer />
        </footer>
      </main>
    </div>
  )
}

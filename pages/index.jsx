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
        <link rel="apple-touch-icon" sizes="180x180" href="../public/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="../public/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="../public/favicon-16x16.png"/>
        <link rel="manifest" href="../public/site.webmanifest"/>
        <link rel="mask-icon" href="../public/safari-pinned-tab.svg" color="#5bbad5"/>
        <link rel="shortcut icon" href="/favicon.ico"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="msapplication-config" content="../public/browserconfig.xml"/>
        <meta name="theme-color" content="#ffffff"/>
        <title>WRKR Technologies Inc.</title>
      </Head>
      {/* <main className='max-w-[1440px] mx-auto'>
        <h1 className='bg-black w-full text-white text-center lg:text-left'>In the middle, and full!</h1>
      </main> */}
      <main className='bg-white'>
          <div>
            <Navigation/>
          </div>
          <div>
            <Landing/>
          </div>
          <div>
            <OnboardingSection />
          </div>
          <div>
            <VerificationUpgrade/>
          </div>
          <div>
            <VerifyClaimSection />
          </div>
          <div>
            <DetectFraud/>
          </div>
          {/* <div>
            <HowItWorksSection />
          </div> */}
          <div>
            <PersonalIdentity/>
          </div>

          <section className='bg-[#FCFBFF] py-20'>
            <div className='w-full max-w-[1440px] mx-auto flex flex-col lg:flex-row px-10 mb-10 lg:mb-[107px]'>
              <div className='bg-[#02000B] text-white rounded-md mb-6 p-8 lg:px-[32px] lg:py-[42px] lg:mb-0  lg:mr-[1rem]'>
                <div className='flex items-center mb-6 lg:mb-[26px]'>
                  <div className='mr-[1rem] bg-white w-[60px] h-[60px] grid place-items-center rounded-full'>
                    {/* <Image src={briefcase} alt='' /> */}
                    <Icon icon="material-symbols:business-center-rounded" style={{ fontSize: '32px', color: '#A1CCFF' }} />
                  </div>
                  <div className='lg:text-2xl'>For businesses</div>
                </div>
                <div className='flex items-center lg:mb-[1rem]'>
                  <div className='mr-2 w-[22px] h-[22px]'><Image className={`${styles.points} dots`} src={point} alt='' width={22} height={22.16} /></div>
                  <div className='text-sm lg:text-base'>Engage the most valuable customers, who convert at a 50% higher rate than guests.</div>
                </div>
                <div className='flex items-center lg:mb-[1rem]'>
                  <div className='mr-2 w-[22px] h-[22px]'><Image className={`${styles.points} dots`} src={point} alt='' width={22} height={22.16} /></div>
                  <div className='text-sm lg:text-base'>Give every consumer a lightning-fast, one-click checkout, even if they have never purchased at your site before, and watch your conversion rate rise.</div>
                </div>
                <div className='flex items-center lg:mb-[1rem]'>
                  <div className='mr-2 w-[22px] h-[22px]'><Image className={`${styles.points} dots`} src={point} alt='' width={22} height={22.16} /></div>
                  <div className='text-sm lg:text-base'>You can rely on our security and privacy. WRKR handles payment data across the network securely and in accordance with applicable laws and standards.</div>
                </div>
                <div className='flex items-center lg:mb-[1rem]'>
                  <div className='mr-2 w-[22px] h-[22px]'><Image className={`${styles.points} dots`} src={point} alt='' width={22} height={22.16} /></div>
                  <div className='text-sm lg:text-base'>Join the growing network! As more retailers and customers join the WRKR network, it can help you increase sales by providing an amazing experience.</div>
                </div>
              </div>

              <div className='bg-[#02000B] text-white rounded-md mb-6 p-8 lg:px-[32px] lg:py-[42px] lg:mb-0  lg:mr-[1rem]'>
                
                <div className='flex items-center mb-6 lg:mb-[26px]'>
                  <div className='mr-[1rem] bg-white w-[60px] h-[60px] grid place-items-center rounded-full'>
                    <Icon icon="mdi:user" style={{ fontSize: '32px', color: '#A1CCFF' }} />
                  </div>
                  <div className='lg:text-2xl'>For personal users</div>
                </div>
                <div className='flex items-center lg:mb-[1rem]'>
                  <div className='mr-2 w-[22px] h-[22px]'><Image className={`${styles.points} dots`} src={'/point.svg'} alt='' width={22} height={22.16} /></div>
                  <div className='text-sm lg:text-base'>Create an account once and never have to remember a password again. Then never enter your personal or payment data again when shopping online.</div>
                </div>
                <div className='flex items-center lg:mb-[1rem]'>
                  <div className='mr-2 w-[22px] h-[22px]'><Image className={`${styles.points} dots`} src={'/point.svg'} alt='' width={22} height={22.16} /></div>
                  <div className='text-sm lg:text-base'>No passwords or user names to remember. Customers are verified with a one-time password with no friction.</div>
                </div>
                <div className='flex items-center lg:mb-[1rem]'>
                  <div className='mr-2 w-[22px] h-[22px]'><Image className={`${styles.points} dots`} src={point} alt='' width={22} height={22.16} /></div>
                  <div className='text-sm lg:text-base'>Convenience and security. WRKR makes it simple to purchase online while maintaining your privacy and security.</div>
                </div>
                <div className='flex items-center lg:mb-[1rem]'>
                  <div className='mr-2 w-[22px] h-[22px]'><Image className={`${styles.points} dots`} src={point} alt='' width={22} height={22.16} /></div>
                  <div className='text-sm lg:text-base'>Better shopping everywhere. With WRKR, you can use a single click to check out from stores you&apos;ve never visited before.</div>
                </div>
              </div>
            </div>
          </section>

          <div>
            <PartnerProgram/>
          </div>

          <footer>
            <Footer />
          </footer>
      </main>
    </div>
  )
}

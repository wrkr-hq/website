import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navigation from '../components/Navigation'
import Landing from '../components/Landing'
import OnboardingSection from '../components/OnboardingSection'
import VerifyClaimSection from '../components/VerifyClaimSection'
import VerificationUpgrade from './VerificationUpgrade'
import DetectFraud from './DetectFraud'
import HowItWorksSection from '../components/HowItWorksSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className='flex '>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main className='w-full'>
        <div>
          <Navigation/>
        </div>
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
        <div>
          <PersonalIdentity/>
        </div>
        <div>
          <PartnerProgram/>
        </div>

        <div>
          <HowItWorksSection />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

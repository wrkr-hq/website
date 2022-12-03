import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navigation from './Navigation'
import Landing from './Landing'
import OnboardingSection from '../components/OnboardingSection'
import VerifyClaimSection from '../components/VerifyClaimSection'
import VerificationUpgrade from './VerificationUpgrade'
import DetectFraud from './DetectFraud'
import HowItWorksSection from '../components/HowItWorksSection'

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main>
        <Navigation/>
        <Landing/>
        <div>
        <OnboardingSection />
        </div>

        <VerificationUpgrade/>

        <div>
          <VerifyClaimSection />
        </div>

        <DetectFraud/>

        <div>
          <HowItWorksSection />
        </div>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

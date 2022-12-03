import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navigation from '../components/Navigation'
import Landing from './Landing'
import OnboardingSection from '../components/OnboardingSection'
import VerifyClaimSection from '../components/VerifyClaimSection'
import VerificationUpgrade from './VerificationUpgrade'
import PersonalIdentity from '../components/PersonalIdentity'
import DetectFraud from './DetectFraud'

export default function Home() {
  return (
    <div className='flex '>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main>
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
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

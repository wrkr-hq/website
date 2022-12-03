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

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main className=''>
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
            <HowItWorksSection />
          </div>
          <div>
            <PersonalIdentity/>
          </div>
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

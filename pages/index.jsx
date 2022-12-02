import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navigation from './Navigation'
import Landing from './Landing'
import VerificationUpgrade from './VerificationUpgrade'
export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main>
        <Navigation/>
        <Landing/>
        <VerificationUpgrade/>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

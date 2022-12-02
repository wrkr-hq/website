import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navigation from './Navigation'
import Landing from './Landing'

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main>
        <Navigation/>
        <Landing/>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

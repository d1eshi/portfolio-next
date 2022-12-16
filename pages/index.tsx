import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { AboutMe, Hero, MyProjects, Navbar } from '../components'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio d1eshi</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        {/* icon */}
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Navbar />
        <Hero />
        <AboutMe />
        <MyProjects />
      </main>
    </>
  )
}

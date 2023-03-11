import Head from 'next/head'
import Script from 'next/script'
import Image from 'next/image'
import Link from 'next/link'
import useGAEventsTracker from "@/hooks/useGAEventsTracker"
import { Inter } from '@next/font/google'
import { FaGithubSquare, FaLinkedin, FaBlog, FaTwitter } from 'react-icons/fa'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const GAEvent = useGAEventsTracker('Social Media')

  const handleLinkedinGAEvent = () => {
    GAEvent.eventTracker('click_on_linkedin')
  }

  return (
    <>
      <Head>
        <title>Gibify | Home</title>
        <meta name="description" content="Desenvolvedor Frontend - Netxjs, Reactjs, TypeScript, Javascript, Electronjs" />
        <meta name="og:title" content="Desenvolvedor Frontend" />
        <meta name="robots" content="software enginner, react enginner, next enginner, frontend enginner, frontend" />
        <meta name="og:url" content="https://www.gibify.dev/" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
        id='ads'
        async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9394287397785778"
        crossOrigin="anonymous"
        strategy="lazyOnload"
      >
      </Script>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            <a
              href="https://github.com/gibify"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithubSquare color='#FFFFFF' size={24} />
              <code className={styles.code}>https://github.com/gibify</code>
            </a>
          </p>
        </div>

        <div className={styles.center}>
          <Image
            src="/gibify.svg"
            alt="gibify"
            width={250}
            height={75}
            priority
          />
          <div className={styles.gibify}>
            <Image
              src="/logo.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <div className={styles.grid}>
          <Link
            onClick={handleLinkedinGAEvent}
            href="https://www.linkedin.com/in/gibifyofficial/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Linkedin
            </h2>
            <p className={inter.className}>
              <FaLinkedin />
              gibifyofficial
            </p>
          </Link>
          <Link
            href="https://twitter.com/gibifyofficial/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Twitter
            </h2>
            <p className={inter.className}>
              <FaTwitter />
              gibifyofficial
            </p>
          </Link>
        </div>
        <div className={styles.grid}>
          <Link
            href="/blog"
            className={styles.card}
          >
            <h2 className={inter.className}>
              Blog
            </h2>
            <p className={inter.className}>
              <FaBlog />
              Conteúdo sobre Tecnologia
            </p>
          </Link>
        </div>
      </main>
    </>
  )
}


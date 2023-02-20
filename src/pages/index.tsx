import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { FaGithubSquare, FaLinkedin, FaBlog, FaTwitter } from 'react-icons/fa'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>gibify</title>
        <meta name="description" content="Desenvolvedor Frontend - Netxjs, Reactjs, TypeScript, Javascript" />
        <meta name="og:title" content="Desenvolvedor Frontend" />
        <meta name="robots" content="software enginner, react enginner, next enginner, frontend" />
        <meta name="og:url" content="https://www.gibicoski.com.br/" />
        <link rel="icon" href="/favicon.ico" />
        <script
          async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9394287397785778"
          crossOrigin="anonymous">
        </script>
      </Head>
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


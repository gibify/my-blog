import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>gibify</title>
        <meta name="description" content="Evandro Gibicoski by gibify" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
          <a
            href="https://parallel-broker-b39.notion.site/Controlled-and-Uncontrolled-Components-918dc4ae9aca4b978e70577fb0eda1f9"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              React-JS <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Controlled and Uncontrolled Components
            </p>
          </a>
        </div>
      </main>
    </>
  )
}

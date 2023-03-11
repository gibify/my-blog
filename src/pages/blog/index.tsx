
import { Inter } from '@next/font/google'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Blog() {
  return (
    <>
      <Head>
        <title>Gibify | Blog</title>
        <meta name="description" content="Learn about React Controlled Components and how they work in React applications." />
        <meta name="description" content="O que é leads, prospects e customers e que significa esses termos?" />
        <meta name="og:title" content="Controlled and Uncontrolled Components in React" />
        <meta name="og:title" content="Leads, Prospects, Customers." />
        <meta name="og:url" content="https://www.gibify.dev/" />
        <script
          async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9394287397785778"
          crossOrigin="anonymous">
        </script>
      </Head>
      <header className={styles.header}>
        <Link href="/" className={inter.className}>
          Home
        </Link>
      </header>
      <section className={styles.main}>
        <div className={styles.grid}>
          <a
            href="https://parallel-broker-b39.notion.site/Controlled-and-Uncontrolled-Components-918dc4ae9aca4b978e70577fb0eda1f9"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              React <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Controlled and Uncontrolled Components
            </p>
          </a>
          <a
            href="https://www.notion.so/Leads-Prospects-Customers-2aa51863e47d4dd8b714e4345e3ba63a?pvs=4"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              MKT & Sales <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Leads, Prospects e Customers.
            </p>
          </a>
        </div>
      </section>
    </>
  )
}
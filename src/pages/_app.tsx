import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <!-- Google tag (gtag.js) --> */}
      <Script
        strategy="lazyOnload"
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-PN4S4WTPE8" ></Script>
      <Script strategy="lazyOnload" id="ga">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-PN4S4WTPE8', {
          page_path: window.location.pathname,
        });
        `}
      </Script>

      <Component {...pageProps} />
    </>
  )
}

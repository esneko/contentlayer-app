import Head from 'next/head'
import { Header } from '../components/Header'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Contentlayer example</title>
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
      </Head>

      <Header />

      <div className="px-6">
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp

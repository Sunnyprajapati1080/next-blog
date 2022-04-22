import Navbar from '../components/Navbar'
import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>codeloggers - platform for coders</title>
        <meta name="description" content="a platform for bloggers especially for coders who want to learn and grow and also for coders who want to share their knowledge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

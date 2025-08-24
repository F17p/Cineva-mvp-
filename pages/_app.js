import '../styles/globals.css'
import Header from '../components/Header'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

import '@/styles/globals.css'
import Footer from '../components/Footer'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

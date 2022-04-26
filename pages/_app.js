import '../styles/globals.css'
import { MoralisProvider } from 'react-moralis'
import { TinderProvider } from '../context/TinderContext'

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl='https://bn17knvygtzt.usemoralis.com:2053/server'
      appId='vwa5J7m18a5yUb1St5caXNaxY93RImht4T0RQFgP'
    >
      <TinderProvider>
        <Component {...pageProps} />
      </TinderProvider>
    </MoralisProvider>
  )
}

export default MyApp
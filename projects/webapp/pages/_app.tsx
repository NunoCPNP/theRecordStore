import type { AppProps } from 'next/app'
import { GlobalStyles } from '@therecordstore/themeprovider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  )
}

export default MyApp

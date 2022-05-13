import type { AppProps } from 'next/app'
import { GlobalStyles } from '@therecordstore/themeprovider'

import { FeatureToggle } from '../context'
import { DefaultLayout } from '../layouts'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <FeatureToggle>
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </FeatureToggle>
      <GlobalStyles />
    </>
  )
}

export default MyApp

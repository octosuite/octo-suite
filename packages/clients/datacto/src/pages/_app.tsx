import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'

import { AppProps } from 'next/app'
import Head from 'next/head'
import { PersistGate } from 'redux-persist/integration/react'

import { GlobalStyle } from '@shared/styles'

import { store, persistor } from '~/store'

import '@shared/components/Codicon/styles.css'
import 'react-perfect-scrollbar/dist/css/styles.css'

export default function (props: AppProps) {
  const { Component, pageProps } = props

  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <React.Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <title>Datacto</title>
      </Head>

      <ReduxProvider store={store}>
        <PersistGate persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </ReduxProvider>

      <GlobalStyle />
    </React.Fragment>
  )
}

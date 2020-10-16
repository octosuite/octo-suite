import React from 'react'

import { AppProps } from 'next/app'
import Head from 'next/head'

import { GlobalStyle } from '@shared/styles'

import '@shared/components/Codicon/styles.css'

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

      <Component {...pageProps} />

      <GlobalStyle />
    </React.Fragment>
  )
}

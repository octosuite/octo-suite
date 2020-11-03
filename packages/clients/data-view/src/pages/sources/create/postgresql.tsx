import React from 'react'

import Head from 'next/head'

import { PostgreSQLSourceForm } from '~/components/Forms/PostgreSQLSource'

const PorgreSQLSourceCreator: React.FC = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Octo DataView - New Data Source (PostgreSQL)</title>
      </Head>

      <PostgreSQLSourceForm />
    </React.Fragment>
  )
}

export default PorgreSQLSourceCreator

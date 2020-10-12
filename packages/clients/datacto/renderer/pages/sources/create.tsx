import React from 'react';
import Head from 'next/head';

import { PostgreSQLDialog } from '~/dialogs/PostgreSQL'

const SourcesCreator: React.FC = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Datacto - New Data Source (PostgreSQL)</title>
      </Head>

      <PostgreSQLDialog />
    </React.Fragment>
  );
};

export default SourcesCreator;
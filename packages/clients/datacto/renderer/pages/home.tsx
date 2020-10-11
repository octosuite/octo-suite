import React from 'react';
import Head from 'next/head';

import { MdInbox, MdSearch } from 'react-icons/md'

import { ActivityBar, Layout, Content } from '@shared/components';

const Home = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Datacto - Home</title>
      </Head>

      <Layout>
        <ActivityBar onActiveItemChange={console.log} initialItem="database">
          <ActivityBar.Item name="database" icon={<MdInbox />} />
          <ActivityBar.Item name="search" icon={<MdSearch />} />
        </ActivityBar>

        <Content>
          <h1>Home</h1>
        </Content>
      </Layout>
    </React.Fragment>
  );
};

export default Home;

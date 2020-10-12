import React, { useEffect } from 'react';
import Head from 'next/head';

import { ipcRenderer } from 'electron'

import { MdInbox, MdSearch } from 'react-icons/md'

import { ActivityBar, Layout, Content, Sidebar, TabBar, StatusBar } from '@shared/components';

const Home = () => {
  useEffect(() => {
    ipcRenderer.send('openSourceCreator')
  }, [])

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

        <Content hasSidebar>
          <Sidebar title="Database" />

          <TabBar />
        </Content>

        <StatusBar />
      </Layout>
    </React.Fragment>
  );
};

export default Home;

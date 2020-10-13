import React, { useCallback } from 'react';
import Head from 'next/head';

import { ipcRenderer } from 'electron'

import { ActivityBar, Layout, Content, Sidebar, TabBar, StatusBar } from '@shared/components';

const Home = () => {
  const handleOpenSourceCreator = useCallback(() => {
    ipcRenderer.send('openSourceCreator')
  }, [])

  return (
    <React.Fragment>
      <Head>
        <title>Datacto - Home</title>
      </Head>

      <Layout>
        <ActivityBar onActiveItemChange={console.log} initialItem="database">
          <ActivityBar.Item name="database" icon="database" />
        </ActivityBar>

        <Content hasSidebar>
          <Sidebar title="Database" actions={[{ icon: 'ellipsis' }]}>
            <Sidebar.Section title="Sources" actions={[{ icon: 'add', onClick: handleOpenSourceCreator }, { icon: 'refresh' }, { icon: 'collapse-all' }]}>
            </Sidebar.Section>

            <Sidebar.Section title="Queries" actions={[{ icon: 'collapse-all' }]}>
            </Sidebar.Section>
          </Sidebar>

          <TabBar />
        </Content>

        <StatusBar />
      </Layout>
    </React.Fragment>
  );
};

export default Home;

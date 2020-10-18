import React, { useEffect } from 'react'

import Head from 'next/head'

import {
  ActivityBar,
  Layout,
  Content,
  Sidebar,
  TabBar,
  StatusBar
} from '@shared/components'

import { useSources } from '~/hooks/use-sources'
import { openNewPostgreSQLDataSource } from '~/windows/PostgreSQL/actions'

const Home = () => {
  const sources = useSources()

  useEffect(() => console.log(sources), [sources])

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
            <Sidebar.Section
              title="Sources"
              actions={[
                { icon: 'add', onClick: openNewPostgreSQLDataSource },
                { icon: 'refresh' },
                { icon: 'collapse-all' }
              ]}
            ></Sidebar.Section>

            <Sidebar.Section
              title="Queries"
              actions={[{ icon: 'collapse-all' }]}
            ></Sidebar.Section>
          </Sidebar>

          <TabBar />
        </Content>

        <StatusBar />
      </Layout>
    </React.Fragment>
  )
}

export default Home

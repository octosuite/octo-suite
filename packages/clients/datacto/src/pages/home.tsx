import React from 'react'

import Head from 'next/head'
import { type } from 'os'

import {
  ActivityBar,
  Layout,
  Content,
  Sidebar,
  TabBar,
  StatusBar,
  FolderList
} from '@shared/components'
import { ItemType } from '@shared/components/FolderList/types'

import { useSources } from '~/hooks/use-sources'
import { openNewPostgreSQLDataSource } from '~/windows/PostgreSQL/actions'

const Home = () => {
  const sources = useSources()

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
            >
              <FolderList
                items={sources.map(source => ({
                  type: ItemType.FOLDER,
                  name: source.name,
                  items: [
                    {
                      type: ItemType.FOLDER,
                      name: 'public',
                      items: [
                        {
                          type: ItemType.FOLDER,
                          name: 'tables',
                          items: [
                            {
                              type: ItemType.FILE,
                              name: 'users'
                            }
                          ]
                        },
                        {
                          type: ItemType.FOLDER,
                          name: 'views'
                        }
                      ]
                    }
                  ]
                }))}
              />
            </Sidebar.Section>

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

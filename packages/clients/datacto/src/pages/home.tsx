import React from 'react'

import Head from 'next/head'

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

import { PostgreSQLSourceIcon } from '~/components/SourceIcon/PostgreSQL'
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
                  icon: <PostgreSQLSourceIcon width={16} height={16} />,
                  name: source.name,
                  items: [
                    {
                      type: ItemType.FOLDER,
                      name: 'public',
                      icon: 'folder',
                      items: [
                        {
                          type: ItemType.FOLDER,
                          name: 'tables',
                          icon: 'folder',
                          items: [
                            {
                              type: ItemType.FILE,
                              name: 'users',
                              icon: 'file'
                            }
                          ]
                        },
                        {
                          type: ItemType.FOLDER,
                          name: 'views',
                          icon: 'folder'
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

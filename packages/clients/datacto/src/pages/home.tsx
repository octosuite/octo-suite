import React, { useMemo } from 'react'

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
import { FolderItem, ItemType } from '@shared/components/FolderList/types'

import { useTypedSelector } from '~/store'
import { openNewPostgreSQLDataSource } from '~/windows/PostgreSQL/actions'

const Home = () => {
  const { sources } = useTypedSelector(state => state.sources)

  const folders = useMemo((): FolderItem[] => {
    return sources.map(({ name }) => ({
      type: ItemType.FOLDER,
      name,
      icon: 'folder'
    }))
  }, [sources])

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
              <FolderList items={folders} />
            </Sidebar.Section>
          </Sidebar>

          <TabBar />
        </Content>

        <StatusBar />
      </Layout>
    </React.Fragment>
  )
}

export default Home

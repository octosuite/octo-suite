import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'

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

import { useFolders } from '~/hooks/use-folders'
import { useTypedSelector } from '~/store'
import { loadProviderRequest } from '~/store/modules/providers/actions'
import { openNewPostgreSQLDataSource } from '~/windows/PostgreSQL/actions'

const Home = () => {
  const dispatch = useDispatch()

  const { sources } = useTypedSelector(state => state.sources)

  const folders = useFolders()

  const loadSourcesData = useCallback(() => {
    sources.forEach(source => dispatch(loadProviderRequest(source)))
  }, [sources, dispatch])

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
                { icon: 'refresh', onClick: loadSourcesData },
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

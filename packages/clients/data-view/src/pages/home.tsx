import React, { useCallback, useRef } from 'react'
import { useDispatch } from 'react-redux'

import Head from 'next/head'

import {
  ActivityBar,
  Layout,
  Content,
  Sidebar,
  TabView,
  TabViewHandles,
  StatusBar,
  FolderList,
  FileItem
} from '@shared/components'

import { useFolders } from '~/hooks/use-folders'
import { useTypedSelector } from '~/store'
import { loadProviderRequest } from '~/store/modules/providers/actions'
import { openNewPostgreSQLDataSource } from '~/windows/PostgreSQL/actions'

const Home = () => {
  const dispatch = useDispatch()
  const tabRef = useRef<TabViewHandles>(null)

  const { sources } = useTypedSelector(state => state.sources)

  const folders = useFolders()

  const loadSourcesData = useCallback(() => {
    sources.forEach(source => dispatch(loadProviderRequest(source)))
  }, [sources, dispatch])

  const handleItemClick = useCallback(
    (fileItem: FileItem) => {
      if (!tabRef.current) return

      const items = tabRef.current.getItems()

      const itemIndex = items.findIndex(({ id }) => id === fileItem.name)

      if (itemIndex === -1) {
        tabRef.current.addItem({
          id: fileItem.name,
          header: {
            icon: 'activate-breakpoints',
            label: fileItem.name
          },
          render: () => <h1>{fileItem.name}</h1>
        })
      } else {
        tabRef.current.focusItem(items[itemIndex])
      }
    },
    [tabRef]
  )

  return (
    <React.Fragment>
      <Head>
        <title>Octo DataView - Home</title>
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
              <FolderList items={folders} onItemClick={handleItemClick} />
            </Sidebar.Section>
          </Sidebar>

          <TabView ref={tabRef} onTabChange={console.log} />
        </Content>

        <StatusBar />
      </Layout>
    </React.Fragment>
  )
}

export default Home

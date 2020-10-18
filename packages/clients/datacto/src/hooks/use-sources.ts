import { useEffect, useState } from 'react'

import { SourceData } from '~/core/domain/SourceData'
import { watchSources } from '~/store/sources/actionts'

export function useSources() {
  const [sources, setSources] = useState<SourceData[]>([])

  useEffect(() => {
    watchSources(setSources)
  }, [])

  return sources
}

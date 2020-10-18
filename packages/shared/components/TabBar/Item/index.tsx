import React from 'react'
import { MdFolder } from 'react-icons/md'

import { Container, Label } from './styles'

const TabBarItem: React.FC = () => {
  return (
    <Container>
      <MdFolder color="#999" />
      <Label>test</Label>
    </Container>
  )
}

export { TabBarItem }

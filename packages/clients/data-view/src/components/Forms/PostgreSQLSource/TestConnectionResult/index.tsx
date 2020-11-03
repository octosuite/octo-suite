import React from 'react'

import { Codicon } from '@shared/components'

import { Wrapper, IconWrapper, Message } from './styles'
import { TestConnectionResultProps } from './types'

const TestConnectionResult: React.VFC<TestConnectionResultProps> = ({
  success
}) => {
  return (
    <Wrapper>
      <IconWrapper className={success ? 'success' : 'failure'}>
        <Codicon name={success ? 'info' : 'error'} size={16} />
      </IconWrapper>

      <Message>
        {success ? 'Connection successfully' : 'Connection error'}
      </Message>
    </Wrapper>
  )
}

export { TestConnectionResult }

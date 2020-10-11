import React, { useState } from 'react';

import { MdKeyboardArrowDown, MdKeyboardArrowRight, MdRefresh, MdUnfoldMore } from 'react-icons/md'

import { SidebarSectionHeaderItem } from './Item'
import { Wrapper, Container, Title } from './styles';

const SidebarSectionHeader: React.FC = () => {
  const [expanded, setExpanded] = useState(true)

  return (
    <Wrapper onClick={() => setExpanded(old => !old)}>
      {expanded ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
      <Title>Project Name</Title>

      <Container>
        <SidebarSectionHeaderItem icon={<MdRefresh />} />
        <SidebarSectionHeaderItem icon={<MdUnfoldMore />} />
      </Container>
    </Wrapper>
  );
}

export { SidebarSectionHeader }
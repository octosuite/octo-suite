import React from 'react';

import { MdAdd, MdUnfoldLess, MdMoreHoriz } from 'react-icons/md'

import { SidebarHeaderItem } from './Item'
import { Wrapper, Container, Title } from './styles';
import { SidebarHeaderProps } from "./types";

const SidebarHeader: React.VFC<SidebarHeaderProps> = ({ title }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>

      <Container>
        <SidebarHeaderItem icon={<MdAdd />} disabled />
        <SidebarHeaderItem icon={<MdUnfoldLess />} />
        <SidebarHeaderItem icon={<MdMoreHoriz />} />
      </Container>
    </Wrapper>
  );
}

export * from './types'
export { SidebarHeader };
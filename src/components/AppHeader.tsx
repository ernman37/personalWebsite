import React from 'react';

import { Anchor, Nav, Box, Header, Menu, ResponsiveContext } from 'grommet';
import { Grommet as GrommetIcon, Menu as MenuIcon } from 'grommet-icons';

export const AppHeader = () => (
  <Header background="light-3" pad="small">
    <Box alignSelf="center">
      Ernests Website
    </Box>
    <Nav direction="row">
      <Anchor label="Experience" href="experience" />
      <Anchor label="Projects" href="projects"/>
      <Anchor label="Education" href="education"/>
      <Anchor label="About" href="about" />
    </Nav>
  </Header>
);
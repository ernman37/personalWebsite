import React from 'react';

import { Anchor, Nav, Box, Header, Avatar, Text } from 'grommet';
import { Grommet as GrommetIcon, Menu as MenuIcon } from 'grommet-icons';
import Ernest from '../photos/Ernest-Duckworth.jpeg';

export const AppHeader = () => (
  <Header background="light-3" pad="small">
    <Box direction='row' alignSelf="center">
      <Avatar src={Ernest}/>
      <Text alignSelf="center" margin="small">
        Ernests Website
      </Text>
    </Box>
    <Nav direction="row">
      <Anchor label="Experience" href="experience" />
      <Anchor label="Projects" href="projects"/>
      <Anchor label="Education" href="education"/>
      <Anchor label="About" href="about" />
    </Nav>
  </Header>
);
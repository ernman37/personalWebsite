import React from 'react';

import { Anchor, Nav, Box, Header, Avatar, Menu, Text, ResponsiveContext } from 'grommet';
import { Grommet as GrommetIcon, Menu as MenuIcon } from 'grommet-icons';
import Ernest from '../photos/Ernest-Duckworth.jpeg';

export const AppHeader = () => (
  <Header background="light-3" pad="medium" height="xsmall">
    <Box direction='row'>
      <Avatar src={Ernest}/>
      <Text alignSelf="center" margin="small">
        Ernests Website
      </Text>
    </Box>
    <ResponsiveContext.Consumer>
      {(size) =>
        size === 'small' ? (
          <Box justify="end">
            <Menu
              a11yTitle="Navigation Menu"
              dropProps={{ align: { top: 'bottom', right: 'right' } }}
              icon={<MenuIcon color="brand" />}
              items={[
                {
                  label: <Box pad="small">Education</Box>,
                  href: '/education',
                }
              ]}
            />
          </Box>
        ) : (
          <Box justify="end" direction="row" gap="medium">
            <Nav direction="row">
              <Anchor label="Experience" href="experience" />
              <Anchor label="Projects" href="projects"/>
              <Anchor label="Education" href="education"/>
              <Anchor label="About" href="about" />
            </Nav>
          </Box>
        )
      }
    </ResponsiveContext.Consumer>
  </Header>
);
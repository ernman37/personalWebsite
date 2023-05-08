import React, { useState, Fragment } from 'react';
import { Anchor, Nav, Box, Header, Avatar, Menu, Text, ResponsiveContext } from 'grommet';
import { Grommet as GrommetIcon, Menu as MenuIcon } from 'grommet-icons';
import Ernest from '../photos/Ernest-Duckworth.jpeg';

export const AppHeader = () => {
  const curPage: string = (window.location.pathname === "/") 
    ? "/Home" 
    : window.location.pathname;
  const pages: string[] = [
    'Education',
    'Experience',
    'Projects',
    'About',
    'Home'
  ];

  const getMenuItems = () => {
    const availablePages = pages.filter((page) => ("/" + page !== curPage));
    return availablePages.map((page) => {
      return {
        label: <Box pad="small">{page}</Box>,
        href: (page === "Home" ? "/" : page),
      };
    })
  };

  const getNavItems = () => {
    const availablePages = pages.filter((page) => "/" + page !== curPage);
    return availablePages.map((page) => {
      if("/" + page === curPage)
        return (<Fragment key="page"></Fragment>);
      return (
        <Anchor 
          key={page}
          label={page}
          href={page === "Home" ? "/" : page}
        />
      );
    })
  };

  return (
    <Header background="light-3" pad="medium" height="10vh">
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
                onSelect={(e) => console.log(e)}
                a11yTitle="Navigation Menu"
                dropProps={{ align: { top: 'bottom', right: 'right' } }}
                icon={<MenuIcon color="brand" />}
                items={getMenuItems()}
              />
            </Box>
          ) : (
            <Box justify="end" direction="row" gap="medium">
              <Nav direction="row">
                {getNavItems()}
              </Nav>
            </Box>
          )
        }
      </ResponsiveContext.Consumer>
    </Header>
  )
};
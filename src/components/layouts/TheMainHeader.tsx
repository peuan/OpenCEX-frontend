"use client";

import { Menu } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Container,
  Link,
  List,
  ListItem,
  ListItemText,
  Stack,
} from "@mui/material";
import { useState } from "react";
import NextLink from "next/link";
import MobileMenu from "./MobileMenu";

const menuItems = [
  {
    href: "/",
    label: "หน้าหลัก",
  },
  {
    href: "/about",
    label: "เกี่ยวกับเรา",
  },
];

const TheMainHeader = () => {
  const [isMobileMenu, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenu);
  };

  const menuContent = (
    <List
      sx={{
        "& a": {
          textDecoration: "unset",
        },
      }}
    >
      {menuItems.map((item, index) => {
        return (
          <>
            <Link key={index} component={NextLink} href={item.href} passHref>
              <ListItem onClick={handleMobileMenuToggle}>
                <ListItemText primary={item.label} />
              </ListItem>
            </Link>
          </>
        );
      })}
    </List>
  );

  return (
    <Box
      component="header"
      sx={{
        zIndex: 1,
        width: "100%",
        position: "fixed",
        top: 0,
        py: {
          xs: 1,
          md: 1.5,
        },
        background: theme => theme.palette.background.paper,
      }}
    >
      <Container>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          gap={2}
        >
          <Stack
            sx={{
              display: {
                xs: "flex",
                md: "none",
              },
              alignItems: "center",
            }}
          >
            <Menu sx={{ color: "#fff" }} onClick={handleMobileMenuToggle} />
            <MobileMenu
              menuContent={menuContent}
              isOpen={isMobileMenu}
              onDrawerToggle={handleMobileMenuToggle}
            />
          </Stack>
          <Stack alignItems="center">
            <NextLink href="/">
              <Avatar sx={{ width: 50, height: 50 }} src="/logo.png" />
            </NextLink>
          </Stack>
          <Stack direction="row" gap={1}>
            {menuItems.map((menuItem) => {
              return (
                <Link
                  key={menuItem.href}
                  component={NextLink}
                  href={menuItem.href}
                >
                  {menuItem.label}
                </Link>
              );
            })}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default TheMainHeader;

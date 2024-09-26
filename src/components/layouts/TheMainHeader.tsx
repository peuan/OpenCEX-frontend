"use client";

import { Menu } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Container,
  ListItemText,
  MenuItem,
  MenuList,
  Stack,
} from "@mui/material";
import NextLink from "next/link";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

const menuItems = [
  {
    href: "/",
    label: "Wallet",
  },
  {
    href: "/",
    label: "Exchange",
  },
  {
    href: "/",
    label: "Quick Swap",
  },
  {
    href: "/",
    label: "Fees",
  },
];

const TheMainHeader = () => {
  const [isMobileMenu, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenu);
  };

  const menuContent = (
    <MenuList
      sx={{
        "& a": {
          textDecoration: "unset",
        },
      }}
    >
      {menuItems.map((item, index) => {
        return (
          <MenuItem
            key={index}
            component={NextLink}
            href={item.href}
            onClick={handleMobileMenuToggle}
          >
            <ListItemText primary={item.label} />
          </MenuItem>
        );
      })}
    </MenuList>
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
        background: (theme) => theme.palette.background.paper,
      }}
    >
      <Container>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          gap={2}
        >
          <Stack alignItems="center">
            <NextLink href="/">
              <Avatar
                sx={{ width: 180, height: 50 }}
                variant="square"
                src="/logo.svg"
              />
            </NextLink>
          </Stack>
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
          <Stack
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
            }}
            direction="row"
            gap={1}
          >
            <MenuList sx={{ display: "flex", flexDirection: "row" }}>
              {menuItems.map((menuItem) => {
                return (
                  <MenuItem
                    key={menuItem.href}
                    component={NextLink}
                    href={menuItem.href}
                  >
                    {menuItem.label}
                  </MenuItem>
                );
              })}
            </MenuList>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default TheMainHeader;

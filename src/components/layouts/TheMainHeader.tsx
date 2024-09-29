"use client"

import {
  Avatar,
  Box,
  Container,
  Divider,
  IconButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Stack,
} from "@mui/material"
import Hamburger from "hamburger-react"
import NextLink from "next/link"
import { useState } from "react"
import MobileMenu from "./MobileMenu"
import {
  CurrencyExchange,
  Insights,
  SwapHoriz,
  Wallet,
} from "@mui/icons-material"

const menuItems = [
  {
    href: "/",
    label: "Wallet",
    icon: Wallet,
  },
  {
    href: "/",
    label: "Exchange",
    icon: Insights,
  },
  {
    href: "/",
    label: "Quick Swap",
    icon: SwapHoriz,
  },
  {
    href: "/",
    label: "Fees",
    icon: CurrencyExchange,
  },
]

const TheMainHeader = () => {
  const [isMobileMenu, setMobileMenuOpen] = useState(false)

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenu)
  }

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
          <>
            <MenuItem
              key={index}
              sx={{ px: 3 }}
              component={NextLink}
              href={item.href}
              onClick={handleMobileMenuToggle}
            >
              <ListItemIcon>
                <item.icon />
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </MenuItem>
            <Divider
              sx={{ mt: "4px !important", mb: "4px !important" }}
              flexItem
            />
          </>
        )
      })}
    </MenuList>
  )

  return (
    <Box
      component="header"
      sx={{
        zIndex: 100,
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
            <IconButton onClick={handleMobileMenuToggle}>
              <Hamburger toggled={isMobileMenu} size={24} />
            </IconButton>
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
                    dense
                    key={menuItem.href}
                    component={NextLink}
                    href={menuItem.href}
                  >
                    <ListItemIcon sx={{ minWidth: "30px !important" }}>
                      <menuItem.icon />
                    </ListItemIcon>
                    <ListItemText>{menuItem.label}</ListItemText>
                  </MenuItem>
                )
              })}
            </MenuList>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}

export default TheMainHeader

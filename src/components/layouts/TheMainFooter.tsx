import { Facebook, Instagram, X } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid2,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import NextLink from "next/link";

const TheMainFooter = () => {
  return (
    <Stack component="footer">
      <Container sx={{ bgcolor: "background.paper", py: 2 }}>
        <Grid2 container spacing={2}>
          <Grid2 size={{ xs: 12, md: 3.5 }}>
            <Stack gap={1}>
              <Link component={NextLink} href="/">
                <Avatar
                  sx={{ width: 180, height: 50 }}
                  variant="square"
                  src="/logo.svg"
                />
              </Link>
              <Typography variant="h5" fontWeight="bold">
                Let&apos;s talk!
              </Typography>
              <Typography color="text.secondary">+12 345 678 9101</Typography>
              <Typography color="text.secondary">
                Info.Avitex@Gmail.Com
              </Typography>
              <Typography color="text.secondary">
                Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522
              </Typography>
            </Stack>
          </Grid2>
          <Grid2 size={{ xs: 6, md: 2.5 }}>
            <Stack gap={1}>
              <Typography variant="h6">Products</Typography>
              <Link component={NextLink} href="/">
                Quick Swap
              </Link>
              <Link component={NextLink} href="/">
                Exchange
              </Link>
              <Link component={NextLink} href="/">
                Wallet
              </Link>
            </Stack>
          </Grid2>
          <Grid2 size={{ xs: 6, md: 2.5 }}>
            <Stack gap={1}>
              <Typography variant="h6">Information</Typography>
              <Link component={NextLink} href="/">
                Support
              </Link>
              <Link component={NextLink} href="/">
                Fees and Limits
              </Link>
              <Link component={NextLink} href="/">
                Settings
              </Link>
            </Stack>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 3.5 }}>
            <Stack gap={1}>
              <Typography variant="h6">
                Trade on the go with PuperCEX
              </Typography>
              <Typography color="text.secondary">
                Get 24/7 chat support with our friendly customer agents at your
                service.
              </Typography>
              <Box>
                <Button variant="contained">Login</Button>
              </Box>
            </Stack>
          </Grid2>
        </Grid2>
      </Container>
      <Container
        sx={{ display: "flex", justifyContent: "space-between", gap: 2, py: 2 }}
      >
        <Typography color="text.secondary">
          Copyright © 2022 Themesflat
        </Typography>
        <Stack direction="row" gap={1} sx={{ color: "text.secondary" }}>
          <Facebook />
          <X />
          <Instagram />
        </Stack>
      </Container>
    </Stack>
  );
};

export default TheMainFooter;

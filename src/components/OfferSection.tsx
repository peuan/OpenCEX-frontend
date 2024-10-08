"use client";
import {
  Avatar,
  Box,
  Container,
  Grid2,
  Stack,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import { defaultAnimate, imageAnimate } from "~/constants/animate.constant";

const offers = [
  {
    logoUrl: "/images/secure.png",
    title: "Secure Wallets",
    description: "Keep your digital assets in user wallets",
  },
  {
    logoUrl: "/images/operation.png",
    title: "Operating Speed",
    description: "Maximum processing speed of your transactions.",
  },
  {
    logoUrl: "/images/support.png",
    title: "24/7 Support",
    description: "Instant, friendly and always ready to help.",
  },
];

const OfferSection = () => {
  return (
    <Container component="section" sx={{ py: 4 }}>
      <Box component={motion.div} {...defaultAnimate}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            paddingBottom: "1rem",
            textAlign: "center",
          }}
        >
          Why Choose Us
        </Typography>
      </Box>
      <Grid2 container>
        {offers.map((offer) => {
          return (
            <Grid2 size={{ xs: 12, md: 4 }} key={offer.title}>
              <Stack gap={4} alignItems="center">
                <Box component={motion.div} {...imageAnimate}>
                  <Avatar
                    sx={{ width: 100, height: "auto" }}
                    variant="square"
                    src={offer.logoUrl}
                  />
                </Box>
                <Box
                  component={motion.div}
                  {...defaultAnimate}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h4">{offer.title}</Typography>
                  <Typography sx={{ textAlign: "center" }}>
                    {offer.description}
                  </Typography>
                </Box>
              </Stack>
            </Grid2>
          );
        })}
      </Grid2>
    </Container>
  );
};

export default OfferSection;

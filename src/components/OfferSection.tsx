import { Avatar, Container, Grid2, Stack, Typography } from "@mui/material";

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
      <Grid2 container>
        {offers.map((offer) => {
          return (
            <Grid2 size={{ xs: 12, md: 4 }} key={offer.title}>
              <Stack gap={4} alignItems="center">
                <Avatar
                  sx={{ width: 100, height: "auto" }}
                  variant="square"
                  src={offer.logoUrl}
                />
                <Stack gap={2} alignItems="center">
                  <Typography variant="h4">{offer.title}</Typography>
                  <Typography>{offer.description}</Typography>
                </Stack>
              </Stack>
            </Grid2>
          );
        })}
      </Grid2>
    </Container>
  );
};

export default OfferSection;

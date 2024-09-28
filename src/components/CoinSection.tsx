"use client";
import { Card, Grid2 } from "@mui/material";
import CoinCard from "./cards/CoinCard";
import { Paid } from "@mui/icons-material";

const coins = [
  {
    name: "Bitcoin",
    symbol: "BTC/USD",
    price: 46168.95,
    previousPrice: 36641.2,
    percentageChange: -0.79,
    iconUrl: "/logo.svg",
    icon: Paid,
  },
  {
    name: "Ethereum",
    symbol: "ETH/USD",
    price: 3480.04,
    previousPrice: 36641.2,
    percentageChange: 10.55,
    iconUrl: "/logo.svg",
    icon: Paid,
  },
  {
    name: "Tether",
    symbol: "USDT/USD",
    price: 1.0,
    previousPrice: 1.0,
    percentageChange: -0.01,
    iconUrl: "/logo.svg",
    icon: Paid,
  },
  {
    name: "BNB",
    symbol: "BNB/USD",
    price: 443.56,
    previousPrice: 36641.2,
    percentageChange: -1.24,
    iconUrl: "/logo.svg",
    icon: Paid,
  },
];

const CoinSection: React.FC = () => {
  return (
    <Card
      variant="outlined"
      elevation={2}
      component="section"
      sx={{
        py: 4,
        px: 2,
        background: (theme) => theme.palette.background.secondary,
      }}
    >
      <Grid2 container spacing={2}>
        {coins.map((coin) => (
          <Grid2 key={coin.name} size={{ xs: 12, md: 3 }}>
            <CoinCard {...coin} />
          </Grid2>
        ))}
      </Grid2>
    </Card>
  );
};

export default CoinSection;

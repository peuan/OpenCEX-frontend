"use client";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  Chip,
  Stack,
  useTheme,
} from "@mui/material";
import { green, red } from "@mui/material/colors";

interface CoinCardProps {
  isHighlight?: boolean;
  name: string;
  symbol: string;
  price: number;
  previousPrice: number;
  percentageChange: number;
  iconUrl: string;
}

const CoinCard: React.FC<CoinCardProps> = ({
  isHighlight,
  name,
  symbol,
  price,
  previousPrice,
  percentageChange,
  iconUrl,
}) => {
  const theme = useTheme();
  const isPositiveChange = percentageChange > 0;

  return (
    <Card
      sx={{
        cursor: "pointer",
        background: theme.palette.background.secondary,

        ...(isHighlight ? { background: theme.palette.background.light } : {}),

        ":hover": {
          background: theme.palette.background.light,
        },
      }}
    >
      <CardContent component={Stack} gap={1}>
        <Box display="flex" alignItems="center" gap={1}>
          <Avatar src={iconUrl} alt={name} />
          <Typography variant="h6">{name}</Typography>
          <Typography variant="body2" color="textSecondary">
            {symbol}
          </Typography>
        </Box>
        <Typography variant="h5" fontWeight="bold">
          USD {price.toFixed(2)}
        </Typography>
        <Stack direction="row" gap={1} alignItems="center">
          <Typography variant="body2" color="textSecondary">
            {previousPrice.toFixed(2)}
          </Typography>
          <Chip
            label={`${isPositiveChange ? "+" : ""}${percentageChange.toFixed(
              2
            )}%`}
            size="small"
            sx={{
              backgroundColor: isPositiveChange ? green[500] : red[500],
            }}
          />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default CoinCard;

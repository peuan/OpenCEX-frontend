'use client'
import { Box, Stack, Typography } from "@mui/material";
import CoinPriceChart from "./charts/CoinPriceChart";
import { motion } from "framer-motion";
import { defaultAnimate } from "~/constants/animate.constant";

const CoinPriceSection = () => {
  return (
    <Box component="section" sx={{ py: 4, px: 2 }}>
      <Box component={motion.div} {...defaultAnimate}>
        <Stack gap={2}>
          <Typography textAlign="center" variant="h5">
            MVPX Currency Price: 10.0000 USD
          </Typography>
          <CoinPriceChart />
        </Stack>
      </Box>
    </Box>
  );
};

export default CoinPriceSection;

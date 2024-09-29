"use client"
import { Box, Typography, Button } from "@mui/material"
import Image from "next/image"
import { motion } from "framer-motion"
import PaidIcon from "@mui/icons-material/Paid"
import Banner from "../../public/images/banner-2.png"
import { imageAnimate } from "~/constants/animate.constant"

const HeroSection = () => {
  // Framer Motion animation variants

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: { xs: "center", md: "space-between" },
        alignItems: "center",
        flexDirection: { xs: "column-reverse", md: "row" },
        padding: { xs: "1rem", md: "2rem" },
        backgroundColor: "background.default",
        color: "text.primary",
        minHeight: "calc(100vh - 98px)",
      }}
    >
      <Box
        sx={{
          textAlign: { xs: "center", md: "left" },
          marginTop: { xs: "2rem", md: 0 },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: "bold",
            paddingBottom: "1rem",
            color: "text.primary",
            fontSize: { xs: "2rem", md: "5rem" },
          }}
        >
          Start Your Crypto Business
        </Typography>
        <Typography
          variant="h5"
          sx={{
            paddingBottom: "2rem",
            color: "text.primary",
            fontSize: { xs: "1.2rem", md: "1.5rem" },
          }}
        >
          Trade crypto in the easiest and safest way!
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "text.primary",
            paddingBottom: "2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "center", md: "flex-start" },
          }}
        >
          <PaidIcon sx={{ marginRight: "0.5rem" }} /> BTC Price: 65175.43 USDT
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{
            backgroundColor: "primary.main",
            borderRadius: "2rem",
            padding: { xs: "0.5rem 1.5rem", md: "0.75rem 2rem" },
            textTransform: "none",
            fontWeight: "bold",
          }}
        >
          Trade Bitcoin Now
        </Button>
      </Box>

      {/* Animated Image Section */}
      <Box
        component={motion.div} // Wrap the Box with motion
        {...imageAnimate}
        sx={{
          position: "relative",
          width: { xs: "100%", md: "600px" },
          height: { xs: "400px", md: "600px" }, // Explicit height and width
        }}
      >
        <Image
          src={Banner}
          layout="fill" // Fill the container
          objectFit="contain"
          alt="Crypto exchange hero graphic"
        />
      </Box>
    </Box>
  )
}

export default HeroSection

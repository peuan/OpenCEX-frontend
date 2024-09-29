"use client"
import {
  Box,
  Typography,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css" // Import Swiper styles
import "swiper/css/navigation"
import "swiper/css/pagination"
import Image from "next/image" // Next.js optimized Image component
import React from "react"
import Illustration from "../../public/images/Illustration.png"
import Banner from "../../public/images/banner-03.png"
import { motion } from "framer-motion"
import { defaultAnimate, imageAnimate } from "~/constants/animate.constant"
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules"

const ContentSection: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // Stack vertically on mobile
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "background.default",
        color: "text.primary",
        paddingBottom: "4rem",
        gap: { xs: "2rem", md: "0" }, // Add spacing between sections on mobile
      }}
    >
      {/* Swipeable Image Carousel */}
      <Box
        sx={{
          flexBasis: { xs: "100%", md: "50%" },
          position: "relative",
          display: "flex",
          alignItems: "center",
          width: "100%",
          height: "100%",
          py: { xs: 12, md: 0 },
        }}
      >
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          autoplay
          pagination={{ clickable: true }}
          loop={true} // Infinite looping
          style={{
            maxWidth: "100%",
            width: "100%",
            position: "absolute",
            padding: "2rem",
          }}
        >
          <SwiperSlide>
            <Box
              component={motion.div} // Wrap the Box with motion
              {...imageAnimate}
              sx={{
                height: {
                  xs: "200px",
                  md: "400px",
                },
              }}
            >
              <Image
                src={Illustration}
                layout="fill" // Fill the container
                objectFit="contain"
                alt="Service Providers"
              />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              component={motion.div} // Wrap the Box with motion
              {...imageAnimate}
              sx={{
                height: {
                  xs: "200px",
                  md: "400px",
                },
              }}
            >
              <Image
                src={Banner}
                layout="fill" // Fill the container
                objectFit="contain"
                alt="Service Providers"
              />
            </Box>
          </SwiperSlide>
        </Swiper>
      </Box>

      {/* Text and Button Section */}
      <Box
        component={motion.div}
        viewport={{ amount: 0.2 }}
        {...defaultAnimate}
        sx={{
          flexBasis: { xs: "100%", md: "50%" },
          paddingLeft: { xs: "0", md: "2rem" }, // Padding for desktop view
          marginTop: { xs: "2rem", md: "0" }, // Margin for spacing on mobile
          textAlign: { xs: "center", md: "left" }, // Center text on mobile
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            paddingBottom: "1rem",
          }}
        >
          User-friendly and fast interface
        </Typography>
        <Typography
          variant="h5"
          sx={{
            paddingBottom: "2rem",
            color: "text.primary",
            fontSize: { xs: "1.2rem", md: "1.5rem" },
          }}
        >
          Trading crypto has never been so easy and convenient. Smooth interface
          giving you the best experience.
        </Typography>

        <List>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon sx={{ color: "primary.main" }} />
            </ListItemIcon>
            <ListItemText
              primary="View real-time cryptocurrency prices"
              secondary="Experience A Variety Of Trading On Bitcost. You Can Use Various Types Of Coin Transactions."
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon sx={{ color: "primary.main" }} />
            </ListItemIcon>
            <ListItemText
              primary="Buy and sell BTC, ETH, XRP, OKB, etc..."
              secondary="Experience A Variety Of Trading On Bitcost. You Can Use Various Types Of Coin Transactions."
            />
          </ListItem>
        </List>

        <Button
          variant="contained"
          sx={{
            padding: "0.75rem 2rem",
            textTransform: "none",
            fontWeight: "bold",
            marginTop: "2rem",
          }}
        >
          Explore More
        </Button>
      </Box>
    </Box>
  )
}

export default ContentSection

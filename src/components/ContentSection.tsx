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
          py: { xs: 14, md: 0 },
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
                priority
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
                priority
              />
            </Box>
          </SwiperSlide>
        </Swiper>
      </Box>

      {/* Text and Button Section */}
      <Box
        component={motion.div}
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
          Flexible loyalty solutions for your members
        </Typography>
        <Typography
          variant="h5"
          sx={{
            paddingBottom: "2rem",
            color: "text.primary",
            fontSize: { xs: "1.2rem", md: "1.4rem" },
          }}
        >
          Our suite of solutions create new revenue streams for loyalty brands
          across airline, travel, hotel, retail and financial, enabling your
          members to do more with your points/miles.
        </Typography>

        <List>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon sx={{ color: "primary.main" }} />
            </ListItemIcon>
            <ListItemText
              primary="View real-time loyalty point conversion prices"
              secondary="Experience A Variety Of Loyalty Point Trading On MVP EX. 
You Can Use Various Types Of Point Transactions."
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon sx={{ color: "primary.main" }} />
            </ListItemIcon>
            <ListItemText
              primary="Buy and sell your favourite loyalty point to maximise your loyalty membership journey"
              secondary="Experience A Variety Of Loyalty Point Trading On MVP EX. 
You Can Use Various Types Of Point Transactions."
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

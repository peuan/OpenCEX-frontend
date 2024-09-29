import { MotionProps } from "framer-motion"

export const defaultAnimate: MotionProps = {
  initial: "hidden",
  whileInView: "visible",
  transition: { duration: 0.6 },
  variants: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
}

export const imageAnimate: MotionProps = {
  animate: "floating",
  variants: {
    floating: {
      y: [0, -10, 0], // Move up and down
      transition: {
        duration: 3, // Time for one full cycle
        ease: "easeInOut", // Smooth animation
        repeat: Infinity, // Infinite loop
      },
    },
  },
}

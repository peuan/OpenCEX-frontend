import { MotionProps } from "framer-motion";

export const defaultAnimate: MotionProps = {
  initial: "hidden",
  whileInView: "visible",
  transition: { duration: 0.6 },
  variants: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
};

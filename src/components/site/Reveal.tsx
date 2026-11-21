import { motion, type HTMLMotionProps } from "motion/react";

interface RevealProps extends HTMLMotionProps<"div"> {
  /** Position in a group — used to stagger the entrance. */
  index?: number;
  stagger?: number;
}

/** Fades and slides content up once it scrolls into view. Respects reduced motion via MotionConfig. */
export function Reveal({ index = 0, stagger = 0.08, children, ...rest }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * stagger }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

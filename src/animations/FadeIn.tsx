import { motion } from 'framer-motion';
import { useMemo } from 'react';

interface FadeInUpBoxProps {
  index: number;
  children: React.ReactNode;
}

const FadeInUpBox = ({ index = 0, children }: FadeInUpBoxProps) => {
  const transition = useMemo(
    () => ({
      duration: 0.4,
      delay: 0.25 + index * 0.1,
      ease: [0.42, 0, 0.58, 1],
    }),
    [index]
  );

  const variants = {
    hidden: { y: 24, opacity: 0, transition },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition,
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      exit="hidden"
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default FadeInUpBox;

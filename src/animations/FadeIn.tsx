import { motion } from 'framer-motion';
import { useMemo } from 'react';
import { useInView } from 'react-intersection-observer';

interface FadeInUpBoxProps {
  index?: number;
  style?: any;
  children: React.ReactNode;
}

const FadeInUpBox = ({ index = 0, style, children }: FadeInUpBoxProps) => {
  const { ref, inView } = useInView({
    threshold: 0.25,
    triggerOnce: true,
  });

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
      ref={ref}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      exit="hidden"
      variants={variants}
      style={style}
    >
      {children}
    </motion.div>
  );
};

export default FadeInUpBox;

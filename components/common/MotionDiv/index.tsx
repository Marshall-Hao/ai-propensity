import { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';

type TProps = {
  children: ReactNode;
  classNames?: string;
  mode: 'up' | 'down';
  delay: number;
};

const variants = {
  up: {
    hidden: { opacity: 0, x: 0, y: 10 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opactity: 0, x: 0, y: 10 },
  },
  down: {
    hidden: { opacity: 0, x: 0, y: -10 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opactity: 0, x: 0, y: -10 },
  },
};

const MotionDiv: FC<TProps> = ({
  children,
  mode,
  delay = 0,
  classNames = '',
}) => {
  return (
    <motion.div
      className={classNames}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ duration: 0.8, type: 'easeInOut', delay }}
      variants={variants[mode]}>
      {children}
    </motion.div>
  );
};

export default MotionDiv;

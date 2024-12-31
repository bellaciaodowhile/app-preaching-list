import { motion, AnimatePresence } from 'framer-motion';

const variants = {
  initial: { opacity: 0, x: -100 },
  enter: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 },
};

export const TransitionWrapper = ({ children }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={children.key}
        variants={variants}
        initial="initial"
        animate="enter"
        exit="exit"
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
import React from 'react';
import { motion } from 'framer-motion';

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full bg-white dark:bg-black">
      <div className="absolute inset-0 z-0 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <motion.div
        className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,0.15),rgba(255,255,255,0))]"
        animate={{
          x: [0, -200, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 right-auto top-auto h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(0,162,255,0.15),rgba(255,255,255,0))]"
        animate={{
          x: [0, 100, 0],
          y: [0, -200, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
    </div>
  );
};

export default Background;

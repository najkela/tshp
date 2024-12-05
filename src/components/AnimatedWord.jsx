import React from "react";
import { motion } from "framer-motion";
import './AnimatedText.css';

const Word = ({ text, isVisible }) => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 0 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {text}
    </motion.h1>
  );
};

export default Word;

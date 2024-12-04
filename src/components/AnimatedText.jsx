import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ScrollRevealText = () => {
  const texts = [" ", "Teaching", "Sharing", "Helping", "Programming"]; // Reči koje će se prikazivati
  const [visibleIndex, setVisibleIndex] = useState(-1); // Drži indeks trenutno vidljive reči

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newVisibleIndex = Math.min(Math.floor(scrollY / 50), texts.length - 1);
      setVisibleIndex(newVisibleIndex);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [texts.length]);

  return (
    <div>
      <h1>
        {texts.map((text, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={visibleIndex >= index ? { opacity: 1, y: 0 } : { opacity: 0, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              margin: "10px 0"
            }}
          >
            {text}
          </motion.div>
        ))}
      </h1>
    </div>
  );
};

export default ScrollRevealText;

import React, { useState, useEffect } from "react";
import AnimatedWord from './AnimatedWord.jsx';

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
    <>
        {texts.map((text, index) => (
            <AnimatedWord key={index} text={text} isVisible={visibleIndex >= index} />
        ))}
    </>
  );
};

export default ScrollRevealText;

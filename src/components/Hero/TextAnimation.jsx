import React, { useEffect, useState } from "react";
// import { useInterval } from 'react-use'
import Typed from "react-typed";
import { motion } from "framer-motion";

const TextAnimation = () => {
  const letters = Array.from("Bonjour, je m'appel Julien Rozelier");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="text-white h-[30%] xl:h-[40%] flex flex-col items-center justify-between text-center">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap items-center justify-center text-center w-[19rem] md:w-[32rem]"
      >
        {letters.map((letter, index) => (
          <motion.h1
            className="text-4xl font-[200] md:text-6xl"
            variants={child}
            key={index}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.h1>
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: "0.5" }}
      >
        <Typed
          typeSpeed={100}
          backSpeed={75}
          strings={["développeur front end"]}
          smartBackspace
          shuffle={false}
          backDelay={2.5}
          fadeOut={false}
          fadeOutDelay={200}
          showCursor
          cursorChar=""
          className="text-lg text-[#ffcf20]"
        />
      </motion.div>
    </div>
  );
};

export default TextAnimation;

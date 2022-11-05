import React, { useEffect } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import UseDarkMode from "../../../hook/UseDarkMode";
import { motion, AnimatePresence } from "framer-motion";

const SuccessModal = ({ setOpenModal, openModal }) => {
  const [colorTheme] = UseDarkMode();

  const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const modal = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "280px",
      opacity: 1,
      transition: { delay: 0.5 },
    },
  };

  const text = {
    hidden: {
      y: "10px",
      opacity: 0,
    },
    visible: {
      y: "-40px",
      opacity: 1,
      transition: { delay: 3.5 },
    },
  };

  return (
    <AnimatePresence exitBeforeEnter>
      {openModal && (
        <motion.div
          className="z-50 fixed inset-0 backdrop-blur-sm h-full w-full bg-black/[0.6] "
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={() => setOpenModal(false)}
        >
          <motion.div
            className="bg-white dark:bg-white rounded-2xl relative text-black dark:text-white w-[80%] h-1/3 xl:w-[20%] xl:h-[30%] flex flex-col justify-center items-center mx-auto"
            variants={modal}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {colorTheme === "dark" ? (
              <Player
                autoplay
                keepLastFrame={true}
                src="https://assets1.lottiefiles.com/packages/lf20_d3vw5gid.json"
                style={{ height: "200px", width: "200px" }}
              ></Player>
            ) : (
              <Player
                autoplay
                keepLastFrame={true}
                src="https://assets5.lottiefiles.com/packages/lf20_2iszWM.json"
                style={{ height: "200px", width: "200px" }}
              ></Player>
            )}
            <motion.h2
              className="text-2xl font-semibold absolute bottom-0"
              variants={text}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              Email envoyé
            </motion.h2>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SuccessModal;

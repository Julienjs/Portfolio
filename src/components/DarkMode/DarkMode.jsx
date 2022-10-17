import React from "react";
import { useLocation } from "react-router-dom";
import UseDarkMode from "../../hook/UseDarkMode";
import { styled } from "@mui/material/styles";
import { Tooltip, tooltipClasses } from "@mui/material";
import { motion } from "framer-motion";
import "./DarkMode.css";

const DarkMode = () => {
  const { pathname } = useLocation();
  const [colorTheme, setTheme] = UseDarkMode();

  const StyleTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor:
        colorTheme === "dark"
          ? theme.palette.common.white
          : theme.palette.common.black,
      color: colorTheme === "dark" ? "black" : "white",
      boxShadow: theme.shadows[1],
      fontSize: 12,
      fontWeight: "bold",
    },
  }));

  return (
    <motion.div
      initial={{ y: "-250" }}
      animate={{ y: 0 }}
      transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
      onClick={() => setTheme(colorTheme)}
      className={`text-2xl fixed z-50 top-4 right-4 xl:text-3xl cursor-pointer ${
        colorTheme === "dark"
          ? pathname === "/"
            ? "text-white"
            : "text-black"
          : "moon_colors "
      }`}
    >
      <StyleTooltip title="Dark-mode" placement="bottom">
        <ion-icon name="moon-outline"></ion-icon>
      </StyleTooltip>
    </motion.div>
  );
};

export default DarkMode;

import React, { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import UseDarkMode from "../../hook/UseDarkMode";
import { styled } from "@mui/material/styles";
import { Tooltip, tooltipClasses } from "@mui/material";
import { GoHome } from "react-icons/go";
import { BsPerson } from "react-icons/bs";
import { HiOutlineBriefcase, HiOutlineDocumentText } from "react-icons/hi";
import { BiBook, BiMessageDetail } from "react-icons/bi";
import { motion } from "framer-motion";
import "./Navbar.css";
// import icon from "../assets/person-outline.svg";

const Navbar = () => {
  const [active, setActive] = useState(0);
  const [colorTheme] = UseDarkMode();
  const navigate = useNavigate();
  const { pathname } = useLocation();

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

  const menu_1 = [
    { icon: "home-outline", text: "Accueil", link: "/" },
    { icon: "person-outline", text: "A propos", link: "/about" },
    { icon: "briefcase-outline", text: "Compétences", link: "/skills" },
  ];

  const menu_2 = [
    { icon: "book-outline", text: "Projets", link: "/projects" },
    { icon: "chatbox-outline", text: "Contact", link: "/contact" },
    { icon: "document-text-outline", text: "CV" },
  ];

  const navLink = (link) => {
    if (link) {
      navigate(link);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: "1", duration: "2" }}
      className="bottomNav grid grid-cols-2 gap-16 "
    >
      <div
        className={`text-2xl flex items-center gap-6 justify-center md:text-3xl
      ${pathname === "/" ? "text-white" : "text-gray-700 dark:text-white "}
      `}
      >
        {menu_1.map((list, i) => (
          <StyleTooltip key={i} title={list.text} placement="top">
            <ion-icon
              name={list.icon}
              onClick={() => navLink(list.link)}
            ></ion-icon>
          </StyleTooltip>
        ))}
      </div>
      <div
        className={`text-2xl flex items-center gap-6 justify-center md:text-3xl
      ${pathname === "/" ? "text-white" : "text-gray-700 dark:text-white "}
      `}
      >
        {menu_2.map((list, index) => (
          <StyleTooltip key={index} title={list.text} placement="top">
            <ion-icon
              onClick={() => navLink(list.link)}
              name={list.icon}
            ></ion-icon>
          </StyleTooltip>
        ))}
      </div>
      <label htmlFor="check" className="control-btn">
        <input
          type="checkbox"
          name="check"
          id="check"
          className="appearance-none "
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={30}
          className="ionicon"
          viewBox="0 0 512 512"
        >
          <title>Add</title>
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
            d="M256 112v288M400 256H112"
          />
        </svg>
      </label>
    </motion.div>
  );
};

export default Navbar;

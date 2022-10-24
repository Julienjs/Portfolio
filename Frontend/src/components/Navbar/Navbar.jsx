import React,{useState} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ToolTips from "../Tooltips";

import { motion } from "framer-motion";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const menu_1 = [
    {id:1, icon: "home-outline", text: "Accueil", link: "/" },
    {id:2, icon: "person-outline", text: "A propos", link: "/about" },
    {id:3, icon: "briefcase-outline", text: "Compétences", link: "/skills" },
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
      className="bottomNav grid grid-cols-2 gap-16"
    >
      <div
        className={`text-2xl flex items-center gap-6 justify-center md:text-3xl
      ${pathname === "/" ? "text-white" : "text-black dark:text-white "}
      
      `}
      >
        {menu_1.map((list, i) => (
          <ToolTips title={list.text} placement={"top"} key={`${list}-${i}`}>
            <ion-icon
              name={list.icon}
              onClick={() => navLink(list.link)}
            ></ion-icon>
          </ToolTips>
        ))}
      </div>
      <div
        className={`text-2xl flex items-center gap-6 justify-center md:text-3xl
      ${pathname === "/" ? "text-white" : "text-black dark:text-white "}
      `}
      >
        {menu_2.map((list, index) => (
          <ToolTips key={index} title={list.text} placement={"top"}>
            <ion-icon
              onClick={() => navLink(list.link)}
              name={list.icon}
            ></ion-icon>
          </ToolTips>
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
          className=""
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

import React from "react";
import TitleSection from ".././TitleSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Skills.css";
import { useNavigate } from "react-router-dom";
import { list } from "./../../services/ListSkills";

const Skills = () => {
  const navigate = useNavigate();

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center w-[98%] mx-auto text-black dark:text-white"
    >
      <TitleSection logo={"briefcase-outline"} title={"Compétences"} />
      <ul className=" w-full mt-5 xl:mt-28 flex flex-col xl:flex-row items-center justify-center">
        {list.map((li, index) => (
          <div
            key={index}
            className="list w-[80%] xl:w-[30%] h-[500px] xl:h-[450px] mb-3 flex flex-col items-center px-2 py-5 xl:py-2"
          >
            <FontAwesomeIcon
              icon={li.logo}
              className=" text-[#5333ed] text-9xl dark:text-yellow"
            />
            <h2 className="text-4xl font-light mb-10 mt-5">{li.text}</h2>
            {li.list.map((item, index) => (
              <li key={index} className="text-2xl font-extralight mb-2 ">
                {item}
              </li>
            ))}
          </div>
        ))}
      </ul>
      <button
        onClick={() => navigate("/about")}
        className="btn1 relative tracking-wider z-10 overflow-hidden border text-black dark:text-white text-2xl border-blue dark:border-yellow rounded-full w-40 h-14 py-5 flex items-center justify-center my-5 xl:mt-[3.8rem]"
      >
        À Propos
      </button>
    </section>
  );
};

export default Skills;

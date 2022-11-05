import React from "react";
import TitleSection from "./../TitleSection";
import Card from "./Card";
import Text from "./Text";
import "./About.css";

const About = () => {
  return (
    <section
      id="about"
      className="xl:relative min-h-screen flex flex-col items-center w-[98%] mx-auto text-black dark:text-white"
    >
      <TitleSection logo={"person-outline"} title={"À Propos"} />
      <div className="flex flex-col xl:flex-row w-11/12 justify-center items-center xl:h-[60rem] mt-10 xl:mt-0 2xl:mt-5">
        <Card />
        <Text />
      </div>
    </section>
  );
};

export default About;
//
//
//   </div>

import React from "react";
import TextAnimation from "./TextAnimation";
import LinkButton from "./LinkButton";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="sectionHero relative h-screen">
      <article className="absolute flex flex-col justify-around w-full top-[50%] -translate-y-[50%] h-[50%]  md:h-[600px] xl:h-[400px]">
        <TextAnimation />
        <LinkButton />
      </article>
    </section>
  );
};

export default Hero;

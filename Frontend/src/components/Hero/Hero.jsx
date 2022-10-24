import React from "react";
import hero from "../../assets/bureau.jpg";
import TextAnimation from "./TextAnimation";
import LinkButton from "./LinkButton";
import "./Hero.css";

const Hero = () => {
  return (
    // <section
    // id="hero" className='heroSection w-full min-h-screen border border-red-800 bg-cover flex flex-col items-center '
    // >
    //     <img src={hero} alt='bureau' className='rounded-full w-96 h-96 object-cover '/>
    //     <div className="divAfter border-red-500 absolute border left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]">
    //         <h1 className="text-4xl font-bold text-center border">Bonjour, je m'appel Rozelier Julien</h1><br />
    //         <p className='uppercase text-center text-sm'>Développeur Front-end</p>
    //         <div className="flex justify-between items-center w-80 border">
    //             <button className="border uppercase rounded-lg px-4 py-2 text-2xl text-yellow-500 border-yellow-500">button</button>
    //             <button className="border uppercase rounded-lg px-4 py-2 text-2xl text-yellow-500 border-yellow-500">button</button>
    //         </div>

    //     </div>
    // </section>
    <section className="sectionHero relative h-screen">
      {/* <article className="w-full h-full relative wrapper  ">
        <img
          src={hero}
          alt="desktop"
          className="relative w-full object-cover h-full bg-cover bg-center"
        />
      </article> */}
      <article className="absolute flex flex-col justify-around w-full top-[50%] -translate-y-[50%] h-[50%]  md:h-[600px] xl:h-[400px]">
        <TextAnimation />
        <LinkButton />
      </article>
    </section>
  );
};

export default Hero;

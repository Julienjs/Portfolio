import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";

const LinkButton = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const navigate = useNavigate();

  const handleNavigate = (link) => {
    navigate(link);
  };

  return (
    <article
      ref={ref}
      className="flex text-lg justify-around align-center mx-auto w-full md:w-[90%] xl:w-[50%]"
    >
      <button
        onClick={() => handleNavigate("/projects")}
        style={{
          opacity: isInView ? "1" : "0",
          transform: isInView ? "none" : "translateX(-200px)",
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className="btn1 relative bg-none text-white tracking-wider rounded-full border-2 border-yellow w-[150px] md:w-[250px] py-2 md:py-3 px-3 text-2xl overflow-hidden z-10 "
      >
        Portfolio
      </button>
      <button
        onClick={() => handleNavigate("/contact")}
        style={{
          opacity: isInView ? "1" : "0",
          transform: isInView ? "none" : "translateX(200px)",
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className="btn2 relative bg-none text-white tracking-wider rounded-full border-2 border-[#fffefe] w-[150px] md:w-[250px] py-2 md:py-3 px-3 text-2xl overflow-hidden z-10"
      >
        Contact
      </button>
    </article>
  );
};
export default LinkButton;

import React, { useRef } from "react";
import { useInView } from "framer-motion";

const LinkButton = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <article
      ref={ref}
      className="flex text-lg justify-around align-center mx-auto w-full md:w-[90%] xl:w-[50%]"
    >
      <button
        type="button"
        style={{
          opacity: isInView ? "1" : "0",
          transform: isInView ? "none" : "translateX(-200px)",
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className="btn1 relative bg-none text-white tracking-wider rounded-full border-2 border-[#c19504] w-[150px] md:w-[250px] py-2 md:py-3 px-3 text-2xl overflow-hidden z-10 "
      >
        Portfolio
      </button>
      <button
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
// project_btn before:project_before hover:before:w-[100%] hover:border-none hover:text-black
export default LinkButton;

// md:w-[75%] lg:border xl:border-red-500 xl:w-[40%]

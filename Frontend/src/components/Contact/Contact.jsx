import React from "react";
import TitleSection from "./../TitleSection";
import Form from "./Form/Form";
import Coordinates from "./Form/Coordinates";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center border w-[98%] mx-auto text-black dark:text-white"
    >
      <TitleSection logo={"chatbox-outline"} title={"Contact"} />
      <div className="flex items-center my-10 justify-between border-red-500 h-[40rem] border w-[90%]">
        <Coordinates />
        <Form />
      </div>
    </section>
  );
};

export default Contact;

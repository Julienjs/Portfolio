import React, { useState } from "react";
import TitleSection from "./../TitleSection";
import Form from "./Form/Form";
import Coordinates from "./Coordinates";
import SuccessModal from "./Form/SuccessModal";

const Contact = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center w-[98%] mx-auto text-black dark:text-white"
    >
      <TitleSection logo={"chatbox-outline"} title={"Contact"} />
      <div className=" flex flex-col xl:flex-row items-center xl:items-start my-10 justify-between max-h-max p-5 rounded-3xl w-[93%]">
        <Coordinates />
        <Form setOpenModal={setOpenModal} openModal={openModal} />
      </div>
      <SuccessModal openModal={openModal} setOpenModal={setOpenModal} />
    </section>
  );
};

export default Contact;

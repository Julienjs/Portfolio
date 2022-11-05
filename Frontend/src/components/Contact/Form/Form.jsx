import React, { useState } from "react";
import Input from "./Input";
import { sendEmail } from "./../../../services/SendEmail";

const Form = ({ setOpenModal, openModal }) => {
  const [error, setError] = useState(false);

  const timeOutModal = () => {
    setTimeout(() => {
      setOpenModal(false);
    }, 6000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const result = Object.fromEntries(data.entries());
    const response = await sendEmail(result);
    if (response === 200) {
      setOpenModal(true);
      setError("");
      e.target.reset();
      timeOutModal();
    } else if (response.statusText === "Unprocessable Entity") {
      setError(response.data.errors);
    }
  };

  return (
    <div className="text-black flex items-center justify-center dark:text-white w-full xl:w-1/2 text-2xl p-5 h-full">
      <form
        onSubmit={handleSubmit}
        action=""
        className="flex flex-col justify-between h-[95%] w-full"
      >
        <div className="flex flex-col md:flex-row justify-between w-full">
          <div className="flex flex-col w-[98%] mr-2">
            <Input
              type={"text"}
              id={"lastname"}
              placeholder={"Bernard"}
              error={error}
              setError={setError}
              text={"Nom"}
            />
          </div>
          <div className="flex flex-col w-[98%]">
            <Input
              type={"text"}
              id={"firstname"}
              placeholder={"Jean"}
              error={error}
              text={"Prénom"}
            />
          </div>
        </div>
        <Input
          type={"text"}
          id={"email"}
          placeholder={"example@gmail.com"}
          error={error}
          text={"Email"}
        />
        <Input
          type={"text"}
          id={"subject"}
          placeholder={"sujet"}
          error={error}
          text={"Sujet"}
        />
        <Input
          type={"text"}
          id={"message"}
          placeholder={"message..."}
          error={error}
          text={"Message"}
        />
        <button
          type="submit"
          className="bg-blue text-white text-xl dark:bg-yellow max-w-max py-1 px-2 mt-2 rounded-lg self-end font-semibold"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default Form;

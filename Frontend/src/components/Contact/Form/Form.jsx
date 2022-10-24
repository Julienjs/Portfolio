import React from "react";
import Coordinates from "./Coordinates";
import Label from "./Label";
import Input from "./Input";

const Form = () => {
  return (
    <div className="border text-black w-1/2 text-2xl p-5 h-full">
      <form
        action=""
        className="flex flex-col border-4 border-green-500 h-[90%]"
      >
        <div className="flex flex-col justify-between  border-blue-500 border h-32">
          <h4>Nom complet</h4>
          <div className="flex justify-between w-[70%]">
            <div className="flex flex-col">
              <Input type={"text"} id={"LastName"} placeholder={"Nom"} />
              <Label id={"lastName"} text={"Nom"} />
            </div>
            <div className="flex flex-col">
              <Input type={"text"} id={"firstName"} placeholder={"Prénom"} />
              <Label id={"firstName"} text={"Prénom"} />
            </div>
          </div>
        </div>
        <Label id={"email"} text={"Email"} />
        <Input type={"email"} id={"email"} placeholder={"email"} />
        <Label id={"message"} text={"Message"} />
        <Input type={"text"} id={"message"} placeholder={"message..."} />
      </form>
      <button>Envoyer</button>
    </div>
  );
};

export default Form;

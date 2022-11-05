import React from "react";
import Label from "./Label";

const Input = ({ type, id, placeholder, error, errorMsg, text }) => {
  // const errorParams = error && error.map((err) => err.param);
  // console.log(errorParams.includes("lastname"));

  return id !== "message" ? (
    <div>
      <Label id={id} text={text} />
      <input
        type={type}
        name={id}
        id={id}
        placeholder={placeholder}
        className={`mt-1 block w-full border p-2 rounded-md border-gray-300 shadow-sm text-xl dark:text-black
        ${(id === "email") | (id === "subject") && "md:w-[60%]"}  
         ${
           error &&
           error.map((err) =>
             err.param === id
               ? "border border-red-600 placeholder:text-red-600"
               : ""
           )
         }`}
      />
      {error
        ? error.map(
            (err, index) =>
              err.param === id && (
                <p key={index} className="text-xs text-red-600 ">
                  {err.msg}
                </p>
              )
          )
        : null}
    </div>
  ) : (
    <div>
      <Label id={id} text={text} />
      <textarea
        id={id}
        name={id}
        rows={3}
        className={`mt-1 border border-gray-300 p-2 block w-full md:w-[60%] rounded-md shadow-sm text-xl dark:text-black
           ${
             error &&
             error.map((err) =>
               err.param === id
                 ? " border border-red-600 placeholder:text-red-600"
                 : ""
             )
           }`}
        placeholder="Écrivez votre message ..."
        defaultValue={""}
      />
      {error
        ? error.map(
            (err, index) =>
              err.param === id && (
                <p key={index} className="text-xs text-red-600">
                  {err.msg}
                </p>
              )
          )
        : null}
    </div>
  );
};

export default Input;

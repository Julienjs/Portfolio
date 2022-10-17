import React from "react";

const LogoLanguages = ({ item }) => {
  return (
    <div className="flex justify-center items-center">
      {item.languages.map((lang, index) => (
        <img
          key={index}
          src={lang.img}
          alt={lang.name}
          className={`mr-2 ${lang.name === "Wave" && "w-8"} `}
        />
      ))}
    </div>
  );
};

export default LogoLanguages;

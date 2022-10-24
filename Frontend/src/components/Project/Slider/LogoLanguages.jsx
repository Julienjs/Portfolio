import React from "react";
import ToolTips from "../../Tooltips";

const LogoLanguages = ({ item }) => {
  return (
    <div className="flex justify-center items-center">
      {item.languages.map((lang, index) => (
        <ToolTips title={lang.name} placement={"top"} key={index}>
          <img
            key={index}
            src={lang.img}
            alt={lang.name}
            className={`mr-2 ${lang.name === "Wave" && "w-8 max-h-max"} `}
          />
        </ToolTips>
      ))}
    </div>
  );
};

export default LogoLanguages;

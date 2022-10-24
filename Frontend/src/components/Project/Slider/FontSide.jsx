import React from "react";
import Title from "./Title";
import LogoLanguages from "./LogoLanguages";

const FontSide = ({ item }) => {
  return (
    <div
      className={`absolute top-0 left-0 ${item.bgStyles} flex flex-col justify-center items-center text-6xl h-full w-full backface-hidden`}
    >
      <Title item={item} />
      <LogoLanguages item={item} />
      {/* <h3 className="text-2xl">{item.project}</h3> */}
    </div>
  );
};

export default FontSide;

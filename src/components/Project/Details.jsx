import React from "react";
import LinkProject from "./LinkProject";
import Title from "./Title";
import LogoLanguages from "./LogoLanguages";

const Details = ({ item, setOpen, index, slideIndex, open }) => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div
      className={`absolute md:top-0 md:left-0 my-rotate-y-180 md:rotate-0 backface-hidden md:backface-visible h-full w-full p-5 flex flex-col justify-between items-center
`}
    >
      <Title item={item} />
      <div className="flex flex-col items-center justify-around p-2">
        <p className={`mb-5 text-center`}>{item.description}</p>
        <LogoLanguages item={item} />
      </div>
      <LinkProject
        item={item}
        openInNewTab={openInNewTab}
        setOpen={setOpen}
        index={index}
        slideIndex={slideIndex}
      />
    </div>
  );
};

export default Details;

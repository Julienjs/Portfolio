import React from "react";

const Title = ({ item }) => {
  return (
    <div className=" text-center flex w-[80%] pb-10 flex-col items-center">
      <img
        src={item.logo}
        alt="titre de la start-up"
        className={`mb-2 "max-h-max" ${item.width ? item.width : "w-[90%]"}`}
      />
      {item.title && <p className="text-2xl mb-2">{item.title}</p>}
      <h2
        className={`text-[1rem] xxs:text-xs ${item.styleTitle} font-extralight`}
      >
        {item.subject}
      </h2>
    </div>
  );
};

export default Title;

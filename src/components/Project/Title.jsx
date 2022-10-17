import React from "react";

const Title = ({ item }) => {
  return (
    <div className=" text-center flex w-[80%] pb-10 flex-col items-center">
      <img
        src={item.logo}
        alt=""
        className={`mb-2 ${item.width ? item.width : "w-[90%]"}`}
      />
      {item.title && <p className="text-2xl mb-2">{item.title}</p>}
      <p className={`text-[1rem] ${item.styleTitle} font-extralight`}>
        {item.subject}
      </p>
    </div>
  );
};

export default Title;

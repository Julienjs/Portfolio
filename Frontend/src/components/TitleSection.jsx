import React from "react";

const TitleSection = ({ logo, title }) => {
  return (
    <div className="text-4xl h-36 md:text-7xl font-light flex justify-around items-center text-slate-600 dark:text-white xs:mt-14 mt-20">
      <div
        className="mr-2 border-4 text-6xl border-blue bg-blue dark:border-yellow dark:bg-transparent rounded-full h-[100px]
w-[100px] md:h-[120px] md:w-[120px] flex items-center justify-center text-white dark:text-white"
      >
        <ion-icon name={logo}></ion-icon>
      </div>
      <h2 className="">{title}</h2>
    </div>
  );
};

export default TitleSection;

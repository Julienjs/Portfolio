import React, { useEffect } from "react";

const Filter = ({ data, setFiltered, activeGenre, setActiveGenre }) => {
  const languages = [
    { name: "Tout" },
    { name: "HTML" },
    { name: "Javascript" },
    { name: "React" },
    { name: "Tailwind" },
    { name: "NodeJS" },
    { name: "Redux" },
  ];

  useEffect(() => {
    if (activeGenre === "Tout") {
      setFiltered(data);
      return;
    }
    const filtered = data.filter((item) =>
      item.framework.includes(activeGenre)
    );
    setFiltered(filtered);
  }, [activeGenre, setFiltered, data]);

  return (
    <div className="w-full flex justify-start md:justify-center items-center flex-wrap mt-10">
      {languages.map((lang, index) => (
        <button
          key={index}
          className={`border mb-2 mr-3 border-yellow text-yellow rounded-full py-1 px-3 max-w-max flex justify-center font-medium items-center ${
            activeGenre === lang.name
              ? "bg-yellow text-[#000] duration-500"
              : null
          }`}
          onClick={() => setActiveGenre(lang.name)}
        >
          {lang.name}
        </button>
      ))}
    </div>
  );
};

export default Filter;

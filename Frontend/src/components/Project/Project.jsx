import React, { useState, useEffect } from "react";
import PortfolioData from "../../services/PortfolioData.js";
import Slider from "./Slider/Slider";
import TitleSection from "../TitleSection";
import Filter from "./Filter";
import Loader from "../Loader";

import "./Project.css";

const Project = () => {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState("Tout");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data) {
      setData(PortfolioData);
      setFiltered(data);
      setLoading(false);
    }
  }, [data, setFiltered]);

  return (
    <section
      id="project"
      className="flex flex-col justify-center items-center min-h-screen text-black dark:text-white w-[90%] mx-auto"
    >
      <TitleSection logo={"book-outline"} title={"Portfolio"} />
      <Filter
        data={data}
        setFiltered={setFiltered}
        setActiveGenre={setActiveGenre}
        activeGenre={activeGenre}
      />
      {loading ? <Loader /> : <Slider data={filtered} />}
    </section>
  );
};

export default Project;

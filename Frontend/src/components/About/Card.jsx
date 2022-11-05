import React from "react";
import Picture from "../../assets/téléchargement.jpg";
import { socialNetworks } from "./../../services/SocialNetworks";
import { Link } from "react-router-dom";

const Card = () => {
  const openInNewTab = (index) => {
    let url = "";
    if (index === 1) {
      url = "https://github.com/Julienjs?tab=repositories";
    } else
      url =
        "https://www.google.com/search?q=Replace+exitBeforeEnter+with+mode%3D%27wait%27&rlz=1C1GCEA_enFR925FR925&oq=Replace+exitBeforeEnter+with+mode%3D%27wait%27&aqs=chrome..69i57.12328j0j7&sourceid=chrome&ie=UTF-8";
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className="card-shadow dark:card-shadow-dark rounded-xl bg-neutral-50 dark:bg-slate-800 py-5 w-11/12 xl:w-1/3 2xl:w-1/4 flex flex-col items-center justify-between h-[35rem] md:h-72 mb-5 xl:mb-0 xl:h-[600px] xl:z-50 xl:relative xl:left-24 ">
      <div className="flex flex-col md:flex-row xl:flex-col items-center justify-around md:justify-between xl:justify-around md:w-[82%] h-[90%]">
        <img
          src={Picture}
          alt="julien rozelier"
          className="w-52 h-52 rounded-full object-cover"
        />
        <div className="flex flex-col items-center justify-around h-48">
          <h2 className="font-bold text-center text-3xl uppercase">
            Julien <br className="md:hidden xl:block" /> Rozelier
          </h2>
          <div className="w-1/4 md:w-1/2 xl:w-1/4 h-[3px] bg-blue dark:bg-yellow "></div>
          <p className="uppercase text-xl font-extralight">
            Développeur Front end Junior
          </p>
        </div>
      </div>

      <div className=" w-full md:w-1/2 md:self-end xl:w-full  h-10 text-white text-3xl flex items-center justify-center ">
        {socialNetworks.map((social, index) => (
          <Link onClick={() => openInNewTab(index + 1)} key={index}>
            <ion-icon name={social.name}></ion-icon>
          </Link>
        ))}
        <Link to="/contact">
          <ion-icon name="chatbox"></ion-icon>
        </Link>
      </div>
    </div>
  );
};

export default Card;

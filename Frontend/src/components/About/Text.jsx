import React from "react";

const Text = () => {
  return (
    <div className="mb-5 pb-2 w-11/12 xl:w-10/12 text-shadow dark:text-shadow-dark h-[90%] xl:h-[75%] 2xl:h-[90%] rounded-lg flex bg-neutral-200/60 dark:bg-slate-700">
      <div className="text-xl w-full xl:w-[84%] h-min text-left p-3 xl:relative xl:top-1/2 xl:-translate-y-1/2 xl:left-28">
        <h1 className="text-5xl md:text-7xl text-center xl:text-left 2xl:text-9xl font-semibold mb-8">
          Bonjour
        </h1>
        <div className="text-center md:w-2/3 md:mx-auto md:mb-10 xl:w-1/3 mb-5 flex items-center justify-between xl:ml-2">
          <button className="py-1 w-32 md:w-40 px-5 rounded-full dark:text-slate-800 border bg-blue border-blue text-white dark:border-yellow dark:bg-yellow mr-4 duration-500 hover:bg-white hover:dark:bg-slate-800 hover:text-blue hover:dark:text-white">
            CV
          </button>
          <button className="border border-black dark:border-white py-1 w-32 md:w-40 px-5 rounded-full bg-white dark:bg-slate-800 duration-500 ease-in hover:bg-blue hover:dark:bg-yellow hover:border-blue hover:dark:border-yellow hover:text-white">
            PROJETS
          </button>
        </div>
        <p className="ml-2 xl:text-sm 2xl:text-xl">
          Je m'appel <span>Julien Rozelier</span> et je suis{" "}
          <span>développeur front end junior</span>, cela fais trois ans
          maintenant que je me suis reconvertis dans ce métier.
          <br />
          J'ai toujours été intéréssé par la conception de fonctionnalité que
          contenait une application web.
          <br /> Tout d'abord j'ai commencé à réaliser des petits projets
          personnel en HTML et CSS et j'ai voulu en apprendre d'avantage.
          <br />
          <br /> Ce n'est qu'après ça que j'ai décidé de me lancer réellement ce
          défis... devenir Développeur Web!
          <br />
          <br /> Pourquoi cette convertion ? L'envie d'apprendre chaque jour !
          On a beau avoir 10 ans d'ancienneté dans ce métier on apprend toujours
          quelque chose de nouveau !<br />
          <br /> Je me suis donc inscrit sur <span>openclassrooms</span> pour
          suivre la formation <span>"Développeur Web"</span>.
          <br /> J'ai choisi cette formation pour voir les deux faces du
          développement et ainsi choisir sur quelle voie je souhaitais me
          lancer.
          <br /> Après avoir terminé cette formation mon choix s'est porté vers{" "}
          la <span>partie visuelle de l'utilisateur</span>, j'aime ce côté
          créatif.
          <br /> C'est pour cela que j'ai décidé d'approfondir en ce sens avec
          une nouvelle formation{" "}
          <span>"Développeur front end javascript et react"</span>
          chez <span>openclassrooms</span>. <br />
          <br />
          Aujourd'hui je me lance dans cette aventure en tant que{" "}
          <span>Developpeur web Front end</span>.
        </p>
      </div>
    </div>
  );
};

export default Text;

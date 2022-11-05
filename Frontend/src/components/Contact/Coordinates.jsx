import React from "react";
// import Coordinates from "./Coordinates";

const Coordinates = () => {
  const socialNetworks = [{ name: "logo-github" }, { name: "logo-linkedin" }];
  const coordinates = [
    { name: "mail-outline", title: "jrozelier.dev@gmail.com" },
    { name: "call-outline", title: "+33 6 33 59 82 54" },
    {
      name: "location-outline",
      adress: [
        {
          region: "île de france",
        },
        {
          city: "La ville du bois",
        },
        {
          zipCode: "91620",
        },
        {
          street: "38 rue des cailleboudes",
        },
      ],
    },
  ];

  return (
    <div className="text-2xl mb-4 xl:mb-0 p-5 xl:text-3xl w-full xl:xl:w-1/2 h-full flex flex-col items-start justify-around">
      <div className=" ">
        <h2 className="font-medium">Réseaux sociaux</h2>
        <div className="flex border-t-4 border-l-4 rounded-bl-sm p-2 mt-2 border-blue dark:border-yellow text-4xl ">
          {socialNetworks.map((item, index) => (
            <div
              key={index}
              className="hover:text-blue dark:hover:text-yellow hover:duration-500 hover:ease-linear cursor-pointer mr-2"
            >
              <ion-icon name={item.name}></ion-icon>
            </div>
          ))}
        </div>
      </div>
      <div className="">
        {coordinates.map((coord, index) => (
          <div
            key={index}
            className={`flex mt-5
              ${
                coord.name === "location-outline"
                  ? "items-start "
                  : "items-center"
              }
            `}
          >
            <div className="border-2 w-12 h-12 border-blue dark:border-yellow rounded-full flex items-center justify-center mr-2">
              <ion-icon name={coord.name}></ion-icon>
            </div>
            {coord.adress ? (
              <div className="flex flex-col h-40 justify-between">
                {coord.adress.map((adress, index) => (
                  <div key={index} className="mr-2 ">
                    <p>{adress.region}</p>
                    <p>{adress.city}</p>
                    <p>{adress.zipCode}</p>
                    <p>{adress.street}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p>{coord.title}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Coordinates;

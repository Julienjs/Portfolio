import React from "react";

const BackSide = ({ item, index, slideIndex, setOpen }) => {
  return (
    <div
      className={`absolute top-0 left-0 border-r bg-white md:flex items-center justify-center hidden invisible md:visible h-full w-full  backface-hidden duration-300 preserve-3d  my-rotate-y-180`}
    >
      <img src={item.pictures} alt={item.title} className="w-[98%]" />
    </div>
  );
};

export default BackSide;

import React from "react";
import { Link } from "react-router-dom";
import ToolTips from "../../Tooltips";

const LinkProject = ({ item, openInNewTab, index, slideIndex, setOpen }) => {
  return (
    <div className="relative flex items-center justify-between mt-3 w-44">
      {item.links.map((link, i) => (
        <ToolTips title={link.name} placement={"top"} key={i}>
          <Link
            onClick={() => {
              !link.link
                ? index === slideIndex && setOpen(false)
                : openInNewTab(link.link);
            }}
            className={`hover:btn-shadow-hover rounded-full text-2xl text-black btn-shadow h-10 w-10 flex items-center justify-center ${item.linkStyles}`}
          >
            <ion-icon name={link.ionIcon}></ion-icon>
          </Link>
        </ToolTips>
      ))}
    </div>
  );
};

export default LinkProject;

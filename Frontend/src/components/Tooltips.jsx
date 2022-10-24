import React from "react";
import UseDarkMode from "../hook/UseDarkMode";
import { styled } from "@mui/material/styles";
import { Tooltip, tooltipClasses } from "@mui/material";

const Tooltips = (props) => {
  const children = props.children;
  //   const item = props.item;
  //   const index = props.index;
  const title = props.title;
  const placement = props.placement;

  const [colorTheme] = UseDarkMode();

  const StyleTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor:
        colorTheme === "dark"
          ? theme.palette.common.white
          : theme.palette.common.black,
      color: colorTheme === "dark" ? "black" : "white",
      boxShadow: theme.shadows[1],
      fontSize: 12,
      fontWeight: "bold",
    },
  }));

  return (
    <StyleTooltip title={title} placement={placement}>
      {children}
    </StyleTooltip>
  );
};

export default Tooltips;

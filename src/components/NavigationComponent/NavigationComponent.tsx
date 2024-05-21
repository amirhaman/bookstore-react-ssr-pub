import React from "react";
import StyledNavigationComponent from "./StyledNavigationComponent";
import Grid from "@mui/material/Grid";
import Box from "@mui/system/Box";
import Toolbar from "@mui/material/Toolbar";

type Props = {
  children: React.ReactNode;
};

export default function NavigationComponent({ children }: Props) {
  return (
    <StyledNavigationComponent position="static" color="primary">
      <Toolbar className="w-full justify-center px-4">{children}</Toolbar>
    </StyledNavigationComponent>
  );
}

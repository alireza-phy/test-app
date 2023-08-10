import React from "react";
import Navbar from "../navbar";
import { LayoutContainer } from "./styles";
import { Box } from "@mui/material";
type Props = {
  children: JSX.Element;
};

function Layout({ children }: Props) {
  return (
    <LayoutContainer>
      <Navbar />
      <Box sx={{ mt: 4 }}>{children}</Box>
    </LayoutContainer>
  );
}

export default Layout;

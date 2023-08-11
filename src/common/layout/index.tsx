import React from "react";
import Navbar from "../navbar";
import { LayoutContainer } from "./styles";
import { Container } from "@mui/material";
type Props = {
  children: JSX.Element;
};

function Layout({ children }: Props) {
  return (
    <LayoutContainer>
      <Navbar />
      <Container sx={{ mt: 4, maxWidth: "sm" }}>{children}</Container>
    </LayoutContainer>
  );
}

export default Layout;

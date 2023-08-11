import React from "react";
import Navbar from "../navbar";
import { LayoutContainer, BodyContainer, Body } from "./styles";
import { Container } from "@mui/material";
type Props = {
  children: JSX.Element;
};

function Layout({ children }: Props) {
  return (
    <LayoutContainer>
      <Navbar />
      <BodyContainer>
        <Body >{children}</Body>
      </BodyContainer>
    </LayoutContainer>
  );
}

export default Layout;

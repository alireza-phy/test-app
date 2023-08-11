import React from "react";
import Navbar from "../navbar";
import { LayoutContainer } from "./styles";
import { Container, Box } from "@mui/material";
type Props = {
  children: JSX.Element;
};

function Layout({ children }: Props) {
  return (
    <LayoutContainer>
      <Navbar />
      <Box sx={{ position: "relative" }}>
        <Container sx={{ pt: 4, maxWidth: "md" }}>{children}</Container>
      </Box>
    </LayoutContainer>
  );
}

export default Layout;

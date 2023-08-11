import { Box, Container } from "@mui/material";
import styled from "styled-components";

export const LayoutContainer = styled(Box)`
  background-color: #f6f6f6;
  padding: 0px;
  padding-bottom: 2rem;
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;
export const BodyContainer = styled(Box)`
  position: relative;
`;
export const Body = styled(Container)`
  padding-top: 2rem;
  @media (min-width: 1200px) {
    max-width: 1200px;
  }
`;

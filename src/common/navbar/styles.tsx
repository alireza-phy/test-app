import { Box, Container, Typography } from "@mui/material";
import styled from "styled-components";

export const CustomizedNavbar = styled(Box)`
  background-color: white;
  height: fit-content;
`;
export const NavbarContainer = styled(Container)`
  && {
    display: flex;
    align-items: center;
    gap: 3rem;
    @media (min-width: 1200px) {
      max-width: 1200px;
    }
  }
`;

export const NavbarItem = styled(Typography)<{ isselected: string }>`
  && {
    font-weight: bold;
    color: ${(props) =>
      props.isselected === "true"
        ? "#212121"
        : props.theme.palette.secondary.light};
  }
`;

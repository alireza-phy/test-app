import { Typography,Box } from "@mui/material";
import styled from "styled-components";

export const AboutContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 1rem;
  width: 100%;
  .icons-wrapper {
    gap: 1.5rem;
    justify-content: start;
    align-items: center;
    flex-direction: row;
  }
  .text-container {
    flex-direction: column;
    justify-content: start;
  }
`;
export const AboutTitle = styled(Typography)`
  && {
    font-weight: 600;
    text-align: left;
    display: block;
    width: 100%;
  }
`;
export const AboutDescription = styled(Typography)`
  && {
    font-weight: 400;
    text-align: justify;
    display: block;
    width: 100%;
  }
`;

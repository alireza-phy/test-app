import React from "react";
import { Link, Stack, SvgIcon, Typography } from "@mui/material";
import { ReactComponent as Logo } from "../../utils/images/logo.svg";
import Layout from "../../common/layout";
import { AboutContainer, AboutTitle, AboutDescription } from "./styles";
type Props = {};

const About = (props: Props) => {
  return (
    <Layout>
      <AboutContainer>
        <AboutTitle variant="h3">About DTT Real State</AboutTitle>
        <AboutDescription variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </AboutDescription>
        <AboutDescription variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </AboutDescription>
        <AboutTitle variant="h3">Design and Development</AboutTitle>
        <Stack className="icons-wrapper">
          <SvgIcon fontSize="veryHuge">
            <Logo />
          </SvgIcon>
          <Stack className="text-container">
            <Typography variant="body2" textAlign="left" component="div">
              By DTT
            </Typography>
            <Link href="/www.d-tt.nl/" underline="hover" color="blue">
              www.d-tt.nl
            </Link>
          </Stack>
        </Stack>
      </AboutContainer>
    </Layout>
  );
};

export default About;

import React from "react";
import { Box, Link, SvgIcon, Typography } from "@mui/material";
import { ReactComponent as Logo } from "../../utils/images/logo.svg";
import Layout from "../../common/layout";

type Props = {};

const About = (props: Props) => {
  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          gap: 2,
        }}
      >
        <Typography
          variant="h3"
          fontWeight={600}
          textAlign="left"
          component="div"
        >
          About DTT Real State
        </Typography>
        <Typography
          variant="body1"
          fontWeight={400}
          textAlign="justify"
          component="div"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
        <Typography
          variant="body1"
          fontWeight={400}
          textAlign="justify"
          component="div"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
        <Typography
          variant="h3"
          fontWeight={600}
          textAlign="left"
          component="div"
        >
          Design and Development
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 3,
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <SvgIcon fontSize="veryHuge">
            <Logo />
          </SvgIcon>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
            }}
          >
            <Typography variant="body2" textAlign="left" component="div">
              By DTT
            </Typography>
            <Link href="/www.d-tt.nl/" underline="hover" color="blue">
              www.d-tt.nl
            </Link>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default About;

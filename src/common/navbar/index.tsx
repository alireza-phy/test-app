import React from "react";
import { CustomizedNavbar } from "./styles";
import { routes } from "../../routes/Routes";
import { SvgIcon, Link, Typography, Container } from "@mui/material";
import { useLocation } from "react-router-dom";
import { ReactComponent as Logo } from "../../utils/images/logo.svg";

type Props = {};

const navbarItems = [
  { title: "houses", address: routes?.home, id: 1 },
  { title: "about", address: routes?.about, id: 2 },
];

function Navbar({}: Props) {
  const location = useLocation();
  console.log(location);
  return (
    <CustomizedNavbar>
      <Container
        sx={{ maxWidth: "md", display: "flex", gap: 6, alignItems: "center" }}
      >
        <SvgIcon fontSize="huge">
          <Logo />
        </SvgIcon>
        {navbarItems?.map((item) => (
          <Link href={`${item?.address}`} underline="none" key={item?.id}>
            <Typography
              fontWeight="bold"
              color={location?.pathname === item?.address ? "black" : "inherit"}
            >
              {item?.title}
            </Typography>
          </Link>
        ))}
      </Container>
    </CustomizedNavbar>
  );
}

export default Navbar;

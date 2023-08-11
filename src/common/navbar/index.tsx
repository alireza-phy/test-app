import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { CustomizedNavbar, NavbarContainer, NavbarItem } from "./styles";
import { routes } from "../../routes/Routes";
import { SvgIcon, Link, Typography, Button } from "@mui/material";
import { ReactComponent as Logo } from "../../utils/images/logo.svg";

type Props = {};

const navbarItems = [
  { title: "houses", address: routes?.home, id: 1 },
  { title: "about", address: routes?.about, id: 2 },
];

function Navbar({}: Props) {
  const location = useLocation();
  let navigate = useNavigate();

  return (
    <CustomizedNavbar>
      <NavbarContainer>
        <SvgIcon fontSize="huge">
          <Logo />
        </SvgIcon>
        {navbarItems?.map((item) => (
          <Button key={item?.id} onClick={() => navigate(`${item?.address}`)}>
            <NavbarItem
              // fontWeight="bold"
              isselected={
                location?.pathname === item?.address? "true" : "false"
              }
            >
              {item?.title}
            </NavbarItem>
          </Button>
        ))}
      </NavbarContainer>
    </CustomizedNavbar>
  );
}

export default Navbar;
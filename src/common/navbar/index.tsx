import React from "react";
import { CustomizedNavbar } from "./styles";
import { routes } from "../../routes/Routes";
import { SvgIcon, Link, Typography, Container, Button } from "@mui/material";
import { useLocation } from "react-router-dom";
import { ReactComponent as Logo } from "../../utils/images/logo.svg";
import { useNavigate } from "react-router-dom";

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
      <Container
        sx={{ maxWidth: "md", display: "flex", gap: 6, alignItems: "center" }}
      >
        <SvgIcon fontSize="huge">
          <Logo />
        </SvgIcon>
        {navbarItems?.map((item) => (
          <Button key={item?.id} onClick={() => navigate(`${item?.address}`)}>
            <Typography
              fontWeight="bold"
              color={
                location?.pathname === item?.address
                  ? "black"
                  : "secondary.light"
              }
            >
              {item?.title}
            </Typography>
          </Button>
        ))}
      </Container>
    </CustomizedNavbar>
  );
}

export default Navbar;

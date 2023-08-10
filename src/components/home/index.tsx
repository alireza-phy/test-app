import React, { useState } from "react";
import Layout from "../../common/layout";
import {
  Box,
  Typography,
  Button,
  OutlinedInput,
  InputAdornment,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";

const CustomizedToggleButton = styled(ToggleButton)(({ theme }) => ({
  backgroundColor: "#c3c3c3",
  color: "white",
  textTransform: "capitalize",
  width: "8rem",
  height: "2rem",
  "&.Mui-selected": {
    backgroundColor: theme?.palette?.primary.main,
    color: "white",
  },
  "&.Mui-selected:hover": {
    backgroundColor: theme?.palette?.primary.main,
    color: "white",
  },
  "&:hover": {
    backgroundColor: theme?.palette?.primary.light,
    color: "white",
  },
}));

type Props = {};

const Home = (props: Props) => {
  const [sort, setSort] = useState("price");

  const handleChangeSort = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setSort(newAlignment);
  };

  return (
    <Layout>
      <Box
        sx={{ width: "100%", display: "flex", flexDirection: "column", gap: 3 }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mx: 4,
          }}
        >
          <Typography variant="h1" fontWeight="bold" fontSize={18}>
            Houses
          </Typography>
          <Button
            variant="contained"
            color="primary"
            startIcon={
              <Typography variant="h1" fontWeight="bold" fontSize={12}>
                +
              </Typography>
            }
          >
            <Typography
              variant="h3"
              fontWeight={500}
              fontSize={12}
              textTransform="uppercase"
            >
              Create New
            </Typography>
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mx: 4,
          }}
        >
          <OutlinedInput
            id="outlined-adornment-weight"
            size="small"
            sx={{
              "& fieldset": { border: "none" },
              backgroundColor: "#e8e8e8",
            }}
            placeholder="Search for a house"
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
            aria-describedby="outlined-weight-helper-text"
          />
          <ToggleButtonGroup
            color="primary"
            value={sort}
            exclusive
            onChange={handleChangeSort}
            aria-label="Platform"
          >
            <CustomizedToggleButton value="price">price</CustomizedToggleButton>
            <CustomizedToggleButton value="size">size</CustomizedToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Box>
    </Layout>
  );
};

export default Home;

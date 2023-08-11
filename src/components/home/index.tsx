import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../store/context";
import Debounce from "../../utils/debounced";
import { IHouse } from "../../store/context";
import {
  Typography,
  Button,
  InputAdornment,
  ToggleButtonGroup,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import RecordController from "../../utils/controller";
import HouseCards from "./houseCards";
import Layout from "../../common/layout";

import {
  HomeWrapper,
  HomeHeader,
  HomeActions,
  SearchInput,
  CustomizedToggleButton,
} from "./styles";

const generalConfigs = (search: string) => {
  return [
    {
      query: search,
      property: ["address", "street"],
    },
    {
      query: search,
      property: ["address", "city"],
    },
    {
      query: search,
      property: "size",
    },
    {
      query: search,
      property: "bedrooms",
    },
    {
      query: search,
      property: "bathrooms",
    },
  ];
};

type Props = {};

const Home = (props: Props) => {
  const { state } = useContext(Context);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("price");
  const [housesList, setHousesList] = useState<IHouse[] | any>(state?.houses);
  let navigate = useNavigate();

  const handleChangeSort = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    if (newAlignment) {
      setSort(newAlignment);
      let newList: any[] | undefined = RecordController.search(
        state.houses,
        generalConfigs(search)
      );
      newList = RecordController.sort(newList, {
        property: newAlignment,
        query: -1,
        type: "number",
      });
      setHousesList(newList);
    }
  };
  const debouncedSearch = Debounce((config: any) => {
    let newList: IHouse[] | any[] | undefined = RecordController.search(
      state.houses,
      config
    );
    newList = RecordController.sort(newList, {
      property: sort,
      query: -1,
      type: "number",
    });
    setHousesList(newList);
  }, 700);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event?.target?.value);
    debouncedSearch(generalConfigs(event?.target?.value));
  };

  useEffect(() => {
    let newList: any[] | undefined = RecordController.search(
      state.houses,
      generalConfigs(search)
    );
    newList = RecordController.sort(newList, {
      property: sort,
      query: -1,
      type: "number",
    });
    setHousesList(newList);
  }, [state?.houses]);

  return (
    <Layout>
      <HomeWrapper>
        <HomeHeader>
          <Typography className="title" variant="h1">
            Houses
          </Typography>
          <Button
            onClick={() => navigate(`/house/create`)}
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
        </HomeHeader>
        <HomeActions>
          <SearchInput
            id="outlined-adornment-weight"
            size="small"
            placeholder="Search for a house"
            value={search}
            onChange={handleSearch}
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
        </HomeActions>
        <HouseCards houses={housesList} userId={state?.userId} />
      </HomeWrapper>
    </Layout>
  );
};

export default Home;

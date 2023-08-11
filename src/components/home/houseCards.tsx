import { Box } from "@mui/material";
import React, { useContext, useState } from "react";
import HouseCard from "./houseCard";
import { Context } from "../../store/context";
import types from "../../store/types";

type Props = {};

const HouseCards = (props: Props) => {
  const { dispatch, state } = useContext(Context);
  console.log(state);

  // dispatch({type:types?.DeleteHouseCard, data:"id"})

  return (
    <Box
      sx={{
        width: "full",
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      {state?.houses &&
        state?.houses?.map((house) => (
          <Box key={house.id}>
            <HouseCard data={house} />
          </Box>
        ))}
    </Box>
  );
};

export default HouseCards;

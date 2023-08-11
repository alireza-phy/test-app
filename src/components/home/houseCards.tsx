import React from "react";
import { Box } from "@mui/material";
import HouseCard from "./houseCard";
import { HouseCardsContainer } from "./styles";
import { IHouse } from "../../store/context";
type Props = { houses: IHouse[] ,userId:string | undefined};

const HouseCards = (props: Props) => {
  const { houses ,userId} = props;
  return (
    <HouseCardsContainer>
      {houses &&
        houses?.map((house) => (
          <Box key={house.id}>
            <HouseCard data={house} userId={userId} />
          </Box>
        ))}
    </HouseCardsContainer>
  );
};

export default HouseCards;

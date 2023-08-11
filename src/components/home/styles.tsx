import {
  ToggleButton,
  Box,
  Stack,
  OutlinedInput,
  CardContent,
} from "@mui/material";
import styled from "styled-components";
export const HomeWrapper = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
export const HomeHeader = styled(Stack)`
  && {
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }

  .title {
    font-weight: bold;
    font-size: 1.5rem;
  }
`;
export const HomeActions = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SearchInput = styled(OutlinedInput)`
  && {
    fieldset {
      border: none;
    }
    background-color: #e8e8e8;
  }
`;
export const CustomizedToggleButton = styled(ToggleButton)(({ theme }) => ({
    color: "white",
  textTransform: "capitalize",
  width: "8rem",
  height: "2rem",
  "&.Mui-selected": {
    backgroundColor: `${theme?.palette?.primary.main} !important`,
    color: `white !important`,
  },
  "&.Mui-selected:hover": {
    backgroundColor: theme?.palette?.primary.main,
    // color: "white",
  },
  "&:hover": {
    backgroundColor: theme?.palette?.primary.light,
    // color: "white",
  },
}));

export const HouseCardsContainer = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const HouseCardContent = styled(CardContent)`
  && {
    position: relative;
    padding: 1rem;
    display: flex;
    justify-content: start;
    gap: 1rem;
    align-items: center;
  }
  .image {
    border-radius: 0.5rem;
  }
`;
export const HouseDetails = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: start;
`;

export const HousNumber = styled(Box)`
  display: flex;
  gap: 0.5rem;
`;

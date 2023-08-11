import types from "../types";
import house from "../../utils/images/house1.jpg";
import { IHouse } from "../context";

export const initialState: any = {
  houses: [
    {
      id: "123",
      creatorId: "234",
      address: {
        street: "Stockvisstraat",
        houseNumber: "132",
        postalCode: 2,
        city: "Amsterdam",
        addition: "1011AA",
      },
      image: house,
      price: "500",
      size: 120,
      garage: "no",
      bedrooms: 1,
      bathrooms: 1,
      constructionDate: 2012,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: "124",
      creatorId: "234",
      address: {
        street: "house",
        houseNumber: "132",
        postalCode: 2,
        city: "Amsterdam",
        addition: "1011AA",
      },
      image: house,
      price: "200",
      size: 720,
      garage: "yes",
      bedrooms: 1,
      bathrooms: 1,
      constructionDate: 2012,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: "125",
      creatorId: "234",
      address: {
        street: "schicago",
        houseNumber: "132",
        postalCode: 2,
        city: "Amsterdam",
        addition: "1011AA",
      },
      image: house,
      price: "400",
      size: 320,
      garage: "yes",
      bedrooms: 1,
      bathrooms: 1,
      constructionDate: 2012,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ],
  userId: "12345",
};

export const reducer = (state = initialState, action: any) => {
  const { type, data } = action;
  switch (type) {
    case types.DeleteHouseCard:
      const newHouses = state?.houses?.filter(
        (item: IHouse) => item?.id !== data
      );
      return {
        ...state,
        houses: newHouses,
      };
    case types.EditHouseCard:
      const updatedHouses = state?.houses?.map((item: IHouse) =>
        item?.id !== data?.id ? data : item
      );
      return {
        ...state,
        houses: updatedHouses,
      };
    case types.CreateHouseCard:
      return {
        ...state,
        houses: [...state.houses, data],
      };

    default:
      return state;
  }
};

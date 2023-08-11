import types from "../types";
import house from "../../utils/images/house1.jpg";
import { Ihouse } from "../context";

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
      price: "500.000",
      size: 120,
      garage: true,
      bedrooms: 1,
      bathrooms: 1,
      constructionData: "",
      description: "",
    },
    {
      id: "124",
      creatorId: "234",
      address: {
        street: "Stockvisstraat",
        houseNumber: "132",
        postalCode: 2,
        city: "Amsterdam",
        addition: "1011AA",
      },
      image: house,
      price: "500.000",
      size: 120,
      garage: true,
      bedrooms: 1,
      bathrooms: 1,
      constructionData: "",
      description: "",
    },
    {
      id: "125",
      creatorId: "234",
      address: {
        street: "Stockvisstraat",
        houseNumber: "132",
        postalCode: 2,
        city: "Amsterdam",
        addition: "1011AA",
      },
      image: house,
      price: "500.000",
      size: 120,
      garage: true,
      bedrooms: 1,
      bathrooms: 1,
      constructionData: "",
      description: "",
    },
  ],
};

export const reducer = (state = initialState, action: any) => {
  const { type, data } = action;
  switch (type) {
    case types.DeleteHouseCard:
      const newHouses = state?.houses?.filter(
        (item: Ihouse) => item?.id !== data
      );
      return {
        ...state,
        houses: newHouses,
      };
    case types.EditHouseCard:
      const updatedHouses = state?.houses?.map((item: Ihouse) =>
        item?.id !== data?.id ? data : item
      );
      return {
        ...state,
        houses: updatedHouses,
      };
    case types.CreateHouseCard:
      const addedHouses = state?.houses?.push(data);
      return {
        ...state,
        houses: addedHouses,
      };

    default:
      return state;
  }
};

import React, { Dispatch, createContext, useReducer, ReactNode } from "react";
import * as store from "../reducer";
type Props = { children: ReactNode };

export type Ihouse = {
  id: string;
  creatorId: string;
  address: {
    street: string;
    houseNumber: number;
    postalCode: string;
    city: string;
    addition: string;
  };
  image: File;
  price: string;
  size: number;
  garage: true;
  bedrooms: number;
  bathrooms: number;
  constructionData: number;
  description: string;
};

type HousesType = {
  houses: Ihouse[];
};

export const Context = createContext<{
  state: HousesType;
  dispatch: Dispatch<any>;
}>({
  state: store.initialState,
  dispatch: () => undefined,
});

const ContextProvider = (props: Props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(store.reducer, store.initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default ContextProvider;

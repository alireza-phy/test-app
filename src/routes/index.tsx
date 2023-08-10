import React, { lazy } from "react";
import { routes } from "./Routes";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

type Props = {};

const Home = lazy(() => import("../components/home"));
const About = lazy(() => import("../components/about"));
const HouseDetail = lazy(() => import("../components/house/houseDetail"));
const HouseCreateOrEdit = lazy(() => import("../components/house/houseCreateOrEdit"));

const router = createBrowserRouter([
  {
    path: routes.home,
    element: <Home />,
  },
  {
    path: routes.about,
    element: <About />,
  },
  {
    path: routes.houseDetail,
    element: <HouseDetail />,
  },
  {
    path: routes.houseEdit,
    element: <HouseCreateOrEdit />,
  },
  {
    path: routes.houseCreate,
    element: <HouseCreateOrEdit />,
  },
]);

const Routes = (props: Props) => {
  return <RouterProvider router={router} />;
};

export default Routes;

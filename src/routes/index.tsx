import { routes } from "./Routes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../components/home";
import About from "../components/about";
import HouseDetail from "../components/house/houseDetail";
import HouseCreateOrEdit from "../components/house/houseCreateOrEdit";
type Props = {};

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

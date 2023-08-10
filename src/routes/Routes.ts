interface IRoutes {
  home: string;
  houseDetail: string;
  houseEdit: string;
  houseCreate: string;
  about: string;
}

export const routes: IRoutes = {
  home: "/",
  houseDetail: "/house/:id/",
  houseEdit: "/house/edit/:id/",
  houseCreate: "/house/create/",
  about: "/about",
};

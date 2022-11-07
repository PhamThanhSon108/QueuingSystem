import React from "react";
import routes from "../config/routes";
import ForgotPassword from "../view/Auth/ForgotPassword";
import Login from "../view/Auth/Login";
import Profile from "../view/Auth/Profile";
import DevicePage from "../view/DevicePage";
import AddDevice from "../view/DevicePage/components/AddDevice";
import DetailDevice from "../view/DevicePage/components/DetailDevice";
import Device from "../view/DevicePage/components/Device";
import UpdateDevice from "../view/DevicePage/components/UpdateDevice";
import Homepage from "../view/Homepage";
import ServicePage from "../view/ServicePage";
type routeType = {
  path: string;
  component: React.ReactElement;
  children?: { path: string; component: React.ReactElement }[];
};
export const privateRoutes: routeType[] = [
  { path: routes.home, component: <Homepage /> },

  {
    path: routes.device,
    component: <DevicePage />,
    children: [
      { path: "", component: <Device /> },
      { path: "add", component: <AddDevice /> },
      { path: "update/:id", component: <UpdateDevice /> },
      { path: "detail/:id", component: <DetailDevice /> },
    ],
  },
  { path: routes.service, component: <ServicePage /> },
  { path: routes.report, component: <>report </> },
  { path: routes.nums, component: <>nums </> },
  { path: routes.setting, component: <>Setting </> },

  //auth

  { path: routes.profile, component: <Profile /> },
];

export const publicRoutes: routeType[] = [
  //auth
  { path: routes.login, component: <Login /> },

  { path: routes.reset, component: <ForgotPassword /> },
];

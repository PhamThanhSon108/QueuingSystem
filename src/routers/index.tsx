import React from "react";
import routes from "../config/routes";
import ForgotPassword from "../view/Auth/ForgotPassword";
import Login from "../view/Auth/Login";
import DevicePage from "../view/DevicePage";
import Homepage from "../view/Homepage";
import ServicePage from "../view/ServicePage";
type routeType = {
  path: string;
  component: React.ReactElement;
};
export const publicRoutes: routeType[] = [
  { path: routes.home, component: <Homepage /> },

  { path: routes.device, component: <DevicePage /> },
  { path: routes.service, component: <ServicePage /> },
  { path: routes.report, component: <>report </> },
  { path: routes.nums, component: <>nums </> },
  { path: routes.setting, component: <>Setting </> },

  //auth
  { path: routes.login, component: <Login /> },
  { path: routes.reset, component: <ForgotPassword /> },
];

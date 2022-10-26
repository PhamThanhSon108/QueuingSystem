import React from "react";
import routes from "../config/routes";
import ForgotPassword from "../view/Auth/ForgotPassword";
import Login from "../view/Auth/Login";
type routeType = {
  path: string;
  component: React.ReactElement;
};
export const publicRoutes: routeType[] = [
  { path: routes.home, component: <>Home </> },

  { path: routes.device, component: <>Device </> },
  { path: routes.service, component: <>service </> },
  { path: routes.report, component: <>report </> },
  { path: routes.nums, component: <>nums </> },
  { path: routes.setting, component: <>Setting </> },

  //auth
  { path: routes.login, component: <Login /> },
  { path: routes.reset, component: <ForgotPassword /> },
];

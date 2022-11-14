import React from "react";
import routes from "../config/routes";
import ForgotPassword from "../view/Auth/ForgotPassword";
import Login from "../view/Auth/Login";
import Profile from "../view/Auth/Profile";

import DevicePage from "../view/DevicePage";
import AddDevice from "../view/DevicePage/components/AddDevice";
import DetailDevice from "../view/DevicePage/components/DetailDevice";
import Device from "../view/DevicePage/components/Device";
import DetailProvideNumbersInDevice from "../view/DevicePage/components/ListProvideNumber/DetailProvideNumbersInDevice";
import UpdateDevice from "../view/DevicePage/components/UpdateDevice";
import Homepage from "../view/Homepage";
import ProvideNumberPage from "../view/ProvideNumbersPage";
import ProvideNewNumber from "../view/ProvideNumbersPage/component/ProvideNewNumber";
import ProvideNumbers from "../view/ProvideNumbersPage/component/ProvideNumbers";
import ReportPage from "../view/ReportPage";
import Report from "../view/ReportPage/Components/Report";
import ServicePage from "../view/ServicePage";
import AddService from "../view/ServicePage/components/AddService";
import DetailService from "../view/ServicePage/components/DetailService";
import Service from "../view/ServicePage/components/Service";
import UpdateService from "../view/ServicePage/components/UpdateService";
import AccountManagementPage from "../view/Setting/AccountManagement";
import AccountManagement from "../view/Setting/AccountManagement/components/AccountManagement";
import AddAccount from "../view/Setting/AccountManagement/components/AddAccount";
import UpdateAccount from "../view/Setting/AccountManagement/components/UpdateAccount";
import { RoleManagementPage } from "../view/Setting/RoleManagement";
import AddRole from "../view/Setting/RoleManagement/components/AddRole";
import RoleManagement from "../view/Setting/RoleManagement/components/RoleManagement";
import UserLogManagementPage from "../view/Setting/UserLogManagement";
import UserLogManegement from "../view/Setting/UserLogManagement/components/TableUserLogManagement/UserLogManegement";
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
      {
        path: "providenumbers/:id",
        component: <DetailProvideNumbersInDevice />,
      },
    ],
  },
  {
    path: routes.service,
    component: <ServicePage />,
    children: [
      { path: "", component: <Service /> },
      { path: "add", component: <AddService /> },
      { path: "detail/:id", component: <DetailService /> },
      { path: "update/:id", component: <UpdateService /> },
    ],
  },
  {
    path: routes.provideNumbers,
    component: <ProvideNumberPage />,
    children: [
      { path: "", component: <ProvideNumbers /> },
      { path: "create", component: <ProvideNewNumber /> },
    ],
  },
  {
    path: routes.report,
    component: <ReportPage />,
    children: [{ path: "", component: <Report /> }],
  },
  {
    path: routes.settingRole,
    component: <RoleManagementPage />,
    children: [
      { path: "", component: <RoleManagement /> },
      { path: "add", component: <AddRole /> },
    ],
  },
  {
    path: routes.settingAccount,
    component: <AccountManagementPage />,
    children: [
      { path: "", component: <AccountManagement /> },
      { path: "add", component: <AddAccount /> },
      { path: "update/:id", component: <UpdateAccount /> },
    ],
  },
  {
    path: routes.settingUserLog,
    component: <UserLogManagementPage />,
    children: [{ path: "", component: <UserLogManegement /> }],
  },

  //auth

  { path: routes.profile, component: <Profile /> },
];

export const publicRoutes: routeType[] = [
  //auth
  { path: routes.login, component: <Login /> },

  { path: routes.reset, component: <ForgotPassword /> },
];

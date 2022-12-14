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
import UpdateRole from "../view/Setting/RoleManagement/components/UpdateRole";
import UserLogManagementPage from "../view/Setting/UserLogManagement";
import UserLogManegement from "../view/Setting/UserLogManagement/components/TableUserLogManagement/UserLogManegement";
type routeType = {
  permisioncode?: string;
  path: string;
  component: React.ReactElement;
  children?: {
    path: string;
    component: React.ReactElement;
    permisioncode?: string;
  }[];
};
export const privateRoutes: routeType[] = [
  { path: routes.home, component: <Homepage /> },

  {
    path: routes.device,
    component: <DevicePage />,
    children: [
      { path: "", component: <Device />, permisioncode: "readDevices" },
      { path: "add", component: <AddDevice />, permisioncode: "addDevice" },
      {
        path: "update/:id",
        component: <UpdateDevice />,
        permisioncode: "updateDevice",
      },
      {
        path: "detail/:id",
        component: <DetailDevice />,
        permisioncode: "readDevices",
      },
      {
        permisioncode: "readProvideNumber",
        path: "providenumbers/:id",
        component: <DetailProvideNumbersInDevice />,
      },
    ],
  },
  {
    path: routes.service,
    component: <ServicePage />,
    children: [
      { path: "", component: <Service />, permisioncode: "readServices" },
      { path: "add", component: <AddService />, permisioncode: "addService" },
      {
        path: "detail/:id",
        component: <DetailService />,
        permisioncode: "readServices",
      },
      {
        path: "update/:id",
        component: <UpdateService />,
        permisioncode: "updateService",
      },
    ],
  },
  {
    path: routes.provideNumbers,
    component: <ProvideNumberPage />,
    children: [
      {
        path: "",
        component: <ProvideNumbers />,
        permisioncode: "readProvideNumber",
      },
      {
        path: "create",
        component: <ProvideNewNumber />,
        permisioncode: "addProvideNumber",
      },
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
      { path: "", component: <RoleManagement />, permisioncode: "readRoles" },
      { path: "add", component: <AddRole />, permisioncode: "addRole" },
      {
        path: "update/:id",
        component: <UpdateRole />,
        permisioncode: "updateRole",
      },
    ],
  },
  {
    path: routes.settingAccount,
    component: <AccountManagementPage />,
    children: [
      {
        path: "",
        component: <AccountManagement />,
        permisioncode: "readAccounts",
      },
      { path: "add", component: <AddAccount />, permisioncode: "addAccount" },
      {
        path: "update/:id",
        component: <UpdateAccount />,
        permisioncode: "updateAccount",
      },
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

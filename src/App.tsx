import React, { Fragment, useEffect } from "react";
import "antd/dist/antd.css";
import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes,
  useNavigate,
  redirect,
  Navigate,
} from "react-router-dom";
import { privateRoutes, publicRoutes } from "./routers";
import DefaultLayout from "./routers/components/DefaultLayout";

import { useAppSelector } from "./hooks";
import { getAuth } from "firebase/auth";
const getAllCookies = () =>
  document.cookie
    .split(";")
    .reduce(
      (ac, str) =>
        Object.assign(ac, { [str.split("=")[0].trim()]: str.split("=")[1] }),
      {}
    );
function App() {
  const token = useAppSelector((state) => state.profile.token);

  console.log(getAllCookies());
  if (token) {
    redirect("/");
  } else {
    redirect("/login");
  }
  useEffect(() => {}, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {!token ? (
            <>
              {publicRoutes?.map((value) => {
                let Layout = Fragment;
                return (
                  <Route
                    element={<Layout>{value?.component}</Layout>}
                    path={value?.path}
                  >
                    {value?.children
                      ? value?.children.map((item) => (
                          <Route path={item.path} element={item.component} />
                        ))
                      : null}
                  </Route>
                );
              })}
              <Route path="*" element={<Navigate to="/login" replace />} />
            </>
          ) : (
            <>
              {privateRoutes?.map((value) => {
                let Layout = DefaultLayout;

                return (
                  <Route
                    element={
                      <Layout dashboard={value.path === "/"}>
                        {value?.component}
                      </Layout>
                    }
                    path={value?.path}
                  >
                    {value?.children
                      ? value?.children.map((item) => (
                          <Route path={item.path} element={item.component} />
                        ))
                      : null}
                  </Route>
                );
              })}
              <Route path="*" element={<Navigate to="/" replace />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { Fragment, useEffect, useState } from "react";
import "antd/dist/antd.css";
import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes,
  redirect,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { privateRoutes, publicRoutes } from "./routers";
import DefaultLayout from "./routers/components/DefaultLayout";

import { useAppSelector } from "./hooks";
import { auth } from "./firebase/config";
import { ObjectType } from "typescript";

function App() {
  const AllCookies = document.cookie.split(";").reduce(
    (ac, str) =>
      Object.assign(ac, {
        [str.split("=")[0].trim().toString()]: str.split("=")[1],
      }),
    {}
  );
  let token = useAppSelector((state) => state.profile.token);
  const [user, setUser] = useState("");
  // useEffect(() => {
  //   const unsubrice = auth.onAuthStateChanged((userLogin) => {
  //     if (userLogin) {
  //       setUser(userLogin.refreshToken);
  //       redirect("/");
  //     } else {
  //       setUser("");
  //       redirect("/login");
  //     }
  //   });
  //   return unsubrice;
  // }, []);
  const accessToken = document.cookie
    .split("; ")
    .find((row) => row.startsWith("accessToken"))
    ?.split("=")[1];

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {!accessToken ? (
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

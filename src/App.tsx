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
import { v4 } from "uuid";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import PrivateRoute from "./routers/PrivateRoute";

function App() {
  const [user, setUser] = useState<object | undefined>();
  const history = useNavigate();

  useEffect(() => {
    const unsubscibed = auth.onAuthStateChanged((userCurrent) => {
      if (userCurrent) {
        setUser(userCurrent);
        return;
      }
      setUser(undefined);
      history("/login");
    });

    return () => {
      unsubscibed();
    };
  }, [history]);

  return (
    <div className="App">
      <Routes>
        {!user ? (
          <>
            {publicRoutes?.map((value) => {
              let Layout = Fragment;
              return (
                <Route
                  key={v4()}
                  element={<Layout>{value?.component}</Layout>}
                  path={value?.path}
                >
                  {value?.children
                    ? value?.children.map((item) => (
                        <Route
                          key={v4()}
                          path={item.path}
                          element={item.component}
                        />
                      ))
                    : null}
                </Route>
              );
            })}
            {/* <Route path="*" element={<Navigate to="/login" replace />} /> */}
          </>
        ) : (
          <>
            {privateRoutes?.map((value) => {
              let Layout = DefaultLayout;

              return (
                <Route
                  key={v4()}
                  element={
                    <PrivateRoute
                      component={
                        <Layout dashboard={value.path === "/"}>
                          {value?.component}
                        </Layout>
                      }
                    ></PrivateRoute>
                  }
                  path={value?.path}
                >
                  {value?.children
                    ? value?.children.map((item) => (
                        <Route
                          key={v4()}
                          path={item.path}
                          element={item.component}
                        />
                      ))
                    : null}
                </Route>
              );
            })}
            {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;

import { type } from "@testing-library/user-event/dist/type";
import React, { Fragment } from "react";
import "antd/dist/antd.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routers";
import DefaultLayout from "./routers/components/DefaultLayout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {publicRoutes?.map((value) => {
            let Layout =
              value.path !== "/login" && value.path !== "/reset"
                ? DefaultLayout
                : Fragment;
            return (
              <Route
                element={<Layout>{value?.component}</Layout>}
                path={value?.path}
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

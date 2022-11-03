import AddDevice from "./components/AddDevice";
import { useState } from "react";
import Device from "./components/Device";
import UpdateDevice from "./components/UpdateDevice";
import { Outlet } from "react-router-dom";

export default function DevicePage() {
  const [status, setStatus] = useState<string>("");
  const handleUpdateStatus = (value: string) => {
    setStatus(value);
  };
  return (
    <>
      {/* {!status ? (
        <Device setStatus={handleUpdateStatus} />
      ) : status === "add" ? (
        <AddDevice setStatus={handleUpdateStatus} />
      ) : (
        status === "update" && <UpdateDevice />
      )} */}
      <Outlet />
    </>
  );
}

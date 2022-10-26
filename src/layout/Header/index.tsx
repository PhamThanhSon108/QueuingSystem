import { Breadcrumb } from "antd";
import BreadcrumbItem from "antd/lib/breadcrumb/BreadcrumbItem";
import React from "react";
import { useLocation } from "react-router-dom";

export default function HeaderLayout() {
  const location = useLocation();
  return (
    <div>
      {
        <Breadcrumb>
          <BreadcrumbItem>
            {location.pathname === "/"
              ? "Home"
              : location.pathname.slice(1, location.pathname.length)}
          </BreadcrumbItem>
        </Breadcrumb>
      }
    </div>
  );
}

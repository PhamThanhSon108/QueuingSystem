import { Breadcrumb } from "antd";
import BreadcrumbItem from "antd/lib/breadcrumb/BreadcrumbItem";
import React from "react";
import { useLocation } from "react-router-dom";

export default function HeaderLayout() {
  const location = useLocation();
  const typePath = {
    "/": ["Dashboard"],
    "/device": {
      path: "device",
      label: "Danh sách thiết bị",
      child: [
        { path: "add", label: "Thêm thiết bị" },
        { path: "update", label: "Cập nhật thiết bị" },
        { path: "detail", label: "Chi tiết thiết bị" },
      ],
    },
  };
  return (
    <div>
      {
        <Breadcrumb style={{ width: 500 }}>
          <BreadcrumbItem className="breadcrumb">
            {location.pathname === "/" ? (
              "Dashboard"
            ) : location.pathname === "/device" ? (
              <>
                <span
                  style={{
                    color: "#7E7D88",
                    marginRight: 15,
                    fontWeight: 700,
                    fontSize: 20,
                  }}
                >
                  Thiết bị
                </span>
                <span
                  style={{
                    color: "#7E7D88",
                    marginRight: 15,
                    fontWeight: 700,
                    fontSize: 20,
                  }}
                >
                  {">"}
                </span>
                <span
                  style={{
                    marginRight: 15,
                    fontWeight: 700,
                    fontSize: 20,
                  }}
                >
                  Danh sách thiết bị
                </span>
              </>
            ) : (
              location.pathname.slice(1, location.pathname.length)
            )}
          </BreadcrumbItem>
        </Breadcrumb>
      }
    </div>
  );
}

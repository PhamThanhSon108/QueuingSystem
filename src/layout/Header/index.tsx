import { Breadcrumb } from "antd";
import BreadcrumbItem from "antd/lib/breadcrumb/BreadcrumbItem";
import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function HeaderLayout() {
  const location = useLocation();
  const typePath = {
    device: {
      path: "device",
      label: "Danh sách thiết bị",
      child: {
        add: { path: "add", label: "Thêm thiết bị" },
        update: { path: "update", label: "Câp nhật thiết bị" },
        detail: { path: "detail", label: "Chi tiết thiết bị" },
        providenumbers: { path: "providenumbers", label: "Danh sách cấp số" },
      },
    },
    service: {
      path: "service",
      label: "Danh sách dịch vụ",
      child: {
        add: { path: "add", label: "Thêm thiết bị" },
        update: { path: "update", label: "Cập nhật dịch vụ" },
        detail: { path: "detail", label: "Chi tiết dịch vụ" },
      },
    },
    setting: {
      path: "setting",
      label: "Cài đặt hệ thống",
      child: {
        role: {
          path: "role",
          label: "Quản lý vai trò",
          child: {
            add: {
              label: "Thêm vai trò",
            },
            update: {
              label: "Cập nhật vai trò",
            },
          },
        },
        account: {
          path: "role",
          label: "Quản lý tài khoản",
          child: {
            add: {
              label: "Thêm tài khoản",
            },
            update: {
              label: "Cập nhật tài khoản",
            },
          },
        },
      },
    },

    providenumbers: {
      path: "providenumbers",
      label: "Danh sách cấp số",
      child: {
        create: {
          path: "role",
          label: "Cấp số mới",
          child: {
            add: {
              label: "Thêm vai trò",
            },
            update: {
              label: "Cập nhật vai trò",
            },
          },
        },
        update: { path: "update", label: "Cập nhật dịch vụ" },
        detail: { path: "detail", label: "Chi tiết dịch vụ" },
      },
    },
  };

  const currentLocation = location.pathname
    .slice(1, location.pathname.length)
    .split("/");
  let arrLocation: any = [];
  const itemRender: any = (arr: any, type: any) => {
    if (arr.length == 1) {
      if (type != undefined && type[arr[0]] != undefined) {
        arrLocation.push({ label: type[arr[0]].label, to: type[arr[0]]?.path });
      }
      return;
    }
    if (arr.length > 1) {
      arrLocation.push({ label: type[arr[0]].label, to: type[arr[0]]?.path });
      const temp = arr[0];
      arr.shift();
      return itemRender(arr, type[temp]?.child);
    }
  };

  itemRender(currentLocation, typePath);

  return (
    <div>
      {
        <Breadcrumb style={{ width: 500 }}>
          <BreadcrumbItem className="breadcrumb">
            {location.pathname === "/" ? (
              "Dashboard"
            ) : (
              <>
                {arrLocation?.map((item: any, index: any) => {
                  return (
                    <>
                      {index === arrLocation.length - 1 ? (
                        <span
                          style={{
                            color: `${"#ff7506"}`,
                            marginRight: 15,
                            fontWeight: 700,
                            fontSize: 20,
                          }}
                        >
                          {item?.label}
                        </span>
                      ) : (
                        <Link
                          style={{
                            color: `${
                              index === arrLocation.length - 1
                                ? "#ff7506"
                                : "#7E7D88"
                            }`,
                            marginRight: 15,
                            fontWeight: 700,
                            fontSize: 20,
                          }}
                          to={"/" + item.to}
                        >
                          {item?.label}
                        </Link>
                      )}

                      {index < arrLocation?.length - 1 ? (
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
                      ) : null}
                    </>
                  );
                })}
              </>
            )}
          </BreadcrumbItem>
        </Breadcrumb>
      }
    </div>
  );
}

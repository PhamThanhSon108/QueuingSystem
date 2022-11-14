import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CaretLeftOutlined,
  CaretRightOutlined,
} from "@ant-design/icons";
import { Badge, Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import React, { ReactElement, ReactNode } from "react";
import { Link } from "react-router-dom";

interface DataType {
  id: string;
  roleName: string;
  numberOfLicensees: number;
  roleDescription: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Tên vai trò",
    dataIndex: "roleName",
    key: "roleName",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Số người dùng",
    dataIndex: "numberOfLicensees",
    key: "numberOfLicensees",
  },
  {
    title: "Mô tả",
    dataIndex: "roleDescription",
    key: "roleDescription",
  },
  {
    render: () => {
      return (
        <>
          <Link to={"update"}>Cập nhật</Link>
        </>
      );
    },
  },
];

let data: DataType[] | any = [
  {
    id: 123,
    roleName: "admin",
    numberOfLicensees: "2",
    roleDescription: "Quản lý hệ thống",
  },
  {
    id: 123,
    roleName: "admin",
    numberOfLicensees: "2",
    roleDescription: "Quản lý hệ thống",
  },
  {
    id: 123,
    roleName: "admin",
    numberOfLicensees: "2",
    roleDescription: "Quản lý hệ thống",
  },
  {
    id: 123,
    roleName: "admin",
    numberOfLicensees: "2",
    roleDescription: "Quản lý hệ thống",
  },
  {
    id: 123,
    roleName: "admin",
    numberOfLicensees: "2",
    roleDescription: "Quản lý hệ thống",
  },
  {
    id: 123,
    roleName: "admin",
    numberOfLicensees: "2",
    roleDescription: "Quản lý hệ thống",
  },
  {
    id: 123,
    roleName: "admin",
    numberOfLicensees: "2",
    roleDescription: "Quản lý hệ thống",
  },
  {
    id: 123,
    roleName: "admin",
    numberOfLicensees: "2",
    roleDescription: "Quản lý hệ thống",
  },
  {
    id: 123,
    roleName: "admin",
    numberOfLicensees: "2",
    roleDescription: "Quản lý hệ thống",
  },
  {
    id: 123,
    roleName: "admin",
    numberOfLicensees: "2",
    roleDescription: "Quản lý hệ thống",
  },
];
const itemRender = (_: any, type: string, originalElement: ReactNode) => {
  if (type === "prev") {
    return (
      <>
        <CaretLeftOutlined />
      </>
    );
  }
  if (type === "next") {
    return <CaretRightOutlined />;
  }
  return originalElement;
};
export default function TableRoleManegement() {
  return (
    <Table
      className="table__device"
      columns={columns}
      dataSource={data}
      size={"middle"}
      pagination={{
        pageSize: 9,
        itemRender: itemRender,
      }}
      bordered
    />
  );
}

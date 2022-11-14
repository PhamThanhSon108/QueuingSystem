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
  userName: string;
  impactTime: string;
  ipAddress: string;
  manipulation: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Tên đăng nhập",
    dataIndex: "userName",
    key: "userName",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Thời gian tác động",
    dataIndex: "impactTime",
    key: "impactTime",
  },
  {
    title: "IP thực hiện",
    dataIndex: "ipAddress",
    key: "ipAddress",
  },
  {
    title: "Thao tác thực hiện",
    dataIndex: "manipulation",
    key: "manipulation",
  },
];

let data: DataType[] = [
  {
    id: "123",
    userName: "phamthanhson",
    impactTime: "14/11/2022 15:17:50",
    ipAddress: "192.168.1.1",
    manipulation: "Cập nhật thông tin dịch vụ",
  },
  {
    id: "123",
    userName: "phamthanhson",
    impactTime: "14/11/2022 15:17:50",
    ipAddress: "192.168.1.1",
    manipulation: "Cập nhật thông tin dịch vụ",
  },
  {
    id: "123",
    userName: "phamthanhson",
    impactTime: "14/11/2022 15:17:50",
    ipAddress: "192.168.1.1",
    manipulation: "Cập nhật thông tin dịch vụ",
  },
  {
    id: "123",
    userName: "phamthanhson",
    impactTime: "14/11/2022 15:17:50",
    ipAddress: "192.168.1.1",
    manipulation: "Cập nhật thông tin dịch vụ",
  },
  {
    id: "123",
    userName: "phamthanhson",
    impactTime: "14/11/2022 15:17:50",
    ipAddress: "192.168.1.1",
    manipulation: "Cập nhật thông tin dịch vụ",
  },
  {
    id: "123",
    userName: "phamthanhson",
    impactTime: "14/11/2022 15:17:50",
    ipAddress: "192.168.1.1",
    manipulation: "Cập nhật thông tin dịch vụ",
  },
  {
    id: "123",
    userName: "phamthanhson",
    impactTime: "14/11/2022 15:17:50",
    ipAddress: "192.168.1.1",
    manipulation: "Cập nhật thông tin dịch vụ",
  },
  {
    id: "123",
    userName: "phamthanhson",
    impactTime: "14/11/2022 15:17:50",
    ipAddress: "192.168.1.1",
    manipulation: "Cập nhật thông tin dịch vụ",
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
export default function TableUserLogManegement() {
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

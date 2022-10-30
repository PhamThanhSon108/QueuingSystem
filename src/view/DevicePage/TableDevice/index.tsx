import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CaretLeftOutlined,
  CaretRightOutlined,
} from "@ant-design/icons";
import { Badge, Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import React, { ReactElement, ReactNode } from "react";

interface DataType {
  id: string;
  name: string;
  ipAddress: string;
  statusActive: string;
  statusConect: string;
  serviceUse: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Mã thiết bị",
    dataIndex: "id",
    key: "id",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Tên thiết bị",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Địa chỉ IP",
    dataIndex: "ipAddress",
    key: "ipAddress",
  },
  {
    title: "Trạng thái hoạt động",
    key: "activeStatus",
    dataIndex: "activeStatus",
    render: (_, { statusActive }) => {
      return (
        <>
          {statusActive === "active" ? (
            <Badge status="success" text="Đang hoạt động" />
          ) : (
            <Badge status="error" text="Ngưng hoạt động" />
          )}
        </>
      );
    },
  },
  {
    title: "Trạng thái kết nối",
    key: "statusConect",
    render: (_, record) => (
      <>
        {record.statusConect === "conected" ? (
          <Badge status="success" text="Kết nối" />
        ) : (
          <Badge status="error" text="Mất kết nối" />
        )}
      </>
    ),
  },
  {
    title: "Dịch vụ sử dụng",
    key: "serviceUse",
    render: (_, record) => (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "0px 160px 0px 16px",
        }}
      >
        <span>Khám tim mạch</span>
        <div
          style={{
            display: "flex",
            justifyContent: "start",
            color: "#4277FF",
            textDecoration: "underline",
          }}
        >
          Xem thêm
        </div>
      </div>
    ),
  },
  {
    key: "detail",
    render: (_, record) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          color: "#4277FF",
          textDecoration: "underline",
        }}
      >
        Chi tiết
      </div>
    ),
  },
  {
    key: "update",
    render: (_, record) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          color: "#4277FF",
          textDecoration: "underline",
        }}
      >
        Cập nhật
      </div>
    ),
  },
];

const data: DataType[] = [
  {
    id: "KOI_01",
    name: "Kiosk",
    ipAddress: "192.168.1.10",
    statusActive: "active",
    statusConect: "conected",
    serviceUse: "Khám tim mạch khám mắt",
  },
  {
    id: "KOI_01",
    name: "Kiosk",
    ipAddress: "192.168.1.10",
    statusActive: "active",
    statusConect: "conected",
    serviceUse: "Khám tim mạch khám mắt",
  },
  {
    id: "KOI_01",
    name: "Kiosk",
    ipAddress: "192.168.1.10",
    statusActive: "active",
    statusConect: "conected",
    serviceUse: "Khám tim mạch khám mắt",
  },
  {
    id: "KOI_01",
    name: "Kiosk",
    ipAddress: "192.168.1.10",
    statusActive: "active",
    statusConect: "conected",
    serviceUse: "Khám tim mạch khám mắt",
  },
  {
    id: "KOI_01",
    name: "Kiosk",
    ipAddress: "192.168.1.10",
    statusActive: "active",
    statusConect: "conected",
    serviceUse: "Khám tim mạch khám mắt",
  },
  {
    id: "KOI_01",
    name: "Kiosk",
    ipAddress: "192.168.1.10",
    statusActive: "active",
    statusConect: "conected",
    serviceUse: "Khám tim mạch khám mắt",
  },
  {
    id: "KOI_01",
    name: "Kiosk",
    ipAddress: "192.168.1.10",
    statusActive: "active",
    statusConect: "conected",
    serviceUse: "Khám tim mạch khám mắt",
  },
  {
    id: "KOI_01",
    name: "Kiosk",
    ipAddress: "192.168.1.10",
    statusActive: "active",
    statusConect: "conected",
    serviceUse: "Khám tim mạch khám mắt",
  },
  {
    id: "KOI_01",
    name: "Kiosk",
    ipAddress: "192.168.1.10",
    statusActive: "active",
    statusConect: "conected",
    serviceUse: "Khám tim mạch khám mắt",
  },
  {
    id: "KOI_01",
    name: "Kiosk",
    ipAddress: "192.168.1.10",
    statusActive: "active",
    statusConect: "conected",
    serviceUse: "Khám tim mạch khám mắt",
  },
  {
    id: "KOI_01",
    name: "Kiosk",
    ipAddress: "192.168.1.10",
    statusActive: "active",
    statusConect: "conected",
    serviceUse: "Khám tim mạch khám mắt",
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
export default function TableDevice() {
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

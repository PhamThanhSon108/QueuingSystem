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
import { useAppDispatch, useAppSelector } from "../../../../hooks";

interface DataType {
  id: string;
  deviceId: string;
  deviceName: string;
  deviceIp: string;
  statusActive: string;
  statusConect: string;
  deviceService: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Mã thiết bị",
    dataIndex: "deviceId",
    key: "deviceId",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Tên thiết bị",
    dataIndex: "deviceName",
    key: "deviceName",
  },
  {
    title: "Địa chỉ IP",
    dataIndex: "deviceIp",
    key: "deviceIp",
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
    key: "deviceService",
    render: (_, { deviceService }) => (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "0px 160px 0px 16px",
        }}
      >
        <span>{deviceService}</span>
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
    render: (_, { id }) => (
      <Link
        to={`/device/detail/${id}`}
        style={{
          display: "flex",
          justifyContent: "center",
          color: "#4277FF",
          textDecoration: "underline",
        }}
      >
        Chi tiết
      </Link>
    ),
  },
  {
    key: "update",
    render: (_, { id }) => (
      <Link
        to={`/device/update/${id}`}
        style={{
          display: "flex",
          justifyContent: "center",
          color: "#4277FF",
          textDecoration: "underline",
        }}
      >
        Cập nhật
      </Link>
    ),
  },
];

let data: DataType[] | any = [
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
  const devices = useAppSelector((state) => state.device.devices);
  data = devices;
  const dispatch = useAppDispatch();
  const services: Array<any> | undefined = useAppSelector((state) => {
    return state.service.services;
  });
  const DeviceServiceOption = services.reduce(
    (serviceToShow: any, value: { id: string }) => {
      Object.assign(serviceToShow, { [value.id]: value });
      return serviceToShow;
    },
    {}
  );
  data = devices?.map((value: any) => ({
    ...value,
    deviceService: value?.deviceService?.map(
      (item: any) => DeviceServiceOption[item]?.serviceName + " "
    ),
  }));
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

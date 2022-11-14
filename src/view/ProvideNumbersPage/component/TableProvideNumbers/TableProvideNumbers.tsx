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
import { useAppSelector } from "../../../../hooks";

interface DataType {
  id: string;
  ordinalNumbers: string;
  customerName: string;
  serviceName: string;
  createdTime: string;
  expiredTime: string;
  statusCreateNumbers: string;
  supplySource: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Số thứ tự",
    dataIndex: "ordinalNumbers",
    key: "ordinalNumbers",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Tên khách hàng",
    dataIndex: "customerName",
    key: "customerName",
  },
  {
    title: "Tên dịch vụ",
    dataIndex: "serviceName",
    key: "serviceName",
  },
  {
    title: "Thời gian tạo",
    dataIndex: "createdTime",
    key: "createdTime",
  },
  {
    title: "Hạn sử dụng",
    dataIndex: "expiredTime",
    key: "expiredTime",
  },
  {
    title: "Trạng thái",
    key: "statusCreateNumbers",
    dataIndex: "statusCreateNumbers",
    render: (_, { statusCreateNumbers }) => {
      return (
        <>
          {statusCreateNumbers === "waiting" ? (
            <Badge status="success" text="Đang chờ" />
          ) : (
            <Badge status="error" text="Đã sử dụng" />
          )}
        </>
      );
    },
  },
  {
    title: "Nguồn cấp",
    dataIndex: "supplySource",
    key: "supplySource",
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
];

let data: DataType[] | any = [
  {
    ordinalNumbers: 2010001,
    customerName: "Nguyễn Thị Hoa",
    serviceName: "Khám tim mạch",
    createdTime: "13:40 15/02/2022",
    expiredTime: "13:40 16/02/2022",
    statusCreateNumbers: "waiting",
    supplySource: "Kiosk",
  },
  {
    ordinalNumbers: 2010001,
    customerName: "Nguyễn Thị Hoa",
    serviceName: "Khám tim mạch",
    createdTime: "13:40 15/02/2022",
    expiredTime: "13:40 16/02/2022",
    statusCreateNumbers: "waiting",
    supplySource: "Kiosk",
  },
  {
    ordinalNumbers: 2010001,
    customerName: "Nguyễn Thị Hoa",
    serviceName: "Khám tim mạch",
    createdTime: "13:40 15/02/2022",
    expiredTime: "13:40 16/02/2022",
    statusCreateNumbers: "waiting",
    supplySource: "Kiosk",
  },
  {
    ordinalNumbers: 2010001,
    customerName: "Nguyễn Thị Hoa",
    serviceName: "Khám tim mạch",
    createdTime: "13:40 15/02/2022",
    expiredTime: "13:40 16/02/2022",
    statusCreateNumbers: "waiting",
    supplySource: "Kiosk",
  },
  {
    ordinalNumbers: 2010001,
    customerName: "Nguyễn Thị Hoa",
    serviceName: "Khám tim mạch",
    createdTime: "13:40 15/02/2022",
    expiredTime: "13:40 16/02/2022",
    statusCreateNumbers: "waiting",
    supplySource: "Kiosk",
  },
  {
    ordinalNumbers: 2010001,
    customerName: "Nguyễn Thị Hoa",
    serviceName: "Khám tim mạch",
    createdTime: "13:40 15/02/2022",
    expiredTime: "13:40 16/02/2022",
    statusCreateNumbers: "waiting",
    supplySource: "Kiosk",
  },
  {
    ordinalNumbers: 2010001,
    customerName: "Nguyễn Thị Hoa",
    serviceName: "Khám tim mạch",
    createdTime: "13:40 15/02/2022",
    expiredTime: "13:40 16/02/2022",
    statusCreateNumbers: "waiting",
    supplySource: "Kiosk",
  },
  {
    ordinalNumbers: 2010001,
    customerName: "Nguyễn Thị Hoa",
    serviceName: "Khám tim mạch",
    createdTime: "13:40 15/02/2022",
    expiredTime: "13:40 16/02/2022",
    statusCreateNumbers: "waiting",
    supplySource: "Kiosk",
  },
  {
    ordinalNumbers: 2010001,
    customerName: "Nguyễn Thị Hoa",
    serviceName: "Khám tim mạch",
    createdTime: "13:40 15/02/2022",
    expiredTime: "13:40 16/02/2022",
    statusCreateNumbers: "waiting",
    supplySource: "Kiosk",
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
export default function TableProvideNumbers() {
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

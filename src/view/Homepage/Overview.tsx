import { ArrowDownOutlined } from "@ant-design/icons";
import {
  Badge,
  Calendar,
  Card,
  Col,
  Dropdown,
  Row,
  Select,
  Space,
  Typography,
} from "antd";
import { Option } from "antd/lib/mentions";
import React from "react";
import { images } from "../../assets/images";
import CalendarOverview from "./CalendarOverview";

import "./Homepage.scss";
export default function Overview() {
  return (
    <div
      className="homepage__wrap"
      style={{ paddingLeft: "24px", paddingRight: "24px" }}
    >
      <Row>
        <Typography.Title className="homepage__title">
          Tổng quan
        </Typography.Title>
      </Row>
      <Row className="homepage__oveview-chart">
        {/* <Space direction="vertical">
          <Badge color="#f50" text="Đang hoạt động" />

          <Badge color="hsl(102, 53%, 61%)" text="hsl(102, 53%, 61%)" />
          <Badge color="hwb(205 6% 9%)" text="hwb(205 6% 9%)" />
        </Space> */}
      </Row>
      <Row className="homepage__oveview-chart">
        <Card style={{ width: "100%", borderRadius: "12px" }} />
      </Row>
      <Row className="homepage__oveview-chart">
        <Card style={{ width: "100%", borderRadius: "12px" }} />
      </Row>

      <Row className="homepage__calendar">
        <CalendarOverview />
      </Row>
    </div>
  );
}

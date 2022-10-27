import { ArrowDownOutlined } from "@ant-design/icons";
import { Card, Col, Dropdown, Row, Select, Typography } from "antd";
import { Option } from "antd/lib/mentions";
import React from "react";
import { images } from "../../assets/images";
import Chart from "./Chart";
import "./Homepage.scss";

export default function Homepage() {
  return (
    <>
      <div className="homepage__wrap">
        <Row>
          <Typography.Title className="homepage__title">
            Biểu đồ cấp số
          </Typography.Title>
        </Row>
        <Row className="homepage__list-information" gutter={13}>
          <Col span={6} className="hompage__item-information">
            <Card />
          </Col>
          <Col span={6} className="hompage__item-information">
            <Card />
          </Col>
          <Col span={6} className="hompage__item-information">
            <Card />
          </Col>
          <Col span={6} className="hompage__item-information">
            <Card />
          </Col>
        </Row>
        <Row className="homepage__chart">
          <Row
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Typography>
              <Typography.Title className="homepage__chart-title">
                Bảng thống kê theo ngày
              </Typography.Title>
              <Typography.Text className="homepage__chart-month">
                Tháng 11/2022
              </Typography.Text>
            </Typography>
            <div className="filter__wrap">
              <Typography.Text className="filter__wrap-title">
                Xem theo
              </Typography.Text>
              <Select
                suffixIcon={images.icon.arrow}
                className="filter__wrap-select"
                defaultValue={"day"}
                placeholder="Lọc theo"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  (option!.children as unknown as string)
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
              >
                <Option value="day">Ngày</Option>
                <Option value="week">Tuần</Option>
                <Option value="month">Tháng</Option>
              </Select>
            </div>
          </Row>
          <Chart />
        </Row>
      </div>
    </>
  );
}

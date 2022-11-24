import { ArrowDownOutlined } from "@ant-design/icons";
import Icon from "@ant-design/icons/lib/components/AntdIcon";
import { Badge, Card, Col, Row, Space, Typography } from "antd";
import { images } from "../../assets/images";
import { useAppSelector } from "../../hooks";

import CalendarOverview from "./Calendar/CalendarOverview";
import RadialChart from "./Chart/RadialChart";

import "./Homepage.scss";

export default function Overview() {
  const devices = useAppSelector((state) => state.device.devices);
  // for(let i = 0; i < devices?.length; i++) {

  // }
  return (
    <div
      className="homepage__wrap"
      style={{ paddingLeft: "24px", paddingRight: "24px", height: "93vh" }}
    >
      <Row>
        <Typography.Title className="homepage__title">
          Tổng quan
        </Typography.Title>
      </Row>
      <Row className="homepage__overview-chart-wrap">
        <div className="homepage__overview-chart">
          <RadialChart />
        </div>
        <Col span={7} className={"homepage__overview-chart-total"}>
          <span className="homepage__overview-chart-total-num">
            {devices?.length}
          </span>
          <div className="homepage__overview-chart-total-title orange">
            {images.icon.device}
            <span>Thiết bị</span>
          </div>
        </Col>
        <Col span={9} className="homepage__overview-information">
          <div className="homepage__overview-information-title">
            <div>
              <Badge color="#f50" text="Đang hoạt động" />
            </div>
            <div>
              <Badge color="#f50" text="Ngưng hoạt động" />
            </div>
          </div>
        </Col>
        <Col span={3} className="homepage__overview-information-num">
          <div className="homepage__overview-information-num">
            <div>12345</div> <div>12345</div>
          </div>
        </Col>
      </Row>
      <Row className="homepage__overview-chart-wrap">
        <div className="homepage__overview-chart">
          <RadialChart color="#4277ff" />
        </div>
        <Col span={7} className={"homepage__overview-chart-total"}>
          <span className="homepage__overview-chart-total-num">4.221</span>
          <div className="homepage__overview-chart-total-title blue">
            {images.icon.service}
            <span>Dịch vụ</span>
          </div>
        </Col>
        <Col span={9} className="homepage__overview-information">
          <div className="homepage__overview-information-title">
            <div>
              <Badge color="#f50" text="Đang hoạt động" />
            </div>
            <div>
              <Badge color="#f50" text="Ngưng hoạt động" />
            </div>
          </div>
        </Col>
        <Col span={3} className="homepage__overview-information-num">
          <div className="homepage__overview-information-num blue">
            <div>12345</div> <div>12345</div>
          </div>
        </Col>
      </Row>

      <Row className="homepage__overview-chart-wrap">
        <div className="homepage__overview-chart">
          <RadialChart color="#35c75a" />
        </div>
        <Col span={7} className={"homepage__overview-chart-total"}>
          <span className="homepage__overview-chart-total-num">4.221</span>
          <div className="homepage__overview-chart-total-title green">
            {images.icon.nums}
            <span>Cấp số</span>
          </div>
        </Col>
        <Col span={9} className="homepage__overview-information">
          <div className="homepage__overview-information-title">
            <div>
              <Badge color="#f50" text="Đã sử dụng" />
            </div>
            <div>
              <Badge color="#f50" text="Đang chờ" />
            </div>
            <div>
              <Badge color="#f50" text="Đang chờ" />
            </div>
          </div>
        </Col>
        <Col span={3} className="homepage__overview-information-num">
          <div className="homepage__overview-information-num green">
            <div>3721</div> <div>688</div> <div>72</div>
          </div>
        </Col>
      </Row>

      <Row className="homepage__calendar" style={{ height: 100 }}>
        <CalendarOverview />
      </Row>
    </div>
  );
}

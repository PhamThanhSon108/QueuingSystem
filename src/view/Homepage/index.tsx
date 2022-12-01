import { ArrowDownOutlined } from "@ant-design/icons";
import { Col, Row, Select, Tag, Typography } from "antd";
import { Option } from "antd/lib/mentions";
import { useEffect } from "react";
import { images } from "../../assets/images";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { deviceStore } from "../../modules/device/deviceStore";
import { getDevices } from "../../modules/device/respository";
import { provideNumbersStore } from "../../modules/provideNumbers/provideNumbersStore";
import { getProvideNumbers } from "../../modules/provideNumbers/respository";
import { getServices } from "../../modules/service/respository";
import { serviceStore } from "../../modules/service/serviceStore";
import Chart from "./Chart";
import "./Homepage.scss";

export default function Homepage() {
  const dispatch = useAppDispatch();
  const devices = useAppSelector((state) => state.device.devices);
  const services = useAppSelector((state) => state.service.services);
  const numbers = useAppSelector(
    (state) => state.provideNumbers.provideNumbers
  );
  useEffect(() => {
    if (!devices || devices?.length === 0)
      getDevices().then((deviceSnap) => {
        dispatch(deviceStore.actions.fetchDevices({ devices: deviceSnap }));
      });
    if (!services || services?.length === 0)
      getServices().then((serviceSnap) => {
        dispatch(serviceStore.actions.fetchService({ services: serviceSnap }));
      });
    if (!numbers || numbers?.length === 0)
      getProvideNumbers().then((number) => {
        dispatch(
          provideNumbersStore.actions.fetchprovideNumbers({
            provideNumbers: number,
          })
        );
      });
  }, []);
  return (
    <>
      <div className="homepage__wrap">
        <Row>
          <Typography.Title className="homepage__title">
            Biểu đồ cấp số
          </Typography.Title>
        </Row>
        <Row className="homepage__list-information" gutter={13}>
          <Col span={6} className="homepage__item-information">
            <div className="homepage__item-information-card">
              <div className="homepage__item-information-card-head">
                <div className="homepage__item-information-card-head-icon">
                  {images.icon.numericalorder}
                </div>
                <span className="homepage__item-information-card-head-title">
                  Số thứ tự đã cấp
                </span>
              </div>
              <div className="homepage__item-information-card-body">
                <span className="homepage__item-information-card-body-number">
                  4221
                </span>
                <Tag
                  className="homepage__item-information-card-body-percen"
                  icon={<ArrowDownOutlined />}
                >
                  32.4%
                </Tag>
              </div>
            </div>
          </Col>
          <Col span={6} className="homepage__item-information">
            <div className="homepage__item-information-card">
              <div className="homepage__item-information-card-head">
                <div className="homepage__item-information-card-head-icon">
                  {images.icon.numericalorderused}
                </div>
                <span className="homepage__item-information-card-head-title">
                  Số thứ tự đã sử dụng
                </span>
              </div>
              <div className="homepage__item-information-card-body">
                <span className="homepage__item-information-card-body-number">
                  4221
                </span>
                <Tag
                  className="homepage__item-information-card-body-percen"
                  icon={<ArrowDownOutlined />}
                >
                  32.4%
                </Tag>
              </div>
            </div>
          </Col>
          <Col span={6} className="homepage__item-information">
            <div className="homepage__item-information-card">
              <div className="homepage__item-information-card-head">
                <div className="homepage__item-information-card-head-icon">
                  {images.icon.numericalorderwait}
                </div>
                <span className="homepage__item-information-card-head-title">
                  Số thứ tự đang chờ
                </span>
              </div>
              <div className="homepage__item-information-card-body">
                <span className="homepage__item-information-card-body-number">
                  4221
                </span>
                <Tag
                  className="homepage__item-information-card-body-percen"
                  icon={<ArrowDownOutlined />}
                >
                  32.4%
                </Tag>
              </div>
            </div>
          </Col>
          <Col span={6} className="homepage__item-information">
            <div className="homepage__item-information-card">
              <div className="homepage__item-information-card-head">
                <div className="homepage__item-information-card-head-icon">
                  {images.icon.numericalorderskiped}
                </div>
                <span className="homepage__item-information-card-head-title">
                  Số thứ tự đã bỏ qua
                </span>
              </div>
              <div className="homepage__item-information-card-body">
                <span className="homepage__item-information-card-body-number">
                  4221
                </span>
                <Tag
                  className="homepage__item-information-card-body-percen"
                  icon={<ArrowDownOutlined />}
                >
                  32.4%
                </Tag>
              </div>
            </div>
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

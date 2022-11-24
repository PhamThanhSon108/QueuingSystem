import { Col, Row, Select, Typography } from "antd";
import { Option } from "antd/lib/mentions";

import "../DevicePage.scss";
import Search from "antd/lib/input/Search";
import TableDevice from "./TableDevice";
import { images } from "../../../assets/images";
import { Link, useNavigate } from "react-router-dom";
import { getDevices } from "../../../modules/device/respository";
import { useEffect } from "react";
import { deviceStore } from "../../../modules/device/deviceStore";
import { useAppDispatch, useAppSelector } from "../../../hooks";
type deviceProps = {
  setStatus?: (value: string) => void;
};
export default function Device({ setStatus }: deviceProps) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const devices = useAppSelector((state) => state.device.devices);

  const handleAddDevice = () => {
    navigate("add");
  };
  useEffect(() => {
    if (!devices)
      getDevices().then((deviceSnap) => {
        dispatch(deviceStore.actions.fetchDevices({ devices: deviceSnap }));
      });
  }, []);
  return (
    <div className="devicepage">
      <Row className="devicepage__title">
        <Typography.Title>Biểu đồ cấp số</Typography.Title>
      </Row>
      <Row className="devicepage__filter">
        <Col span={22} style={{ display: "flex" }}>
          <div className="devicepage__filter-item">
            <Typography.Title
              level={5}
              className="devicepage__filter-item-title"
            >
              Trạng thái hoạt động
            </Typography.Title>
            <Select
              suffixIcon={images.icon.arrow}
              className="devicepage__filter-item-body"
              defaultValue={"Tất cả"}
            >
              <Option value="">Tất cả</Option>
              <Option value="1">Hoạt động</Option>
              <Option value="2">Ngưng hoạt động</Option>
            </Select>
          </div>

          <div className="devicepage__filter-item">
            <Typography.Title
              level={5}
              className="devicepage__filter-item-title"
            >
              Trạng thái kết nối
            </Typography.Title>
            <Select
              suffixIcon={images.icon.arrow}
              className="devicepage__filter-item-body"
              defaultValue={"Tất cả"}
            >
              <Option value="">Tất cả</Option>
              <Option value="1">Hoạt động</Option>
              <Option value="2">Ngưng hoạt động</Option>
            </Select>
          </div>
          <div className="devicepage__filter-last-item">
            <div className="devicepage__filter-item">
              <Typography.Title
                level={5}
                className="devicepage__filter-item-title"
              >
                Từ khóa
              </Typography.Title>
              <Search
                placeholder="Nhập từ khóa"
                allowClear
                className="devicepage__filter-item-body"
              />
            </div>
          </div>
        </Col>
      </Row>
      <Row className="devicepage__body">
        <Col span={22} className="devicepage__body-table">
          <TableDevice />
        </Col>
        <Col span={2} className="devicepage__body-modify">
          <div className="devicepage__body-modify-container">
            <div className="devicepage__body-modify-container-icon">
              {images.icon.addDevice}
            </div>
            <Link
              to={"add"}
              className="devicepage__body-modify-container-label"
              onClick={handleAddDevice}
            >
              Thêm thiết bị
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  );
}

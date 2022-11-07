import { Col, Input, Pagination, Row, Select, Typography, Form } from "antd";
import { Option } from "antd/lib/mentions";

import "../DevicePage.scss";
import Search from "antd/lib/input/Search";
import TableDevice from "./TableDevice";
import { images } from "../../../assets/images";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getDevices } from "../../../modules/device/respository";
import { useEffect } from "react";
import {
  addDeviceInStore,
  deviceStore,
} from "../../../modules/device/deviceStore";
import { useAppDispatch, useAppSelector } from "../../../hooks";
const labelFormDevice = {
  deviceId: {
    label: "Mã thiết bị",
  },
  deviceName: {
    label: "Tên thiết bị",
  },
  deviceIp: {
    label: "Địa chỉ IP",
  },
  deviceType: {
    label: "Loại thiết bị",
  },
  deviceNameToLogin: {
    label: "Tên đăng nhập",
  },
  devicePassword: {
    label: "Mật khẩu",
  },
  deviceService: {
    label: "Dịch vụ sử dụng",
  },
};
export default function DetailDevice() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleAddDevice = () => {
    navigate("add");
  };
  const { id } = useParams();
  const devices: Array<any> | undefined = useAppSelector((state) => {
    return state.device.devices;
  });
  const device = devices?.find((value) => value.id == id);
  return (
    <div className="devicepage">
      <Row className="devicepage__title">
        <Typography.Title>Quản lý thiết bị</Typography.Title>
      </Row>
      <Row className="devicepage__body">
        <Col span={22} className="detail__page">
          <div className="detail__page-title">Thông tin thiết bị</div>
          <Row className="detail__page-wrap">
            <div className={"detail__page-list"}>
              <div>
                <span>{labelFormDevice.deviceId.label}</span>
                <span>{device?.deviceId}</span>
              </div>
              <div>
                <span>{labelFormDevice.deviceName.label}</span>
                <span>{device?.deviceName}</span>
              </div>
              <div>
                <span>{labelFormDevice.deviceIp.label}</span>
                <span>{device?.deviceIp}</span>
              </div>
            </div>
            <div className={"detail__page-list"}>
              <div>
                <span>{labelFormDevice.deviceType.label}</span>
                <span>{device?.deviceType}</span>
              </div>
              <div>
                <span>{labelFormDevice.deviceNameToLogin.label}</span>
                <span>{device?.deviceNameToLogin}</span>
              </div>
              <div>
                <span>{labelFormDevice.devicePassword.label}</span>
                <span>{device?.devicePassword}</span>
              </div>
            </div>
          </Row>
          <Row>
            <div className="detail__page-list-length">
              <div>{labelFormDevice.deviceService.label}</div>
              <span>{device?.deviceService}</span>
            </div>
          </Row>
        </Col>
        <Col span={2} className="devicepage__body-modify">
          <div className="devicepage__body-modify-container">
            <div className="devicepage__body-modify-container-icon">
              {images.icon.addDevice}
            </div>
            <Link
              to={`/device/update/${id}`}
              className="devicepage__body-modify-container-label"
            >
              Sửa thiết bị
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  );
}

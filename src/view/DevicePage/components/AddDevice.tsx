import { Button, Col, Form, Input, Row, Select, Typography } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { addDevice } from "../../../modules/device/respository";
import "./AddDevice.scss";
import { v4 as uuidv4, v4 } from "uuid";
import { Option } from "antd/lib/mentions";
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
const DeviceTypeOption = ["Kiosk", "Display counter"];
let DeviceServiceOption = [
  "Khám tim mạch",
  "Khám sản phụ khoa",
  "Khám răng hàm mặt",
  "Khám tai mũi họng",
  "Khám hô hấp",
  "Khám tổng quát",
];
type deviceProps = {
  setStatus?: (value: string) => void;
};
export default function AddDevice({ setStatus }: deviceProps) {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const services: Array<any> | undefined = useAppSelector((state) => {
    return state.service.services;
  });
  DeviceServiceOption = services.map((value) => value?.serviceName);
  const handleCancel = () => {
    navigate("/device");
  };
  const handleAddDevice = () => {};
  const handleOnfinish = (data: any) => {
    addDevice({ device: data, id: uuidv4() }).then(() => {
      navigate("/device");
    });
  };

  return (
    <div className="devicepage">
      <Row className="devicepage__title">
        <Typography.Title>Quản lý thiết bị</Typography.Title>
      </Row>

      <Row className="wrap__add-device">
        <div className="add-device__form">
          <Form
            name="addDeviceForm"
            layout="vertical"
            form={form}
            id="addDeviceForm"
            onFinish={handleOnfinish}
          >
            <Row>
              <div>
                <Typography.Title level={4} className="add-device__form-title">
                  Quản lý thiết bị
                </Typography.Title>
              </div>
            </Row>
            <Row className="add-device__form-box">
              <Col style={{ marginRight: 24 }}>
                <div className="main-form">
                  <Form.Item
                    label={labelFormDevice.deviceId.label}
                    name="deviceId"
                    rules={[
                      {
                        required: true,
                      },
                      {
                        max: 99,
                        whitespace: true,
                      },
                    ]}
                  >
                    <Input
                      // placeholder={formatMessage('accounts.userName')}
                      maxLength={100}
                    />
                  </Form.Item>
                  <Form.Item
                    label={labelFormDevice.deviceName.label}
                    name="deviceName"
                    rules={[
                      {
                        required: true,
                      },
                      {
                        max: 99,
                        whitespace: true,
                      },
                    ]}
                  >
                    <Input
                      // placeholder={formatMessage('accounts.userName')}
                      maxLength={100}
                    />
                  </Form.Item>
                  <Form.Item
                    label={labelFormDevice.deviceIp.label}
                    name="deviceIp"
                    rules={[
                      {
                        required: true,
                      },
                      {
                        max: 99,
                        whitespace: true,
                      },
                    ]}
                  >
                    <Input
                      // placeholder={formatMessage('accounts.userName')}
                      maxLength={100}
                    />
                  </Form.Item>
                </div>
              </Col>

              <Col>
                <div className="main-form">
                  <Form.Item
                    label={labelFormDevice.deviceType.label}
                    name="deviceType"
                    rules={[
                      {
                        required: true,
                      },
                      {
                        max: 99,
                        whitespace: true,
                      },
                    ]}
                  >
                    {/* <Input
                      // placeholder={formatMessage('accounts.userName')}
                      maxLength={100}
                    /> */}
                    <Select>
                      {DeviceTypeOption.map((value) => (
                        <Option key={v4()} value={value}>
                          {value}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                  <Form.Item
                    label={labelFormDevice.deviceNameToLogin.label}
                    name="deviceNameToLogin"
                    rules={[
                      {
                        required: true,
                      },
                      {
                        max: 99,
                        whitespace: true,
                      },
                    ]}
                  >
                    <Input
                      // placeholder={formatMessage('accounts.userName')}
                      maxLength={100}
                    />
                  </Form.Item>
                  <Form.Item
                    label={labelFormDevice.devicePassword.label}
                    name="devicePassword"
                    rules={[
                      {
                        required: true,
                      },
                      {
                        max: 99,
                        whitespace: true,
                      },
                    ]}
                  >
                    <Input
                      // placeholder={formatMessage('accounts.userName')}
                      maxLength={100}
                    />
                  </Form.Item>
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <div className="main-form">
                  <Form.Item
                    label={labelFormDevice.deviceService.label}
                    name="deviceService"
                    rules={[
                      {
                        required: true,
                      },
                      // {
                      //   max: 99,
                      //   whitespace: true,
                      // },
                    ]}
                  >
                    {/* <Input
                      style={{ width: "100%" }}
                      // placeholder={formatMessage('accounts.userName')}
                      maxLength={100}
                    /> */}
                    <Select
                      mode="multiple"
                      style={{ height: "44px !important" }}
                    >
                      {DeviceServiceOption.map((value) => (
                        <Option key={v4()} value={value}>
                          {value}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                </div>
              </Col>
              <span style={{ textAlign: "start" }}>
                <span style={{ color: "red", marginRight: "5px" }}>*</span>
                Là trường thông tin bắt buộc
              </span>
            </Row>
          </Form>
        </div>
      </Row>

      <Row>
        <div className="add-device__btn-wrap">
          <Button className="cancel" onClick={handleCancel}>
            Hủy bỏ
          </Button>
          <Button className="confirm" htmlType="submit" form="addDeviceForm">
            Thêm thiết bị
          </Button>
        </div>
      </Row>
    </div>
  );
}

import { Button, Col, Form, Input, Row, Typography } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./AddDevice.scss";
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
type deviceProps = {
  setStatus?: (value: string) => void;
};
export default function AddDevice({ setStatus }: deviceProps) {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate("/device");
  };
  const handleAddDevice = () => {
    navigate("/device");
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
                    <Input
                      // placeholder={formatMessage('accounts.userName')}
                      maxLength={100}
                    />
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
                      {
                        max: 99,
                        whitespace: true,
                      },
                    ]}
                  >
                    <Input
                      style={{ width: "100%" }}
                      // placeholder={formatMessage('accounts.userName')}
                      maxLength={100}
                    />
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
          <Button className="confirm" onClick={handleAddDevice}>
            Thêm thiết bị
          </Button>
        </div>
      </Row>
    </div>
  );
}

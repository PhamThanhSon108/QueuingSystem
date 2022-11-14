import { Button, Col, Form, Input, Row, Select, Typography } from "antd";

import { useNavigate } from "react-router-dom";

import { v4 as uuidv4, v4 } from "uuid";
import { Option } from "antd/lib/mentions";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
const labelFormAccount = {
  userFullname: {
    label: "Họ tên",
  },
  phoneNumber: {
    label: "Số điện thoại",
  },
  email: {
    label: "Email",
  },
  role: {
    label: "Vai trò",
  },
  userName: {
    label: "Tên đăng nhập",
  },
  password: {
    label: "Mật khẩu",
  },
  confirmPassword: {
    label: "Nhập lại mật khẩu",
  },
  status: {
    label: "Tình trạng",
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

export default function UpdateAccount() {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const services: Array<any> | undefined = useAppSelector((state) => {
    return state.service.services;
  });
  DeviceServiceOption = services.map((value) => value?.serviceName);
  const handleCancel = () => {
    navigate("/setting/account");
  };
  const handleAddDevice = () => {};
  const handleOnfinish = (data: any) => {
    navigate("/setting/account");
  };

  return (
    <div className="devicepage">
      <Row className="devicepage__title">
        <Typography.Title>Quản lý tài khoản</Typography.Title>
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
                  Thông tin tài khoản
                </Typography.Title>
              </div>
            </Row>
            <Row className="add-device__form-box">
              <Col style={{ marginRight: 24 }}>
                <div className="main-form">
                  <Form.Item
                    label={labelFormAccount.userFullname.label}
                    name="userFullname"
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
                    <Input maxLength={100} />
                  </Form.Item>
                  <Form.Item
                    label={labelFormAccount.phoneNumber.label}
                    name="phoneNumber"
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
                    label={labelFormAccount.email.label}
                    name="email"
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
                    label={labelFormAccount.role.label}
                    name="role"
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

              <Col>
                <div className="main-form">
                  <Form.Item
                    label={labelFormAccount.userName.label}
                    name="userName"
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
                    <Input
                      // placeholder={formatMessage('accounts.userName')}
                      maxLength={100}
                    />
                  </Form.Item>
                  <Form.Item
                    label={labelFormAccount.password.label}
                    name="password"
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
                      type={"password"}
                      // placeholder={formatMessage('accounts.userName')}
                      maxLength={100}
                    />
                  </Form.Item>
                  <Form.Item
                    label={labelFormAccount.confirmPassword.label}
                    name="confirmPassword"
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
                      type={"password"}
                      // placeholder={formatMessage('accounts.userName')}
                      maxLength={100}
                    />
                  </Form.Item>
                  <Form.Item
                    label={labelFormAccount.status.label}
                    name="status"
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
            Cập nhật
          </Button>
        </div>
      </Row>
    </div>
  );
}

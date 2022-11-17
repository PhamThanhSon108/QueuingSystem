import { Button, Checkbox, Col, Form, Input, Row, Typography } from "antd";
import "../RoleManagement.scss";
import TextArea from "antd/lib/input/TextArea";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../../hooks";
const labelFormDevice = {
  serviceId: {
    label: "Mã dịch vụ",
  },
  serviceName: {
    label: "Tên dịch vụ",
  },
  serviceDescription: {
    label: "Mô tả",
  },
};
const DeviceTypeOption = ["Kiosk", "Display counter"];
const DeviceServiceOption = [
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
export default function AddRole() {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const handleCancel = () => {
    navigate("/service");
  };
  const handleAddDevice = () => {};
  const handleOnfinish = (data: any) => {
    data.surFix = !!data.surFix;
    data.resetEveryday = !!data.resetEveryday;
    data.autoIncrease = !!data.autoIncrease;
    data.preFix = !!data.preFix;
  };
  return (
    <div className="wrap-page">
      <Row className="page-title">
        <Typography.Title>Danh sách vai trò</Typography.Title>
      </Row>

      <Row className="wrap-page__add">
        <div>
          <Form
            name="addServiceForm"
            layout="vertical"
            form={form}
            id="addServiceForm"
            onFinish={handleOnfinish}
          >
            <Row>
              <div>
                <Typography.Title level={4} className="add-device__form-title">
                  Thông tin vai trò
                </Typography.Title>
              </div>
            </Row>
            <Row className="add-device__form-box">
              <Col style={{ marginRight: 24 }}>
                <div className="main-form">
                  <Form.Item
                    label={labelFormDevice.serviceId.label}
                    name="serviceId"
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
                    label={labelFormDevice.serviceDescription.label}
                    name="serviceDescription"
                    style={{ height: "100%" }}
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
                    <TextArea
                      style={{ height: 145 }}
                      // placeholder={formatMessage('accounts.userName')}
                      maxLength={100}
                    />
                  </Form.Item>
                  <span style={{ textAlign: "start" }}>
                    <span style={{ color: "red", marginRight: "5px" }}>*</span>
                    Là trường thông tin bắt buộc
                  </span>
                </div>
              </Col>

              <Col>
                <div className="main-form">
                  <div>
                    <Typography.Title
                      level={4}
                      className="role-function-decentralization-title"
                    >
                      Phân quyền chức năng
                    </Typography.Title>

                    <div className="role-function-decentralization-wrap">
                      <div className="role-function-decentralization-item">
                        <h4 className="role-function-decentralization-item-title">
                          Chức năng 01
                        </h4>
                        <Form.Item
                          valuePropName="checked"
                          name="autoIncrease"
                          rules={[]}
                        >
                          <Checkbox>
                            <div>Tất cả</div>
                          </Checkbox>
                        </Form.Item>
                        <Form.Item
                          valuePropName="checked"
                          name="autoIncrease"
                          rules={[]}
                        >
                          <Checkbox>
                            <div>Chức năng x</div>
                          </Checkbox>
                        </Form.Item>
                        <Form.Item
                          valuePropName="checked"
                          name="autoIncrease"
                          rules={[]}
                        >
                          <Checkbox>
                            <div>Chức năng y</div>
                          </Checkbox>
                        </Form.Item>
                      </div>

                      <div className="role-function-decentralization-item">
                        <h4 className="role-function-decentralization-item-title">
                          Chức năng 01
                        </h4>
                        <Form.Item
                          valuePropName="checked"
                          name="autoIncrease"
                          rules={[]}
                        >
                          <Checkbox>
                            <div>Tất cả</div>
                          </Checkbox>
                        </Form.Item>
                        <Form.Item
                          valuePropName="checked"
                          name="autoIncrease"
                          rules={[]}
                        >
                          <Checkbox>
                            <div>Chức năng x</div>
                          </Checkbox>
                        </Form.Item>
                        <Form.Item
                          valuePropName="checked"
                          name="autoIncrease"
                          rules={[]}
                        >
                          <Checkbox>
                            <div>Chức năng y</div>
                          </Checkbox>
                        </Form.Item>
                      </div>
                      <div className="role-function-decentralization-item">
                        <h4 className="role-function-decentralization-item-title">
                          Chức năng 01
                        </h4>
                        <Form.Item
                          valuePropName="checked"
                          name="autoIncrease"
                          rules={[]}
                        >
                          <Checkbox>
                            <div>Tất cả</div>
                          </Checkbox>
                        </Form.Item>
                        <Form.Item
                          valuePropName="checked"
                          name="autoIncrease"
                          rules={[]}
                        >
                          <Checkbox>
                            <div>Chức năng x</div>
                          </Checkbox>
                        </Form.Item>
                        <Form.Item
                          valuePropName="checked"
                          name="autoIncrease"
                          rules={[]}
                        >
                          <Checkbox>
                            <div>Chức năng y</div>
                          </Checkbox>
                        </Form.Item>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Form>
        </div>
      </Row>

      <Row>
        <div className="add-device__btn-wrap">
          <Button className="cancel" onClick={handleCancel}>
            Hủy bỏ
          </Button>
          <Button className="confirm" htmlType="submit" form="addServiceForm">
            Thêm dịch vụ
          </Button>
        </div>
      </Row>
    </div>
  );
}
